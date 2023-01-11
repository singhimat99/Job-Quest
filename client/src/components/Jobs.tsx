import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";

type Props = {};

export default function Jobs({}: Props) {
    const { jobs, error } = useJobs();
    return (
        <div>
            {!error ? (
                <ul>
                    {jobs?.map((job) => {
                        return (
                            <li key={job._id}>
                                <JobCard job={job} />
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <div>error</div>
            )}
        </div>
    );
}

type TJobs = {
    title: string;
    _id: string;
};

type FetchJobs = {
    jobs: TJobs[];
    error: string;
};
function useJobs(): FetchJobs {
    const [jobs, setJobs] = useState<TJobs[]>([]);
    const [error, setError] = useState("");
    useEffect(() => {
        async function getData() {
            const response = await fetch("http://localhost:8080/jobs");
            const data = await response.json();
            setJobs(data);
        }
        getData();
    }, []);
    return {
        jobs,
        error,
    };
}
