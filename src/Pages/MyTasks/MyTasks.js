import React from "react";
import TasksTable from "../../Components/TasksTable/TasksTable";

const MyTasks = () => {
  return (
    <div>
      <h3 className="text-center my-4">Tasks</h3>
      <TasksTable></TasksTable>
    </div>
  );
};

export default MyTasks;
