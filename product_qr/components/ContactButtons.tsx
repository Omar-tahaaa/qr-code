"use client";

import { useState } from "react";
import type { Contact, ContactPair } from "@/lib/contacts";
import { hasContact } from "@/lib/contacts";

type PanelState = {
  contact: Contact;
  role: string;
} | null;

function ContactPanel({ contact, role }: { contact: Contact; role: string }) {
  const digits = contact.phone.replace(/\D/g, "");

  return (
    <div className="mt-4 rounded-[14px] bg-[#243041] p-4">
      <h2 className="mb-3 text-lg font-semibold">
        {contact.name} ({role})
      </h2>
      <ul className="grid gap-2 text-sm">
        {contact.phone ? (
          <>
            <li>
              Phone:{" "}
              <a className="text-[#3d9b8f] break-all" href={`tel:${contact.phone}`}>
                {contact.phone}
              </a>
            </li>
            <li>
              <a
                className="text-[#3d9b8f]"
                href={`https://wa.me/2${digits}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
          </>
        ) : (
          <li className="text-[#9aa8b8]">No phone was saved for this person.</li>
        )}
      </ul>
    </div>
  );
}

export default function ContactButtons({ contacts }: { contacts: ContactPair }) {
  const [panel, setPanel] = useState<PanelState>(null);
  const hasDesk = hasContact(contacts.person);

  return (
    <>
      <div className="grid gap-3">
        <button
          type="button"
          onClick={() => setPanel({ contact: contacts.owner, role: "owner" })}
          className="rounded-[14px] bg-gradient-to-br from-[#2f6f68] to-[#3d9b8f] px-4 py-4 text-left font-semibold transition active:scale-[0.98]"
        >
          <span className="mb-0.5 block text-xs font-medium opacity-85">Product owner</span>
          <span className="text-[1.05rem]">{contacts.owner.name}</span>
        </button>
        {hasDesk ? (
          <button
            type="button"
            onClick={() => setPanel({ contact: contacts.person, role: "desk" })}
            className="rounded-[14px] bg-gradient-to-br from-[#8a6230] to-[#e8a04a] px-4 py-4 text-left font-semibold text-[#1a1208] transition active:scale-[0.98]"
          >
            <span className="mb-0.5 block text-xs font-medium opacity-85">Desk person</span>
            <span className="text-[1.05rem]">{contacts.person.name}</span>
          </button>
        ) : null}
      </div>
      {panel ? <ContactPanel contact={panel.contact} role={panel.role} /> : null}
    </>
  );
}
