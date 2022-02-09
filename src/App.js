import logo from "./logo.svg";
import "./App.css";
import JobList from "./Components/JobList";
import AddJob from "./Components/AddJob";
import "bootstrap/dist/css/bootstrap.min.css";
import { JobsReducer, ACTIONS } from "./reducer/JobsReducer";
import { useReducer, useEffect, useState } from "react";
import axios from "axios";

const initialState = {
  userDetails: "",
  loading: false,
  error: null,
};

function App() {
  const [state, dispatch] = useReducer(JobsReducer, initialState);
  const { jobs, loading, error } = state;
  const [jobsCreated, setJobCreated] = useState(false)
  
  const addJob = (jobName, jobID) => {
    const response = axios.post("http://localhost:8080/jobs",{
      jobID,
      jobName
    })
    if(response.status == 200){
      setJobCreated(true);
      getJobs();
    }else{
      setJobCreated(false);
    }
  }

  const getJobs = async () => {
    let response = await axios.get("http://localhost:8080/jobs");
    if (response.status == 200) {
      dispatch({ type: ACTIONS.SUCCESS, data: response.data });
      return;
    }
    dispatch({ type: ACTIONS.ERROR, error: response.error });
  };

  useEffect(() => {
    dispatch({ type: ACTIONS.CALL_API });
    getJobs();


  }, []);


  return (
    <div className="App">
      <JobList jobs={jobs} />
      <AddJob addJob={addJob} />
    </div>
  );
}

export default App;