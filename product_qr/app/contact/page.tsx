import { Suspense } from "react";
import ContactPageClient from "@/components/ContactPageClient";

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-[440px] p-6">
      <section className="rounded-[18px] border border-white/10 bg-[#1a222d]/[92%] p-6 backdrop-blur">
        <Suspense fallback={<p className="text-[#9aa8b8]">Loading contacts…</p>}>
          <ContactPageClient />
        </Suspense>
      </section>
    </main>
  );
}
