import React, { useContext, useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import { AuthContext } from "../../context/AuthProvider";

const CompletedTask = () => {
  // const email = "sania@gmail.com";
  const { user, loading } = useContext(AuthContext);
  const taskStatus = "Completed";
  const [completedTasks, setCompletedTasks] = useState([]);
  useEffect(() => {
    fetch(
      `http://localhost:5000/task?email=${user?.email}&status=${taskStatus}`
    )
      .then((res) => res.json())
      .then((data) => setCompletedTasks(data));
  }, [user]);
  if (!user?.uid) {
    return (
      <div className="text-center">
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
      </div>
    );
  }
  return (
    <div>
      <h2 className="text-center my-4">Completed Tasks</h2>
      <Table bordered striped className="w-75 mx-auto">
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Email</th>
            <th>Task Name</th>
            <th>Task Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {completedTasks.map((completedTask, idx) => (
            <tr key={completedTask._id}>
              <td>{idx + 1}</td>
              <td>{completedTask.email}</td>
              <td>{completedTask.task}</td>
              <td>{completedTask.taskDate}</td>
              <td>{completedTask.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CompletedTask;
