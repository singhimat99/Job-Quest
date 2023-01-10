import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const JobSchema = new Schema({
    title: String,
});

const JobModel = mongoose.model("Job", JobSchema);

export default JobModel;
