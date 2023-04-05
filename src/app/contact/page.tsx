import ContactForm from "@/components/ContactForm";
import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
const LINKS = [
  { icon: <AiFillGithub />, url: "" },
  { icon: <AiFillLinkedin />, url: "" },
  { icon: <AiFillYoutube />, url: "" },
];
export default function ContactPage() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl font-bold my-2">Content Me</h2>
      <p>yooss2006@naver.com</p>
      <ul className="flex gap-5">
        {LINKS.map((link, index) => (
          <li key={index}>
            <a
              href={link.url}
              target="_blanck"
              rel="noreferrer"
              className="text-5xl hover:text-yellow-400"
            >
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
      <h2 className="text-3xl font-bold my-8">Or Send me an email</h2>
      <ContactForm />
    </section>
  );
}
