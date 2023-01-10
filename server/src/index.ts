import express, { Response, Request } from "express";
import mongoose from "mongoose";
import JobModel from "./models/Job";

const app = express();

const PORT = 8080;

app.use(express.json());

app.post("/jobs", async (req: Request, res: Response) => {
    const newJob = new JobModel({
        title: req.body.title,
    });
    const createdJob = await newJob.save();
    res.json(createdJob);
});

mongoose
    .connect(
        "mongodb+srv://singhimat99:T4g8JrlnLVzfZgxH@cluster0.wnaznvn.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
        app.listen(PORT, () => {
            console.log(`server listening on port ${PORT}`);
        });
    });
