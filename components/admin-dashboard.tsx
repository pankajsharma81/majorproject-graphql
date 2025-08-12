import React from "react";
import AddUserButton from "./add-user-btn";

export default function AdminDashboard() {
  return (
    <div className="flex justify-between">
      <div></div>
      <div className="w-96">
        <div><AddUserButton/></div>
        <div>User List</div>
      </div>
    </div>
  );
}
