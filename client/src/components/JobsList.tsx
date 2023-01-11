import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";

type Props = {};

export default function Jobs({}: Props) {
    const { jobs, error, setJobs } = useJobs();
    return (
        <div>
            {!error ? (
                <ul>
                    {jobs?.map((job) => {
                        return (
                            <li key={job._id}>
                                <JobCard job={job} setJobs={setJobs} />
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

type FetchedJobs = {
    jobs: TJobs[];
    setJobs: React.Dispatch<React.SetStateAction<TJobs[]>>;
    error: string;
};

function useJobs(): FetchedJobs {
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
        setJobs,
        error,
    };
}
