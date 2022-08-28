import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BucketListEmpty from "./BucketListEmpty";
import BucketListNotEmpty from "./BucketListNotEmpty";

const BucketList = () => {
  const [list, setList] = useState<any[] | undefined>();

  const navigate = useNavigate();
  return (
    <>
      {list?.length ? <BucketListNotEmpty list={list} /> : <BucketListEmpty />}
    </>
  );
};

export default BucketList;
