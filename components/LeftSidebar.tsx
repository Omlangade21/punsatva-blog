import Link from "next/link";

interface TocItem {
  id: string;
  label: string;
}

const TOC: TocItem[] = [
  { id: "section-1", label: "I. Core Concepts" },
  { id: "section-2", label: "II. The Mechanics of Fever" },
  { id: "section-3", label: "III. Warning Signs of Toxic Accumulation" },
  { id: "section-4", label: "IV. Clinical Progression Map" },
  { id: "section-5", label: "V. Root Causes & Ancient Insights" },
  { id: "section-6", label: "VI. Frequently Asked Questions" },
];

export default function LeftSidebar() {
  return (
    <aside className="lg:sticky lg:top-24 space-y-6">
      {/* Table of Contents */}
      <div className="rounded-2xl border border-[#E5E3D8] bg-white p-6 shadow-sm">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#3D6234]">
          Table of Contents
        </p>
        <ul className="space-y-3">
          {TOC.map((item) => (
            <li key={item.id}>
              <Link
                href={`#${item.id}`}
                className="group flex items-start gap-3 text-sm leading-snug text-neutral-700 transition-colors hover:text-[#3D6234]"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E5E3D8] group-hover:bg-[#3D6234]" />
                <span className="font-medium">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Forest Green CTA */}
      <div className="rounded-2xl bg-[#3D6234] p-6 text-white shadow-md">
        <h3 className="font-serif text-xl font-semibold leading-snug text-white">
          Suspect You Have Phimosis?
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/90">
          Take our confidential 2-minute diagnostic assessment to understand
          your condition and explore the path forward with our medical board.
        </p>
        <Link
          href="#assessment"
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-xs font-bold uppercase tracking-wider text-[#3D6234] transition-transform hover:scale-[1.02]"
        >
          Start Free Assessment
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>

      {/* Immediate Concern Alert */}
      <div className="rounded-2xl border-2 border-orange-400 bg-orange-50 p-5">
        <div className="flex items-start gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </span>
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-orange-700">
              Immediate Concern?
            </p>
            <p className="mt-1 text-sm leading-relaxed text-orange-900/90">
              If you are experiencing severe symptoms, contact our 24/7 medical
              helpline before proceeding.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
