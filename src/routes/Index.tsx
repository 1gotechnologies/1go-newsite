import React, { useEffect, useState } from "react";

import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import OngoingTour from "../pages/OngoingTour";
import BucketList from "../pages/BucketList";
import Profile from "../pages/Profile";
import BucketListAdd from "../components/BucketListAdd";
import OngoingTourIndex from "../components/OngoingTourIndex";
import BucketListIndex from "../components/BucketListIndex";
import OngoingTourProcess from "../components/OngoingTourProcess";

const Index = () => {
  const [title, setTitle] = useState("1go Admin Panel");
  const [auth, setAuth] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // setAuth(localStorage.getItem("x_key") ? true : false);
    document.title = title;
  }, [location]);

  return (
    <Routes>
      <Route path="" element={auth ? <Home /> : <Navigate to={"/login"} />} />

      <Route
        path="dashboard"
        element={auth ? <Home /> : <Navigate to={"/login"} />}
      />

      <Route
        path="ongoing-tour"
        element={auth ? <OngoingTour /> : <Navigate to={"/login"} />}
      >
        <Route path=":id/" element={<OngoingTourIndex />} />
        <Route path=":id/continue" element={<OngoingTourProcess />} />
      </Route>

      <Route
        path="profile"
        element={auth ? <Profile /> : <Navigate to={"/login"} />}
      />

      <Route
        path="settings"
        element={auth ? <Profile /> : <Navigate to={"/login"} />}
      />

      <Route
        path="bucket-list"
        element={auth ? <BucketList /> : <Navigate to={"/login"} />}
      >
        <Route path="" element={<BucketListIndex />} />
        <Route path="add" element={<BucketListAdd />} />
      </Route>

      <Route
        path="login"
        element={/*!auth ?*/ <Login /> /* : <Navigate to={"/"} />*/}
      />

      <Route
        path="register"
        element={/*!auth ?*/ <Register /> /* : <Navigate to={"/"} />*/}
      />
    </Routes>
  );
};

export default Index;
