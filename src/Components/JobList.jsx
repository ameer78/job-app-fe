import React from "react";
import ListGroup from "react-bootstrap/ListGroup"
const JobList = (props) => {
  return (
    <div>
      <h1>Job List</h1>
      <div>
        <ListGroup>
         {props.jobs && props.jobs.length > 0 && props.jobs.map(item => 
           <ListGroup.Item Key={item.id} >{item.name}</ListGroup.Item>
         )}
        </ListGroup>
      </div>
    </div>
  );
};

export default JobList;
