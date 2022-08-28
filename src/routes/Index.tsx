import React, { useEffect, useState } from "react";

import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import ListPage from "../pages/ListPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import OngoingTour from "../pages/OngoingTour";
import BucketList from "../pages/BucketList";
import Profile from "../pages/Profile";
import BucketListAdd from "../components/BucketListAdd";
import OngoingTourIndex from "../components/OngoingTourIndex";
import BucketListIndex from "../components/BucketListIndex";
import OngoingTourAgent from "../components/OngoingTourAgent";

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
      <Route path="/" element={auth ? <Home /> : <Navigate to={"login"} />} />

      <Route
        path="dashboard"
        element={auth ? <Home /> : <Navigate to={"login"} />}
      />

      <Route
        path="ongoing-tour"
        element={auth ? <OngoingTour /> : <Navigate to={"login"} />}
      >
        <Route path="" element={<OngoingTourIndex />} />
        <Route path=":id/select-agent" element={<OngoingTourAgent />} />
        <Route path=":id/select-category" element={<OngoingTour />} />
        <Route path=":id/visa-registration" element={<OngoingTour />} />
        <Route path=":id/select-package" element={<OngoingTour />} />
        <Route path=":id/booking-summary" element={<OngoingTour />} />
        <Route path=":id/booking-complete" element={<OngoingTour />} />
        <Route path=":id/booking-ticket" element={<OngoingTour />} />
      </Route>

      <Route
        path="profile"
        // exact={true}
        element={auth ? <Profile /> : <Navigate to={"login"} />}
      />

      <Route
        path="bucket-list"
        element={auth ? <BucketList /> : <Navigate to={"login"} />}
      >
        <Route
          path=""
          element={auth ? <BucketListIndex /> : <Navigate to={"login"} />}
        />
        <Route
          path="add"
          element={auth ? <BucketListAdd /> : <Navigate to={"login"} />}
        />
      </Route>

      <Route
        path="settings"
        // exact={true}
        element={auth ? <ListPage type="pending" /> : <Navigate to={"login"} />}
      />

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
