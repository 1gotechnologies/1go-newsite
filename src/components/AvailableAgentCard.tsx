import { faker } from "@faker-js/faker";
import React from "react";
import { Link } from "react-router-dom";
import { Btn } from "./Styled";

interface Props {
  package: string;
  prices: object;
  duration: string;
  name: string;
  logo: string;
  id: string;
  select: (id: string) => void;
}

const AvailableAgentCard: React.FC<Props> = (props) => {
  const select = (id: string) => {
    props.select(id);
  };
  return (
    <div className="rounded-2xl shadow-md mx-auto max-w-[350px] border-[##ACAAAA] border p-3 flex  break-all flex-col gap-5 min-h-[450px]">
      {/* brand */}
      <div className="flex p-4 items-center gap-5">
        <div
          style={{
            backgroundImage: `url(${
              props.logo ?? faker.image.imageUrl(undefined, undefined, "place")
            })`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="min-w-[55px] min-h-[55px] !bg-slate-500"
        >
          {!props.logo ? "LOGO" : ""}
        </div>

        <h5 className="text-base font-medium">{props.name}</h5>
      </div>
      {/* details */}

      <div className="flex flex-col gap-2 text-sm grow">
        <div className="flex gap-2 items-start">
          <strong className="min-w-[105px]">
            <>Package:</>
          </strong>
          <div className="grow">{props.package}</div>
        </div>

        <div className="flex gap-2 items-start">
          <strong className="min-w-[105px]">
            <>Price:</>
          </strong>
          <div className="grow">{JSON.stringify(props.prices)}</div>
        </div>

        <div className="flex gap-2 items-start">
          <strong className="min-w-[105px]">
            <>Tour duration:</>
          </strong>
          <div className="grow">{props.duration}</div>
        </div>

        <Link
          to={`/operator/${props.id}/info`}
          className="text-right font-medium text-[#1F66D0] w-full"
        >
          View Portfolio
        </Link>
      </div>

      <Btn
        className="w-[200px] bg-[#1F66D0] text-white font-semibold !py-3 self-center my-3"
        onClick={() => select(props.id)}
        type="button"
      >
        Select
      </Btn>
    </div>
  );
};

export default AvailableAgentCard;
