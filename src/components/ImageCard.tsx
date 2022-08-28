interface Props {
  image?: string;
  title?: string;
  caption?: string;
}

const SummaryCard: React.FC<Props> = (props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${props.image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="text-white p-2 md:p-5 w-[146px] h-[116px] md:w-[200px] md:h-[158px] !bg-slate-500 "
    >
      <h4 className="font-semibold text-base truncate leading-none">
        {props.title}
      </h4>
      <p className="truncate leading-none">{props.caption}</p>
    </div>
  );
};

export default SummaryCard;
