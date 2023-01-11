import React, { useState } from "react";
import { createJob } from "../api/fetchJobs";

type TJobs = {
    title: string;
    _id: string;
};

type Props = {
    setJobs: React.Dispatch<React.SetStateAction<TJobs[]>>;
};

export default function Form({ setJobs }: Props) {
    const [jobTitle, setJobTitle] = useState("");

    async function handleAddJob(e: React.FormEvent) {
        e.preventDefault();
        const job = await createJob(jobTitle);
        setJobs((prev) => [...prev, job]);
        setJobTitle("");
    }

    return (
        <div>
            <form onSubmit={handleAddJob}>
                <label>
                    <p>Job Title</p>
                    <input
                        type="text"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setJobTitle(e.target.value);
                        }}
                        value={jobTitle}
                    />
                </label>
                <button>Add Job</button>
            </form>
        </div>
    );
}
