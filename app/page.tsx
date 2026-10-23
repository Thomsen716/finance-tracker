import Link from "next/link";
import PortfolioChart, { type ChartPoint } from "@/components/PortfolioChart";

const exampleData: ChartPoint[] = [
  { måned: "Jan", værdi: 231600 },
  { måned: "Feb", værdi: 236000 },
  { måned: "Mar", værdi: 239500 },
  { måned: "Apr", værdi: 245000 },
  { måned: "Maj", værdi: 250000 },
];

const benefits = [
  {
    title: "Alle depoter samlet",
    description:
      "Danske Bank, Nordnet og flere - i ét overblik i stedet for flere regneark.",
  },
  {
    title: "Køb med korrekt GAK",
    description:
      "Læg et nyt køb ind, så regnes gennemsnitskursen og afkastet ud for dig.",
  },
  {
    title: "Afkast måned for måned",
    description:
      "Se hvad der er indskud, og hvad der er rigtigt afkast - uden at regne selv.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F1F2EE] px-5 text-[#17211B] sm:px-8">
      <header className="mx-auto flex w-full max-w-7xl justify-end py-5 sm:py-7">
        <nav className="flex items-center gap-3 text-sm font-semibold sm:gap-6 sm:text-base">
          <Link
            href="/funktioner"
            className=" transition-colors hover:text-green-900"
          >
            Funktioner
          </Link>
          <Link
            href="/log-ind"
            className="transition-colors hover:text-green-900"
          >
            Log ind
          </Link>
          <Link
            href="/opret-konto"
            className="rounded-lg bg-green-900 px-3 py-2 text-white transition-colors hover:bg-green-950 sm:px-4"
          >
            Opret konto
          </Link>
        </nav>
      </header>

      <main className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-10 py-10 sm:py-14 md:grid-cols-2 md:gap-12 lg:gap-20 lg:py-20">
        <section className="mx-auto w-full max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-900 sm:text-sm">
            Til private investorer
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-[#17211B] sm:text-5xl lg:text-6xl">
            Hold styr på dine aktier uden regneark.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-[#4A554F] sm:text-lg">
            Se din samlede portefølje, dit afkast og dine køb – på tværs af alle
            depoter.
          </p>
          <div className="mt-7 flex flex-col gap-3 font-semibold sm:flex-row sm:flex-wrap">
            <Link
              href="/opret-konto"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#0E5C45] px-5 py-3 text-center text-white transition-colors hover:bg-green-950"
            >
              Kom godt i gang gratis
            </Link>
            <Link
              href="/funktioner"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#AAB6AC] px-5 py-3 text-center text-[#263B31] transition-colors hover:bg-white"
            >
              Se hvordan det virker
            </Link>
          </div>
        </section>

        <section
          aria-label="Eksempel på portefølje"
          className="mx-auto w-full max-w-lg md:max-w-none"
        >
          <PortfolioChart
            total={250000}
            gain={18400}
            gainPct={7.9}
            data={exampleData}
          />
        </section>

        <section className="col-span-full grid w-full grid-cols-1 gap-8 sm:grid-cols-3">
          {benefits.map((benefit, index) => (
            <article key={benefit.title}>
              <p className="text-xs font-bold text-green-900 sm:text-sm">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-4 text-xl font-bold leading-tight tracking-tight text-[#17211B]">
                {benefit.title}
              </h2>
              <p className="mt-1 text-base text-[#4A554F]">
                {benefit.description}
              </p>
            </article>
          ))}
        </section>
      </main>

      <section className="-mx-5 bg-stone-900 px-5 py-6 text-white sm:-mx-8 sm:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <h2 className="text-xl font-bold sm:text-2xl">
            Klar til at samle dine depoter?
          </h2>
          <Link
            href="/opret-konto"
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-5 py-3 font-semibold text-stone-900 transition-colors hover:bg-stone-200"
          >
            Opret konto
          </Link>
        </div>
      </section>
    </div>
  );
}
