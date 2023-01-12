import React from "react";
import { deleteJob, updateJob } from "../api/fetchJobs";

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

    async function handleUpdateJob(jobId: string) {
        const newTitle = prompt("new job title");
        const updatedJob = await updateJob(jobId, newTitle);
        setJobs((prev) =>
            prev.map((job) => {
                if (job._id === jobId) job.title = newTitle || "";
                return job;
            })
        );
    }

    return (
        <div className="border border-black">
            {job.title}{" "}
            <button
                onClick={() => {
                    handleUpdateJob(job._id);
                }}
            >
                Edit
            </button>
            <button
                onClick={() => handleDeleteJob(job._id)}
                className="text-red-500"
            >
                X
            </button>
        </div>
    );
}
