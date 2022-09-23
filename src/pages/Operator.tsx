import MainLayout from "../layout/MainLayout";
import { Outlet, useParams } from "react-router-dom";

const Operator = () => {
  const { id } = useParams();
  return (
    <MainLayout title={id ?? "Tour Operator"}>
      <section className="container px-3 pb-10">
        <Outlet />
      </section>
    </MainLayout>
  );
};

export default Operator;
