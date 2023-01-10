import { config } from "dotenv";
config();
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

mongoose.connect(process.env.MONGO_URL!).then(() => {
    app.listen(PORT, () => {
        console.log(`server listening on port ${PORT}`);
    });
});
