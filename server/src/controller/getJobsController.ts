import express, { Response, Request } from "express";
import JobModel from "../models/Job";

export async function getJobsController(req: Request, res: Response) {
    const jobs = await JobModel.find();
    res.json(jobs);
}
