import React from "react";
import ListGroup from "react-bootstrap/ListGroup"
const JobList = (props) => {
  return (
    <div>
      <h1>Job List</h1>
      <div>
        <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};

export default JobList;
