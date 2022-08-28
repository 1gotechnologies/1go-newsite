import { Btn } from "./Styled";

const BucketListAdd = () => {
  return (
    <section className="relative px-3 flex flex-col gap-8">
      <h1 className="capitalize text-2xl font-semibold sticky top-[70px] md:top-11 !w-full py-3 !bg-[#FCFCFC] z-10">
        Create your explore bucket list
      </h1>

      <p className=" px-1">
        Let’s make your dreams come true. Tell us where you would like to visit
        or an event you would like to attend and we might just make it happen
      </p>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-nowrap gap-6 px-1"
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
  );
};

export default BucketListAdd;
