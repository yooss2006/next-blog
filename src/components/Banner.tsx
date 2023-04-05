import React from "react";

export type BannerData = {
  message: string;
  state: "success" | "error";
};

type Props = {
  banner: BannerData;
};

export default function Banner({ banner: { message, state } }: Props) {
  const isSucess = state === "success";
  const icon = isSucess ? "✅" : "❎";
  return (
    <p
      className={`p-2 rounded-xl w-full text-center ${
        isSucess ? "bg-green-300" : "bg-red-300"
      }`}
    >{`${icon} ${message}`}</p>
  );
}
