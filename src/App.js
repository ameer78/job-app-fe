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
  const [jobCreated, setJobCreated] = useState(false)
  const [jobCreatedErr, setJobCreatedErr] = useState(false)
  
  const addJob = async (jobName, jobID) => {
    try{
      const response = await axios.post("http://localhost:8080/jobs",{
        id:jobID,
        name:jobName
      })
      if(response.status == 200){
        setJobCreated(true);
        setJobCreatedErr(false);
        getJobs();
      }
    }catch(err){
      setJobCreated(false);
      setJobCreatedErr(true);
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
      <AddJob addJob={addJob} err={jobCreatedErr} jobCreated={jobCreated} />
    </div>
  );
}

export default App;
