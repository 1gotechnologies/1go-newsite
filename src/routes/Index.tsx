import React, { useEffect, useState } from "react";

import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import ListPage from "../pages/ListPage";
import DetailsPage from "../pages/DetailsPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SummaryPage from "../pages/SummaryPage";
import OngoingTour from "../pages/OngoingTour";
import BucketList from "../pages/BucketList";
import Profile from "../pages/Profile";

const Index = () => {
  const [title, setTitle] = useState("1go Admin Panel");
  const [auth, setAuth] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // setAuth(localStorage.getItem("x_key") ? true : false);
  }, [location]);

  return (
    <Routes>
      <Route
        path="/"
        // exact={true}
        element={auth ? <Home /> : <Navigate to={"login"} />}
      />
      <Route
        path="dashboard"
        // exact={true}
        element={auth ? <Home /> : <Navigate to={"login"} />}
      />
      <Route
        path="/ongoing-tour"
        // exact={true}
        element={auth ? <OngoingTour /> : <Navigate to={"login"} />}
      />
      <Route
        path="/profile"
        // exact={true}
        element={auth ? <Profile /> : <Navigate to={"login"} />}
      />
      <Route
        path="bucket-list"
        // exact={true}
        element={auth ? <BucketList /> : <Navigate to={"login"} />}
      />
      <Route
        path="bucket-list/add"
        // exact={true}
        element={auth ? <BucketList add /> : <Navigate to={"login"} />}
      />
      <Route
        path="settings"
        // exact={true}
        element={auth ? <ListPage type="pending" /> : <Navigate to={"login"} />}
      />
      {/* <Route
        path="/account/:agency"
        element={auth ? <ListPage type="account" /> : <Navigate to={"login"} />}
      /> */}
      <Route
        path="/approved"
        // exact={true}
        element={
          auth ? <SummaryPage type="approved" /> : <Navigate to={"login"} />
        }
      />
      <Route
        path="/approved/:agency"
        element={
          auth ? <ListPage type="approved" /> : <Navigate to={"login"} />
        }
      />
      <Route
        path="/declined"
        // exact={true}
        element={
          auth ? <SummaryPage type="declined" /> : <Navigate to={"login"} />
        }
      />
      <Route
        path="/declined/:agency"
        element={
          auth ? <ListPage type="declined" /> : <Navigate to={"login"} />
        }
      />
      <Route
        path="/paid"
        // exact={true}
        element={auth ? <SummaryPage type="paid" /> : <Navigate to={"login"} />}
      />
      <Route
        path="/paid/:agency"
        element={auth ? <ListPage type="paid" /> : <Navigate to={"login"} />}
      />
      <Route
        path="/:type/details/:id"
        // exact={true}
        element={auth ? <DetailsPage /> : <Navigate to={"login"} />}
      />
      <Route
        path="/login"
        element={/*!auth ?*/ <Login /> /* : <Navigate to={"/"} />*/}
      />
      <Route
        path="/register"
        element={/*!auth ?*/ <Register /> /* : <Navigate to={"/"} />*/}
      />
    </Routes>
  );
};

export default Index;
