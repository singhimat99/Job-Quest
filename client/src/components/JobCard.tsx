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
        <div className="border border-black relative">
            <div>
                <h4>01/10/23</h4>
                <h2>Company Name</h2>
                <h4>
                    <span>{job.title}</span>
                    <span> · </span>
                    <span>Fremont</span>
                </h4>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laboriosam quia totam repudiandae maiores repellat dolorum
                    harum voluptatem quae recusandae. Laboriosam omnis quo ipsa
                    nemo inventore illum aperiam explicabo exercitationem
                    voluptates.
                </p>
                <div>Status</div>
            </div>
            <div className="absolute top-2 right-2 flex gap-2">
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
        </div>
    );
}
