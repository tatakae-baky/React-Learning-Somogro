import React from "react";
import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      <h1 className="text-center text-2xl font-bold">
        Users : {users.length}
      </h1>
      <div className="grid grid-cols-3 gap-5 m-5">
        {users.map((user) => {
          return <User key={user.id} user={user}></User>;
        })}
      </div>
    </div>
  );
};

export default Users;
