import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const CompletedTask = () => {
  const [completedTask, setCompletedTask] = useState([]);
  const email = "sania@gmail.com";
  const taskStatus = "Completed";
  useEffect(() => {
    fetch(`http://localhost:5000/task?email=${email}&status=${taskStatus}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCompletedTask(data);
      });
  }, []);
  return (
    <div>
      <h2>Completed Task</h2>
      <Table>
        <thead>
          <th>Serial No.</th>
          <th>Email</th>
          <th>Task Name</th>
          <th>Task Date</th>
          <th>Status</th>
        </thead>
      </Table>
    </div>
  );
};

export default CompletedTask;
