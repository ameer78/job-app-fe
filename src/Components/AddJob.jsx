import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const AddJob = (props) => {
  const [jobName, setJobName] = React.useState("");
  const [jobId, setJobId] = React.useState("");
  const validateFields = () => {
    if (!jobId.trim() || !jobName.trim()) {
      return false;
    }
    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFields()) {
      props.addJob(jobName, jobId);
    }
  };
  console.log(props.jobCreated);
  return (
    <div>
      {props.jobCreated && (
        <Alert variant="success">Created Successfully</Alert>
      )}
      {props.err && (
        <Alert variant="danger">Unable to create Job</Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Job Id</Form.Label>
          <Form.Control
            required={true}
            type="text"
            onChange={(e) => {
              setJobId(e.currentTarget.value);
            }}
            placeholder="Enter Job Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Job Name</Form.Label>
          <Form.Control required={true} type="text" 
               onChange={(e) => {
                setJobName(e.currentTarget.value);
              }}
          placeholder="Job Name" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default AddJob;
