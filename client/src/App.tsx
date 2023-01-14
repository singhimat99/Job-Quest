import { useState, useEffect, Suspense } from "react";
import Dashboard from "./pages/Dashboard";
import Form from "./components/JobForm";
import JobCard from "./components/JobCard";
import { getJobs, TJobs } from "./api/fetchJobs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
    const { jobs, error, setJobs } = useJobs();

    return (
        <AuthProvider>
            <div className="App">
                <Router>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                    </Routes>
                </Router>
            </div>
        </AuthProvider>
    );
}

type FetchedJobs = {
    jobs: TJobs[];
    setJobs: React.Dispatch<React.SetStateAction<TJobs[]>>;
    error: string;
};

function useJobs(): FetchedJobs {
    const [jobs, setJobs] = useState<TJobs[]>([]);
    const [error, setError] = useState("");
    useEffect(() => {
        async function getData() {
            const data = await getJobs();
            setJobs(data);
        }
        getData();
    }, []);
    return {
        jobs,
        setJobs,
        error,
    };
}
export default App;
