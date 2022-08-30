import MainLayout from "../layout/MainLayout";
import { Outlet } from "react-router-dom";

const OngoingTour = () => {
  return (
    <MainLayout>
      <section className="container px-3 pb-10">
        <Outlet />
      </section>
    </MainLayout>
  );
};

export default OngoingTour;
