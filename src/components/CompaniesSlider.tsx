const companies = [
  { name: "Google" },
  { name: "iFAST" },
  { name: "EY" },
  { name: "PwC" },
  { name: "Beam" },
  { name: "Grab" },
  { name: "UOB" },
  { name: "Deloitte" },
  { name: "MoneyLion" },
];

function CompanyLogo({ name }: { name: string }) {
  switch (name) {
    case "Google":
      return (
        <svg viewBox="0 0 272 92" className="h-8 w-auto" aria-label="Google">
          <path
            d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
            fill="#EA4335"
          />
          <path
            d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
            fill="#FBBC05"
          />
          <path
            d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"
            fill="#4285F4"
          />
          <path
            d="M225 3v65h-9.5V3h9.5z"
            fill="#34A853"
          />
          <path
            d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
            fill="#EA4335"
          />
          <path
            d="M35.29 41.19V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49-.01z"
            fill="#4285F4"
          />
        </svg>
      );
    case "iFAST":
      return (
        <span className="text-2xl font-bold tracking-tight text-foreground/70" aria-label="iFAST">
          iFAST
        </span>
      );
    case "EY":
      return (
        <svg viewBox="0 0 50 50" className="h-10 w-auto" aria-label="EY">
          <rect width="50" height="50" fill="#FFE600" rx="2" />
          <text x="6" y="38" fontSize="28" fontWeight="bold" fill="#2E2E38" fontFamily="Arial, sans-serif">
            EY
          </text>
        </svg>
      );
    case "PwC":
      return (
        <span className="text-2xl font-bold tracking-tight text-foreground/70" aria-label="PwC">
          <span className="text-foreground/70">P</span>
          <span className="text-foreground/70">w</span>
          <span className="text-[#e88d0c]">C</span>
        </span>
      );
    case "Beam":
      return (
        <span className="text-2xl font-bold tracking-tight text-foreground/70" aria-label="Beam">
          Beam
        </span>
      );
    case "Grab":
      return (
        <svg viewBox="0 0 100 32" className="h-8 w-auto" aria-label="Grab">
          <text x="0" y="26" fontSize="28" fontWeight="bold" fill="#00B14F" fontFamily="Arial, sans-serif">
            Grab
          </text>
        </svg>
      );
    case "UOB":
      return (
        <svg viewBox="0 0 80 32" className="h-8 w-auto" aria-label="UOB">
          <text x="0" y="26" fontSize="28" fontWeight="bold" fill="#002B5C" fontFamily="Arial, sans-serif">
            UOB
          </text>
        </svg>
      );
    case "Deloitte":
      return (
        <svg viewBox="0 0 140 28" className="h-7 w-auto" aria-label="Deloitte">
          <text x="0" y="22" fontSize="24" fontWeight="bold" fill="#86BC25" fontFamily="Arial, sans-serif">
            Deloitte
          </text>
        </svg>
      );
    case "MoneyLion":
      return (
        <span className="text-2xl font-bold tracking-tight text-foreground/70" aria-label="MoneyLion">
          MoneyLion
        </span>
      );
    default:
      return null;
  }
}

export function CompaniesSlider() {
  return (
    <section className="overflow-hidden px-4 py-12">
      <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
        Trusted by people at companies like
      </p>

      <div className="relative mx-auto max-w-5xl">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />

        <div className="flex w-max animate-companies-marquee items-center gap-16">
          {/* First set */}
          {companies.map((c) => (
            <div
              key={`a-${c.name}`}
              className="flex shrink-0 items-center opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0"
            >
              <CompanyLogo name={c.name} />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {companies.map((c) => (
            <div
              key={`b-${c.name}`}
              className="flex shrink-0 items-center opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0"
            >
              <CompanyLogo name={c.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
