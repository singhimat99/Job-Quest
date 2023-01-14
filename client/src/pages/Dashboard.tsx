import React from "react";
import { useState, useEffect } from "react";
import { getJobs, TJobs } from "../api/fetchJobs";
import Form from "../components/JobForm";
import JobCard from "../components/JobCard";

type Props = {};

export default function Dashboard({}: Props) {
    const { jobs, error, setJobs } = useJobs();
    return (
        <div>
            {" "}
            <h1 className="text-red-500">Hola</h1>
            <Form setJobs={setJobs} />
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
        </div>
    );
}

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
            const data = await getJobs();
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
