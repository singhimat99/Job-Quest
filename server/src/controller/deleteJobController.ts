import express, { Response, Request } from "express";
import JobModel from "../models/Job";

export async function deleteJobController(req: Request, res: Response) {
    const jobId = req.params.jobId;
    const deletedJob = await JobModel.findByIdAndDelete(jobId);
    res.json(deletedJob);
}
