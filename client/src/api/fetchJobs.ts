import { API_URL } from "./config";

export type TJobs = {
    title: string;
    _id: string;
};
export async function createJob(jobTitle: string) {
    const response = await fetch(`${API_URL}/jobs`, {
        method: "POST",
        body: JSON.stringify({
            title: jobTitle,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response.json();
}

export async function getJobs() {
    const response = await fetch(`${API_URL}/jobs`);
    return response.json();
}

export async function deleteJob(jobId: string) {
    const response = await fetch(`${API_URL}/jobs/${jobId}`, {
        method: "DELETE",
    });
    return response.json();
}

export async function updateJob(jobId: string, jobTitle: string | null) {
    const response = await fetch(`${API_URL}/jobs/${jobId}`, {
        method: "PUT",
        body: JSON.stringify({
            title: jobTitle,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response.json();
}
