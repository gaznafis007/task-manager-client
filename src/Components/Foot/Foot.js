import React from "react";
import { Container } from "react-bootstrap";

const Foot = () => {
  return (
    <div className="bg-light mx-auto p-4 position-fixed bottom-0 w-100">
      <h2 className="ms-5">Task Manager</h2>
      <p className="mt-2 ms-5">
        &copy; All rights reserved to Task Manager til 2026
      </p>
    </div>
  );
};

export default Foot;
