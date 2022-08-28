import { faker } from "@faker-js/faker";
import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { Outlet, useNavigate } from "react-router-dom";
import emptyBucket from "../assets/emptyBucket.svg";
import BucketListItem from "../components/BucketListItem";
import { Btn } from "../components/Styled";
import MainLayout from "../layout/MainLayout";

const BucketList = () => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export default BucketList;
