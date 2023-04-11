import { EmailData } from "./email";

export async function sendContactEmail(email: EmailData) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(email),
    headers: {
      "Content-Type": "applicatioin/json",
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw Error(data.message || "서버 요청에 실패함");
  }
  return data;
}
