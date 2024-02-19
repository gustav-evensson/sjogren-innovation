"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);
const MAIL_FORMAT = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

type EmailResponse = {
  ok: boolean;
  message: string;
};

export async function sendEmail(email: string, name: string, msg:string): Promise<EmailResponse> {

  if(!email.match(MAIL_FORMAT)) return { ok: false, message: "Invalid email format"}

  try{
    const res = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.TO_EMAIL!,
      subject: `Meddelande från ${name}`,
      html: `
      <strong>Meddelande: </strong>
      <p>${msg}</p>
      <p><strong>Email: </strong> ${email}</p>
      `,
    });
    console.log(res);

    if(res.error) return{
      ok: false,
      message: "Något gick fel, testa att skicka ett mail."
    }

    return {
      ok: true,
      message: "Tack för ditt meddelande!",
    };
  } catch (error: unknown) {
    return {
      ok: false,
      message: JSON.stringify(error),
    };
  }


};
