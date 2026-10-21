export default function Login() {
  return (
    <main className="relative flex min-h-screen items-center overflow-hidden bg-linear-to-br from-[#315bff] via-[#5544f5] to-[#7135e8] px-5 py-12 text-white sm:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 size-[28rem] rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 left-[20%] size-[32rem] rounded-full bg-[#a34dff]/25 blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1fr_400px] lg:gap-20">
        <section className="hidden max-w-xl sm:block">

          <h1 className="max-w-lg text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Dit overblik over økonomien – samlet ét sted.
          </h1>
          <p className="mt-5 max-w-md text-base leading-7 text-white/80">
            Hold styr på dine penge, og få et klart billede af din økonomi.
          </p>

          <div className="mt-14 w-72 rounded-2xl border border-white/25 bg-white/10 p-5 shadow-xl shadow-indigo-950/10 backdrop-blur-sm">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-white/75">
              Samlet overblik
            </p>
            <p className="mt-3 text-3xl font-semibold tracking-tight">
              Din økonomi
            </p>
            <p className="mt-3 inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white">
              Enklere. Mere overskueligt.
            </p>
          </div>
        </section>

        <section
          aria-labelledby="login-title"
          className="w-full rounded-2xl border border-white/10 bg-[#171d2a]/95 p-7 shadow-2xl shadow-[#1d155c]/30 backdrop-blur sm:p-9"
        >
          <div className="mb-8 sm:hidden">
            <div className="mb-6 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex size-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-lg font-semibold"
              >
                $
              </span>
              <span className="font-semibold tracking-tight">
                Finance Tracker
              </span>
            </div>
            <p className="text-sm leading-6 text-white/70">
              Dit overblik over økonomien – samlet ét sted.
            </p>
          </div>

          <h2
            id="login-title"
            className="text-2xl font-semibold tracking-tight text-white"
          >
            Velkommen tilbage
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#aab4c8]">
            Log ind for at se dit økonomiske overblik.
          </p>

          <div className="mt-7 space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-[#e1e6f0]"
              >
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="dig@eksempel.dk"
                className="w-full rounded-lg border border-[#354052] bg-[#1b2230] px-3.5 py-3 text-sm text-white outline-none transition placeholder:text-[#8490a5] focus:border-[#7b83ff] focus:ring-4 focus:ring-[#7b83ff]/15"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-[#e1e6f0]"
              >
                Adgangskode
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Indtast din adgangskode"
                className="w-full rounded-lg border border-[#354052] bg-[#1b2230] px-3.5 py-3 text-sm text-white outline-none transition placeholder:text-[#8490a5] focus:border-[#7b83ff] focus:ring-4 focus:ring-[#7b83ff]/15"
              />
            </div>

            <button
              type="button"
              className="w-full rounded-lg bg-linear-to-r from-[#6687ff] to-[#9b68f5] px-4 py-3 text-sm font-semibold text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a99aff]"
            >
              Log ind
            </button>
          </div>

          <p className="mt-7 text-center text-xs leading-5 text-[#aab4c8]">
            Dit økonomiske overblik samlet ét sted.
          </p>
        </section>
      </div>
    </main>
  );
}
