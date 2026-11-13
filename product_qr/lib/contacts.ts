export type Contact = {
  name: string;
  phone: string;
};

export type ContactPair = {
  owner: Contact;
  person: Contact;
};

export const OWNER_CONST: Contact = {
  name: "test",
  phone: "0100000000000",
};

function first(value: string | string[] | undefined): string {
  if (Array.isArray(value)) return (value[0] || "").trim();
  return (value || "").trim();
}

export function contactsFromSearchParams(
  params: Record<string, string | string[] | undefined>,
): ContactPair {
  return {
    owner: OWNER_CONST,
    person: {
      name: first(params.person),
      phone: first(params.personPhone),
    },
  };
}

export function hasContact(contact: Contact): boolean {
  return Boolean(contact.name);
}

export function buildProductPath(person: Contact): string {
  const params = new URLSearchParams();
  params.set("person", person.name);
  if (person.phone) params.set("personPhone", person.phone);
  return `/contact?${params.toString()}`;
}
