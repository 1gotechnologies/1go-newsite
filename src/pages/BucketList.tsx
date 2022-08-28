import { faker } from "@faker-js/faker";
import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import emptyBucket from "../assets/emptyBucket.svg";
import BucketListItem from "../components/BucketListItem";
import { Btn } from "../components/Styled";
import MainLayout from "../layout/MainLayout";

const BucketList: React.FC<{
  add?: boolean;
}> = (props) => {
  const [list, setList] = useState<any[] | undefined>([]);

  const navigate = useNavigate();
  return (
    <MainLayout>
      <div className="h-full">
        {!props.add && (
          <div className="w-full">
            {!list && (
              <section className=" h-full max-h-full overflow-y-auto flex flex-col gap-8 items-center p-10 text-center">
                <div className="flex justify-center items-center">
                  <img src={emptyBucket} alt="Empty Bucket" />
                </div>
                <h5 className="font-semibold text-base leading-none">
                  Bucket list empty
                </h5>
                <div className="text-sm">
                  Let’s make your dreams come true. Add places/events you woud
                  like to visit/attend.{" "}
                </div>

                <div className="fixed bottom-20 md:bottom-0 right-5 md:right-0 md:relative text-right md:w-full flex justify-end pt-0 md:pt-10">
                  <AiFillPlusCircle
                    className="text-[#1F66D0] !min-w-[3rem] cursor-pointer"
                    size={"3rem"}
                    onClick={() => navigate("/bucket-list/add")}
                  />
                </div>
              </section>
            )}
            {list && (
              <section className="relative px-3 flex flex-col gap-8">
                <h1 className="capitalize text-2xl font-semibold py-1 sticky top-5 bg-[#FCFCFC]">
                  Bucket list
                </h1>

                <p className=" text-sm">
                  Let’s make your dreams come true. Add places/events you woud
                  like to visit/attend.
                </p>

                <div className="flex flex-col gap-3">
                  {[1, 2, 3, 4, 5].map((el, index) => (
                    <BucketListItem
                      id={faker.database.mongodbObjectId()}
                      title={faker.address.cityName()}
                      key={index}
                    />
                  ))}
                </div>
              </section>
            )}
          </div>
        )}

        {props.add && (
          <section className="relative px-3 flex flex-col gap-8">
            <h1 className="capitalize text-2xl font-semibold py-1 sticky top-5 bg-[#FCFCFC]">
              Create your explore bucket list
            </h1>

            <p className="">
              Let’s make your dreams come true. Tell us where you would like to
              visit or an event you would like to attend and we might just make
              it happen
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-nowrap gap-6"
            >
              <input
                type="text"
                className="grow bg-[#E5E5E5] h-10 px-3 outline-none border-0"
              />
              <Btn
                type="submit"
                className="bg-[#1F66D0] text-white font-medium min-w-[75px]"
              >
                Add
              </Btn>
            </form>
          </section>
        )}
      </div>
    </MainLayout>
  );
};

export default BucketList;
