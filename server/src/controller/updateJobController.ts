import express, { Response, Request } from "express";
import JobModel from "../models/Job";

export async function updateJobController(req: Request, res: Response) {
    const jobId = req.params.jobId;
    const { title } = req.body;
    const updatedJob = await JobModel.findByIdAndUpdate(jobId, {
        title,
    });
    res.json(updatedJob);
}
