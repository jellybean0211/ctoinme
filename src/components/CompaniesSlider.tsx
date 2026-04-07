import Image from "next/image";

const companies = [
  {
    name: "Google",
    src: "/images/company-logos/google.png",
    width: 136,
    height: 46,
  },
  {
    name: "iFAST",
    src: "/images/company-logos/ifast.png",
    width: 124,
    height: 46,
  },
  {
    name: "EY",
    src: "/images/company-logos/ey.png",
    width: 88,
    height: 46,
  },
  {
    name: "PwC",
    src: "/images/company-logos/pwc.png",
    width: 108,
    height: 46,
  },
  {
    name: "Beam",
    src: "/images/company-logos/beam.png",
    width: 124,
    height: 46,
  },
  {
    name: "Grab",
    src: "/images/company-logos/grab.png",
    width: 112,
    height: 46,
  },
  {
    name: "UOB",
    src: "/images/company-logos/uob.png",
    width: 112,
    height: 46,
  },
  {
    name: "Deloitte",
    src: "/images/company-logos/deloitte.png",
    width: 148,
    height: 46,
  },
  {
    name: "MoneyLion",
    src: "/images/company-logos/moneylion.png",
    width: 156,
    height: 46,
  },
] as const;

function CompanyLogo({
  name,
  src,
  width,
  height,
}: {
  name: string;
  src: string;
  width: number;
  height: number;
}) {
  return (
    <Image
      src={src}
      alt={name}
      width={width}
      height={height}
      sizes={`${width}px`}
      className="h-[25px] w-auto object-contain"
    />
  );
}

export function CompaniesSlider() {
  return (
    <section className="overflow-hidden bg-[#fafafa] px-4 py-12">
      <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
        Trusted by people at companies like
      </p>

      <div className="mx-auto max-w-5xl">
        <div className="flex w-max animate-companies-marquee items-center gap-16">
          {companies.map((company) => (
            <div
              key={`a-${company.name}`}
              className="flex shrink-0 items-center opacity-80 transition hover:opacity-100"
            >
              <CompanyLogo {...company} />
            </div>
          ))}
          {companies.map((company) => (
            <div
              key={`b-${company.name}`}
              className="flex shrink-0 items-center opacity-80 transition hover:opacity-100"
            >
              <CompanyLogo {...company} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
