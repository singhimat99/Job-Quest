import express, { Response, Request } from "express";
import JobModel from "../models/Job";

export async function createJobController(req: Request, res: Response) {
    const newJob = new JobModel({
        title: req.body.title,
    });
    const createdJob = await newJob.save();
    res.json(createdJob);
}
