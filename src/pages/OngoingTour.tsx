import MainLayout from "../layout/MainLayout";
import React from "react";
import { faker } from "@faker-js/faker";
import ImageCard from "../components/ImageCard";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";

// Full name:
// Category:
// Number of persons:
// Email address:
// Phone number:
// Package type:
// Price:

const OngoingTour = () => {
  return (
    <MainLayout>
      <section className="container px-3 flex flex-col gap-8 pb-10">
        <Outlet />
      </section>
    </MainLayout>
  );
};

export default OngoingTour;
