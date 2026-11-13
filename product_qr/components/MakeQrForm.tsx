"use client";

import { FormEvent, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { buildProductPath, type Contact } from "@/lib/contacts";

export default function MakeQrForm() {
  const [person, setPerson] = useState<Contact>({ name: "", phone: "" });
  const [link, setLink] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const next: Contact = {
      name: String(form.get("person") || "").trim(),
      phone: String(form.get("personPhone") || "").trim(),
    };
    setPerson(next);
    setLink(`${window.location.origin}${buildProductPath(next)}`);
  }

  return (
    <>
      <form onSubmit={onSubmit} className="grid gap-4">
        <fieldset className="rounded-[14px] border border-white/15 p-3.5">
          <legend className="px-1 text-sm text-[#9aa8b8]">Desk person</legend>
          <label className="mb-2.5 grid gap-1 text-sm text-[#9aa8b8]">
            Name
            <input
              name="person"
              required
              placeholder="Mohammed"
              className="rounded-[10px] border border-white/15 bg-[#0f1419] px-3 py-2.5 text-[#f2f5f8] outline-none focus:border-[#3d9b8f]"
            />
          </label>
          <label className="grid gap-1 text-sm text-[#9aa8b8]">
            Phone
            <input
              name="personPhone"
              type="tel"
              placeholder="0111..."
              className="rounded-[10px] border border-white/15 bg-[#0f1419] px-3 py-2.5 text-[#f2f5f8] outline-none focus:border-[#3d9b8f]"
            />
          </label>
        </fieldset>

        <button
          type="submit"
          className="rounded-[14px] bg-gradient-to-br from-[#2f6f68] to-[#3d9b8f] px-4 py-3.5 text-center font-semibold transition active:scale-[0.98]"
        >
          Generate QR
        </button>
      </form>

      {link ? (
        <div className="mt-5 text-center">
          <div className="inline-flex rounded-xl bg-white p-3">
            <QRCodeSVG value={link} size={220} level="M" />
          </div>
          <p className="mt-3 break-all text-left text-xs text-[#9aa8b8]">{link}</p>
          <a
            href={buildProductPath(person)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block rounded-[14px] bg-[#243041] px-4 py-3 text-center font-semibold"
          >
            Open page
          </a>
          <p className="mt-4 text-left text-sm text-[#9aa8b8]">
            Tip: screenshot or print the QR and put it on the desk. Change the desk
            person later by generating a new QR.
          </p>
        </div>
      ) : null}
    </>
  );
}
