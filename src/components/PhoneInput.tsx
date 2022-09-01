import React, { useEffect, useRef, useState } from "react";
import {
  parsePhoneNumberWithError,
  ParseError,
  PhoneNumber,
  validatePhoneNumberLength,
} from "libphonenumber-js";
import { Input } from "./Styled";
import countries from "../utils/countries";

interface Props {
  number?: string;
  setNumber: (val: string) => any;
  className?: string;
}

const PhoneInput: React.FC<Props> = (props) => {
  const propsNumber = useRef(props.number ?? "");
  const updateValue = () => {
    country || value?.length ? props.setNumber(propsNumber.current) : null;
  };
  const [value, setValue] = useState("");
  const [country, setCountry] = useState<
    | {
        name: string;
        flag: string;
        code: string;
        dial_code: string;
      }
    | undefined
  >(countries[0]);
  const [numberError, setNumberError] = useState<
    ParseError | { message?: string } | undefined
  >(undefined);
  const formatNumber = (number?: string) => {
    setNumberError(undefined);
    try {
      const info = parsePhoneNumberWithError(number ?? value);
      if (!info) setNumberError({ message: "invalid number" });
      setValue(info.nationalNumber);
      const countryCode = countries.find((i) => i.code === info.country);
      setCountry(countryCode);
      setNumberError(undefined);
    } catch (error) {
      if (error instanceof ParseError) {
        // Not a phone number, non-existent country, etc.

        if (error.message === "INVALID_COUNTRY") {
          // @ts-ignore
          const err = validatePhoneNumberLength(value, country?.code);
          setNumberError({ message: err });
        } else setNumberError(error);
      } else {
        setNumberError({ message: "invalid number" });
      }
    }
  };
  useEffect(() => {
    formatNumber();
    propsNumber.current = `${country?.dial_code}${value}`;
  }, [value, country?.code]);

  useEffect(() => {
    formatNumber(props.number);
  }, []);

  useEffect(() => {
    updateValue();
  }, [propsNumber]);
  return (
    <div className={props.className + "flex flex-col"}>
      <div className="flex flex-nowrap gap-2">
        <select
          className={
            props.className ??
            "max-w-[100px] bg-inherit border-[#d9d9d9] border-0 border-b-[3px] focus:!border-b-[#1F66D0] "
          }
          name=""
          id=""
          value={country?.code}
          onChange={(e) => {
            setCountry(countries.find((i) => e.target.value === i.code));
          }}
        >
          {countries.map((country) => (
            <option value={country.code} key={country.code}>
              {country.flag} {country.dial_code} ({country.name})
            </option>
          ))}
        </select>
        <Input
          className={
            props.className ??
            ("text-lg grow" + numberError &&
              numberError?.message &&
              value.length)
              ? " focus:!border-b-[red] !border-b-[red] "
              : " focus:!border-b-[#1F66D0] "
          }
          placeholder="+234*******"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
      {numberError?.message && (
        <small
          className={
            !value.length
              ? "hidden "
              : "" +
                " w-full text-[red] capitalize text-xs text-right leading-none"
          }
        >
          {numberError?.message.replaceAll("_", " ").toLowerCase()}
        </small>
      )}
    </div>
  );
};

export default PhoneInput;
