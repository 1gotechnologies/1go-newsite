import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AuthHeaderComponent from "../components/AuthHeaderComponent";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import { Btn } from "../components/Styled";
import useBookingStore from "../stores/booking";

export interface Props {
  children: React.ReactElement;
  auth?: boolean;
  title?: string;
}
const MainLayout: React.FC<Props> = (props) => {
  const { pathname } = useLocation();
  const booking = useBookingStore();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
      // behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, [pathname]);

  const [actionSheet, setActionSheet] = useState(false);

  useEffect(() => {
    document.title =
      props.title ??
      "1goexplore | Become an explorer, explore the world - 1goexplore.com";
  }, [props.title]);

  return (
    <main className="flex flex-col justify-between bg-[#FCFCFC] min-h-screen">
      {!props.auth && <HeaderComponent />}
      {props.auth && <AuthHeaderComponent />}
      {/* <div>
        <Btn
          onClick={() => setActionSheet(true)}
          className="!p-3 rounded-md min-w-150 bg-green-600 hover:bg-green-900 text-white transition-all duration-500"
        >
          {" "}
          Pay Now
        </Btn>
      </div> */}
      <section
        className={`grow py-5 container max-w-screen-lg px-2 ${
          props.auth
            ? " flex h-full items-end md:items-center justify-around gap-7 !px-10 !py-20"
            : " "
        } `}
      >
        <> {props.children} </>
      </section>
      <div className="p-10 md:p-5" />
      {!props.auth && <FooterComponent showActionSheet={actionSheet} />}
    </main>
  );
};

export default MainLayout;
