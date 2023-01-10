import React, { useEffect, useState } from "react";

type Props = {};

export default function Jobs({}: Props) {
    const { jobs, error } = useJobs();
    return (
        <div>
            {!error ? (
                jobs?.map((job) => {
                    return <div key={job._id}>{job.title}</div>;
                })
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
