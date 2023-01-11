import React, { useState } from "react";

type Props = {};

export default function Form({}: Props) {
    const [jobTitle, setJobTitle] = useState("");

    async function handleAddJob(e: React.FormEvent) {
        e.preventDefault();
        await fetch("http://localhost:8080/jobs", {
            method: "POST",
            body: JSON.stringify({
                title: jobTitle,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
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
