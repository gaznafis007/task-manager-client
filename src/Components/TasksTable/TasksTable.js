import React, { useContext, useEffect, useState } from "react";
import { Button, Spinner, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const TasksTable = () => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();
  const [myTasks, setMyTasks] = useState([]);
  // const email = "sania@gmail.com";
  //   const email = "halumVai@halum.com";
  useEffect(() => {
    fetch(
      `https://task-manager-server-chi.vercel.app/task?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyTasks(data);
        setLoading(false);
      });
  }, [user]);
  const handleComplete = (taskId) => {
    fetch(`https://task-manager-server-chi.vercel.app/task/${taskId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "completed" }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    setCompleted(true);
    navigate("/donetask");
  };
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
  if (loading) {
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
    <Table className="w-75 mx-auto" striped bordered size="lg">
      <thead>
        <tr>
          <th>Serial No.</th>
          <th>Email</th>
          <th>Task Name</th>
          <th>Task Date</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {myTasks.map((myTask, idx) => (
          <tr key={myTask._id}>
            <td>{idx + 1}</td>
            <td>{myTask.email}</td>
            <td>{myTask.task}</td>
            <td>{myTask.taskDate}</td>
            <td>{myTask.status}</td>
            <td>
              {completed ? (
                <Button disabled>Completed</Button>
              ) : (
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => handleComplete(myTask._id)}
                >
                  Mark as Complete
                </Button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TasksTable;
