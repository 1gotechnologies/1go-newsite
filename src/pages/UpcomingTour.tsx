import MainLayout from "../layout/MainLayout";
import { Outlet } from "react-router-dom";

const UpcomingTour = () => {
  return (
    <MainLayout title="Upcoming Tour">
      <section className="container px-3 pb-10">
        <Outlet />
      </section>
    </MainLayout>
  );
};

export default UpcomingTour;
