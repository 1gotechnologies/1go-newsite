import React, {
  createRef,
  FormEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import Dropdown from "./Dropdown";
import { Btn } from "./Styled";

const PassportUpload: React.FC<{
  index: number;
  setFile: (index: number, val: string | Blob) => any;
}> = (props) => {
  const [fileName, setFileName] = useState<string>();
  const [uploading, setUploading] = useState<"doing" | "done">();
  const [value, setValue] = useState<File>();
  const [show, setShow] = useState(false);
  const fileInput = createRef<HTMLInputElement>();

  const getFileName = () => {
    if (fileInput.current?.files) setFileName(fileInput.current.files[0].name);
    setShow(false);
  };

  const upload: FormEventHandler = (e) => {
    e.preventDefault();
    setUploading("doing");
    props.setFile(
      props.index,
      fileInput.current?.files ? fileInput.current?.files[0] : ""
    );
    setUploading("done");

    // alert(`${fileName ?? "International passsport 1"} Uploaded Successfully`);
  };

  return (
    <div className="flex flex-col gap-3">
      <Dropdown
        show={show}
        setShow={setShow}
        label={
          <div
            className={`bg-[#e5e5e5] p-4 truncate cursor-pointer ${
              fileName?.length ? " text-green-600" : ""
            }`}
          >
            {fileName ?? "International passsport 1"}
          </div>
        }
        content={
          <div className="bg-white shadow  border-[##ACAAAA] border absolute bottom-8 w-full ">
            <div>
              <label
                htmlFor={`passport-${props.index}-select`}
                className="h-full w-full cursor-pointer block p-5"
              >
                Choose a photo
              </label>
              <input
                type="file"
                name={`passport-${props.index}-select`}
                id={`passport-${props.index}-select`}
                accept="image/*"
                ref={fileInput}
                hidden
                onChange={getFileName}
              />
            </div>
          </div>
        }
      />

      <div className=" text-right">
        <Btn
          className={`w-[170px] bg-[#1F66D0] text-white font-semibold !py-3 self-center my-3`}
          onClick={upload}
          type="button"
        >
          {uploading === "doing" ? "Uploading" : "Upload"}
        </Btn>
      </div>
    </div>
  );
};

export default PassportUpload;
