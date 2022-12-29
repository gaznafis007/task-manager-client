import React from "react";
import FormField from "../../Components/FormField";

const AddTask = () => {
  return (
    <div className="p-4">
      <h2 className="text-center">Add your Task!</h2>
      <div className="w-75 mx-auto my-2">
        <FormField></FormField>
      </div>
    </div>
  );
};

export default AddTask;
