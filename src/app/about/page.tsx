import Hero from "@/components/Hero";
import { Metadata } from "next";
import React from "react";

const TITLE_CLASS = "text-2xl font-bold text-gray-800 my-2";

export const metadata: Metadata = {
  title: "나를 소개할게",
  description: "나 커리어 소개",
};

export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>
          개발을 사랑해는 프론트엔드 개발자
          <br />
          너무나 재밌는 개발
        </p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>오케이포스 (-2022)</p>
        <h2 className={TITLE_CLASS}>Skill</h2>
        <p>
          React, Node <br /> Git
        </p>
      </section>
    </>
  );
}
