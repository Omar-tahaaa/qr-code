import MakeQrForm from "@/components/MakeQrForm";

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-[440px] p-6">
      <section className="rounded-[18px] border border-white/10 bg-[#1a222d]/[92%] p-6 backdrop-blur">
        <h1 className="mb-1 text-[1.35rem] font-semibold tracking-tight">Make desk QR</h1>
        <p className="mb-5 text-[0.92rem] text-[#9aa8b8]">
          Fill in the desk person, generate a QR, print it, and put it on that desk. The
          product owner is fixed. Change the desk person later by making a new QR.
        </p>
        <MakeQrForm />
      </section>
    </main>
  );
}
