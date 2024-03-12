"use client";

import { cn } from "@/lib/utils";
import { sendEmail } from "@/lib/Actions/resend";
import { useState } from "react";
import { Cross1Icon, CubeIcon } from "@radix-ui/react-icons";

export default function ContactForm() {
  const [alert, setAlert] = useState<string>("none");
  const [alertMessage, setAlertMessage] = useState<string>("");

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = (e: any) => {
    e.preventDefault();

    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setAlertMessage("Du måste fylla i alla fält");
      setAlert("error");
      setTimeout(() => {
        setAlert("none");
      }, 5000);
      return;
    
    } ;

    setLoading(true);

    sendEmail(email, name, message).then((res) => {
      setAlertMessage(res.message);
      if (res.ok === true) {
        setAlert("success");
        setName("");
        setEmail("");
        setMessage("");
        setLoading(false);
      } else {
        setAlert("error");
        setLoading(false);
      }
    });

    setTimeout(() => {
      setAlert("none");
    }, 5000);
  };

  return (
    <>
      <form className="w-full flex flex-col gap-4" onSubmit={onSubmit}>
        <input
          className="w-full border border-input transition focus:border-text outline-none p-4 rounded-lg"
          type="text"
          placeholder="Namn"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-full border border-input transition focus:border-text outline-none p-4 rounded-lg"
          type="email"
          placeholder="E-post"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="w-full border border-input transition focus:border-text outline-none p-4 rounded-lg min-h-[400px] resize-none"
          placeholder="Meddelande"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className={cn("w-full sm:w-[150px] h-12 flex items-center justify-center cursor-pointer bg-primary text-white py-3 px-9 rounded-lg transition duration-300", {
            "opacity-50 cursor-not-allowed": loading === true,
          })}
        >
          {!loading ? 'Skicka' : <CubeIcon className="animate-spin" />}
        </button>
      </form>
      <div
        className={cn(
          "fixed bottom-4 transition-all duration-300 left-1/2 -translate-x-1/2 flex items-center gap-4 p-4 rounded-lg bg-primary text-text",
          {
            "opacity-0 translate-y-4 pointer-events-none": alert === "none",
            "bg-success": alert === "success",
            "bg-error": alert === "error",
          }
        )}
      >
        <p>{alertMessage}</p>

        <button onClick={() => setAlert("none")} className="cursor-pointer">
          <Cross1Icon />
        </button>
      </div>
    </>
  );
}
