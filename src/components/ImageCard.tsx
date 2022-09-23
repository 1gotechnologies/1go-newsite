import { faker } from "@faker-js/faker";
import { Link } from "react-router-dom";

interface Props {
  image?: string;
  title?: string;
  caption?: string;
}

const SummaryCard: React.FC<Props> = (props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${
          props.image ?? faker.image.imageUrl(undefined, undefined, "place")
        })`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="text-white w-[146px] h-[116px] md:w-[200px] md:h-[158px] !bg-slate-500 relative"
    >
      <div className="abolute bg-slate-900 bg-opacity-40 w-full h-full top-0 left-0 p-2 md:p-5  flex flex-col justify-end text-left">
        <h4 className="font-semibold text-base truncate " title={props.title}>
          {props.title}
        </h4>
        <p className="truncate " title={props.caption}>
          {props.caption}
        </p>
      </div>
    </div>
  );
};

export default SummaryCard;
