import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function DashBoard() {
  const [auth, setAuth] = useState(false);
  const userauth = localStorage.getItem("permission");
  const a = 5;

  useEffect(() => {
    if (userauth) {
      setAuth(true);
      console.log(auth);
    }
  }, []);

  if (!userauth) {
    return <Navigate replace to="/login" />;
  } else {
    return <div>Welcome to Dash Board</div>;
  }
}
