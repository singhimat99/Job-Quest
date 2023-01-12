import { config } from "dotenv";
config();
import express, { Response, Request } from "express";
import cors from "cors";
import mongoose from "mongoose";
import JobModel from "./models/Job";
import { deleteJobController } from "./controller/deleteJobController";
import { updateJobController } from "./controller/updateJobController";
import { getJobsController } from "./controller/getJobsController";
import { createJobController } from "./controller/createJobController";

const app = express();

const PORT = 8080;

app.use(cors());
app.use(express.json());

app.post("/jobs", createJobController);
app.get("/jobs", getJobsController);
app.delete("/jobs/:jobId", deleteJobController);
app.put("/jobs/:jobId", updateJobController);

mongoose.connect(process.env.MONGO_URL!).then(() => {
    app.listen(PORT, () => {
        console.log(`server listening on port ${PORT}`);
    });
});
