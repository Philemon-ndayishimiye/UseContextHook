import React from "react";
import useUser from "../hooks/useUser";

export default function Profile() {
  const { user } = useUser();

  console.log(user);

  return (
    <div>
      <h1>{user.fullname}</h1>
      <h1>{user.address}</h1>
      <h1>{user.company}</h1>
    </div>
  );
}
