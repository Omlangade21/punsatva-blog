import type { Metadata } from "next";
import Image from "next/image";
import LeftSidebar from "@/components/LeftSidebar";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title:
    "Disease Is Not the Enemy — It's Nature's Call for Inner Cleansing | Punsatva",
  description:
    "Understanding natural symptoms, root causes, and holistic self-purification pathways. A peer-reviewed Ayurvedic perspective by the Punsatva Medical Board.",
  keywords: [
    "Ayurveda",
    "natural healing",
    "fever",
    "detoxification",
    "Hippocrates",
    "Charaka",
    "holistic medicine",
  ],
  openGraph: {
    title:
      "Disease Is Not the Enemy — It's Nature's Call for Inner Cleansing",
    description:
      "Understanding natural symptoms, root causes, and holistic self-purification pathways.",
    type: "article",
    locale: "en_US",
    siteName: "Punsatva",
    images: [
      {
        url: "/og-disease-cleansing.svg",
        width: 1200,
        height: 630,
        alt: "Punsatva — Disease Is Not the Enemy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Disease Is Not the Enemy — It's Nature's Call for Inner Cleansing",
    description:
      "Understanding natural symptoms, root causes, and holistic self-purification pathways.",
  },
};

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Is a fever dangerous if left untreated long-term?",
    answer:
      "Fever is an acute cleansing fire. It should be assisted using natural methods like mud or water therapy if it crosses 103°F, rather than being aggressively suppressed via medication.",
  },
  {
    question:
      "How can I tell if my condition has progressed to a toxic state?",
    answer:
      "Persistent warning symptoms such as chronic headaches, fatigue, nausea, and persistent laziness indicate a heavy accumulation of foreign matter inside the tissue systems.",
  },
];

interface WarningSign {
  title: string;
  description: string;
}

const WARNING_SIGNS: WarningSign[] = [
  {
    title: "Acute Headaches & Migraines",
    description:
      "Vital alerts signaling that toxic materials are trying to enter into structural circulation paths.",
  },
  {
    title: "Systemic Confusion & Fatigue",
    description:
      "Clear physiological indicators that the core system is overloaded with foreign matters.",
  },
  {
    title: "Persistent Laziness & Nausea",
    description:
      "Warning symbols that a 'toxic thief' has breached our 'body-house' and needs to be forcefully thrown out.",
  },
];

interface ProgressionStage {
  id: string;
  title: string;
  description: string;
}

const PROGRESSION_STAGES: ProgressionStage[] = [
  {
    id: "01",
    title: "Onset of Blockages",
    description:
      "Waste matter gets blocked in cells, blood, and nerves. Forms granular uric acid crystal clusters blocking the capillaries.",
  },
  {
    id: "02",
    title: "Vital Force Exhaustion",
    description:
      "The internal vital force exhausts itself trying to fight off toxins, leading to heavy drop-offs in systemic strength due to overeating or delaying natural bowel urges.",
  },
  {
    id: "03",
    title: "Chronic Transformation",
    description:
      "Continuous suppression of simple symptoms using heavy medications forces toxins to hide deep within tissues, turning temporary illness into severe chronic diseases.",
  },
];

function CheckIcon() {
  return (
    <span
      aria-hidden="true"
      className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3D6234]/10"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#3D6234"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
}

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 lg:grid lg:grid-cols-12 lg:gap-8">
      {/* LEFT SIDEBAR */}
      <div className="lg:col-span-4 mb-10 lg:mb-0">
        <LeftSidebar />
      </div>

      {/* RIGHT MAIN ARTICLE */}
      <article className="lg:col-span-8">
        {/* Metadata Badge */}
        <div className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-[#E5E3D8] bg-[#F4F3ED] px-4 py-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#3D6234]">
            Peer Reviewed By Punsatva Medical Board
          </span>
          <span className="text-neutral-400">|</span>
          <span className="text-[11px] font-medium text-neutral-600">
            8-10 min read
          </span>
          <span className="text-neutral-400">|</span>
          <span className="text-[11px] font-medium text-neutral-600">
            Verified: May 2026
          </span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-neutral-900 mb-4">
          Disease Is Not the Enemy — It&rsquo;s Nature&rsquo;s Call for Inner
          Cleansing.
        </h1>
        <p className="text-lg lg:text-xl leading-relaxed text-neutral-600 mb-8 font-light">
          Understanding natural symptoms, root causes, and holistic
          self-purification pathways.
        </p>

        {/* Hero Image Container */}
        <div className="relative mb-12 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[#E5E3D8] bg-[#F4F3ED]">
          <Image
            src="/article-hero.svg"
            alt="Holistic Ayurvedic healing — natural cleansing"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="object-cover"
          />
        </div>

        {/* SECTION I */}
        <section id="section-1" className="mb-14 scroll-mt-24">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#3D6234]">
            Section I
          </p>
          <h2 className="font-serif text-2xl lg:text-3xl font-bold text-neutral-900 mb-6 leading-snug">
            Core Concepts
          </h2>
          <p className="text-base lg:text-lg leading-relaxed text-neutral-700 mb-6">
            Disease is not the enemy — it is nature&rsquo;s warning, a
            well-wisher that signals some disorder within our body, some filth
            that has accumulated and now needs to be expelled. Illness should be
            understood as the body&rsquo;s natural cleansing process. But sadly,
            instead of respecting this message, we do the opposite — we suppress
            the illness with toxic medicines and antibiotics. What we consider
            &lsquo;treatment&rsquo; is often just halting the body&rsquo;s own
            healing power. Those who understand the language of nature do not
            see illnesses as enemies but as friends — as opportunities to purify
            the body. As the great Greek physician Hippocrates once said —
            &lsquo;Give me a fever, and I will cure all diseases.&rsquo; This
            means that when fever comes, it is trying to protect us — to expel
            the inner toxins.
          </p>
        </section>

        {/* CLINICAL HIGHLIGHT BANNER */}
        <aside className="mb-14 rounded-2xl border-l-4 border-[#3D6234] bg-[#F4F3ED] px-6 py-6 lg:px-8 lg:py-7">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#3D6234]">
            Clinical Highlight
          </p>
          <p className="font-serif text-base lg:text-lg italic leading-relaxed text-neutral-800">
            Hippocrates is known as the &lsquo;Father of Medicine.&rsquo; Though
            he used the word &lsquo;disease,&rsquo; what he actually meant was
            that when a high fever or any illness appears, it is here to purify
            our body. The body expels the toxic and unnecessary elements
            accumulated inside — known as foreign matter. Once these are
            expelled, the body regains health.
          </p>
        </aside>

        {/* SECTION II */}
        <section id="section-2" className="mb-14 scroll-mt-24">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#3D6234]">
            Section II
          </p>
          <h2 className="font-serif text-2xl lg:text-3xl font-bold text-neutral-900 mb-6 leading-snug">
            The Mechanics of Fever
          </h2>
          <p className="text-base lg:text-lg leading-relaxed text-neutral-700 mb-6">
            Fever is the fire that nature itself generates within us so that it
            can burn and destroy the filth that entered the body due to our own
            mistakes. We should allow this fire to burn until it finishes
            cleaning — if we extinguish it midway, it may leave behind partially
            burned dirt like &lsquo;coal&rsquo; inside, which can later cause
            more serious problems. But remember — this fire should not harm the
            body, it should only burn the toxins. This clearly means — whenever
            high fever occurs, it is a sign that the body is engaged in
            self-purification. Our role is to assist this natural process, not
            hinder it with toxic medications. So if fever rises above 103°F and
            becomes difficult to bear, it should be reduced slowly using natural
            remedies like mud and water. But take care not to bring it down
            abruptly, as doing so can cause more severe and complicated
            symptoms.
          </p>
        </section>

        {/* SECTION III */}
        <section id="section-3" className="mb-14 scroll-mt-24">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#3D6234]">
            Section III
          </p>
          <h2 className="font-serif text-2xl lg:text-3xl font-bold text-neutral-900 mb-6 leading-snug">
            Warning Signs of Toxic Accumulation
          </h2>
          <p className="text-base lg:text-lg leading-relaxed text-neutral-700 mb-8">
            We must clearly understand that except for hereditary (genetic)
            diseases, the real cause of most other illnesses is the accumulation
            of toxins in the body due to improper diet and lifestyle. These
            toxins aren&rsquo;t visible directly, but our body gives us signals.
          </p>
          <ul className="space-y-4">
            {WARNING_SIGNS.map((sign) => (
              <li
                key={sign.title}
                className="flex items-start gap-4 rounded-xl border border-[#E5E3D8] bg-white p-5"
              >
                <CheckIcon />
                <div>
                  <h3 className="font-serif text-lg font-semibold text-neutral-900 mb-1">
                    {sign.title}
                  </h3>
                  <p className="text-sm lg:text-base leading-relaxed text-neutral-700">
                    {sign.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* SECTION IV — Progression Map */}
        <section id="section-4" className="mb-14 scroll-mt-24">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#3D6234]">
            Section IV
          </p>
          <h2 className="font-serif text-2xl lg:text-3xl font-bold text-neutral-900 mb-6 leading-snug">
            Clinical Progression Map
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PROGRESSION_STAGES.map((stage) => (
              <div
                key={stage.id}
                className="relative rounded-2xl border border-[#E5E3D8] bg-white p-6 transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex items-center gap-2">
                  <span className="font-serif text-3xl font-bold text-[#3D6234]">
                    {stage.id}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    //
                  </span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-neutral-900 mb-3 leading-snug">
                  {stage.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-700">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION V */}
        <section id="section-5" className="mb-14 scroll-mt-24">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#3D6234]">
            Section V
          </p>
          <h2 className="font-serif text-2xl lg:text-3xl font-bold text-neutral-900 mb-6 leading-snug">
            Root Causes & Ancient Insights
          </h2>
          <p className="text-base lg:text-lg leading-relaxed text-neutral-700 mb-6">
            Ayurveda&rsquo;s Charaka explicitly asserts:{" "}
            <em className="font-serif">
              &lsquo;Suppressing the urge to urinate or defecate causes many
              diseases.&rsquo;
            </em>{" "}
            Our inner vital force constantly works to keep us alive and
            balanced, which is why individuals remain seemingly healthy until
            30-35 years of age before the accumulated toxic load triggers a
            visible physical breakdown. Similarly, cells generate structural
            friction when expelling dirt, resulting in abnormal heat which we
            observe as fever. Ayurveda states{" "}
            <em className="font-serif">&lsquo;Jvaram Langhanam&rsquo;</em> —
            meaning fasting, rather than heavy suppression medicine, should be
            applied during a fever.
          </p>
        </section>

        {/* SECTION VI — FAQ */}
        <section id="section-6" className="mb-8 scroll-mt-24">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#3D6234]">
            Section VI
          </p>
          <h2 className="font-serif text-2xl lg:text-3xl font-bold text-neutral-900 mb-6 leading-snug">
            Frequently Asked Questions
          </h2>
          <FaqAccordion items={FAQ_ITEMS} />
        </section>
      </article>
    </div>
  );
}
