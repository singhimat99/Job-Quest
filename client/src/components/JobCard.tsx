import React from "react";

type TJobs = {
    title: string;
    _id: string;
};

type Props = {
    job: TJobs;
};

export default function JobCard({ job }: Props) {
    return <div className="border border-black">{job.title}</div>;
}
