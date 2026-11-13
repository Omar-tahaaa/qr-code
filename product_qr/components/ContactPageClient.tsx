"use client";

import { useSearchParams } from "next/navigation";
import ContactButtons from "@/components/ContactButtons";
import { contactsFromSearchParams } from "@/lib/contacts";

export default function ContactPageClient() {
  const searchParams = useSearchParams();
  const params: Record<string, string | string[] | undefined> = {};

  searchParams.forEach((value, key) => {
    params[key] = value;
  });

  const contacts = contactsFromSearchParams(params);

  return <ContactButtons contacts={contacts} />;
}
