export type TJobs = {
    title: string;
    _id: string;
};
export async function createJob(jobTitle: string) {
    const response = await fetch("http://localhost:8080/jobs", {
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
    const response = await fetch("http://localhost:8080/jobs");
    return response.json();
}

export async function deleteJob(jobId: string) {
    const response = await fetch(`http://localhost:8080/jobs/${jobId}`, {
        method: "DELETE",
    });
    return response.json();
}
