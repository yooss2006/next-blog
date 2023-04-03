import Image from "next/image";
import Link from "next/link";
import React from "react";
import me from "../../public/images/me.png";

export default function Hero() {
  return (
    <section className="text-center">
      <Image
        className="mx-auto border rounded-full"
        src={me}
        width={150}
        height={150}
        alt="me"
        priority
      />
      <h2 className="text-3xl font-bold mt-2">유순상</h2>
      <h3 className="text-xl font-semibold">Front Engineer</h3>
      <p>하이요</p>
      <Link href="/contact">
        <button className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2">
          contact
        </button>
      </Link>
    </section>
  );
}
