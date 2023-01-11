import React from "react";
import { deleteJob } from "../api/fetchJobs";

type TJobs = {
    title: string;
    _id: string;
};

type Props = {
    job: TJobs;
    setJobs: React.Dispatch<React.SetStateAction<TJobs[]>>;
};

export default function JobCard({ job, setJobs }: Props) {
    async function handleDeleteJob(jobId: string) {
        await deleteJob(job._id);
        setJobs((prev: TJobs[]) => prev.filter((job) => job._id !== jobId));
    }
    return (
        <div className="border border-black">
            {job.title}{" "}
            <button
                onClick={() => handleDeleteJob(job._id)}
                className="text-red-500"
            >
                X
            </button>
        </div>
    );
}
