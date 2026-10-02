import type { Speaker } from "@/types/event";

/**
 * Speakers.
 *
 * project.md section 15 forbids inventing speaker names or affiliations: only
 * approved people are named, and the rail closes on an open CTA card rather
 * than on invented or numbered holding slots. Cards share one 900x1200 frame so
 * the rail stays aligned whatever the source photograph's aspect ratio is.
 */
const FRAME = { width: 900, height: 1200 } as const;

export const speakers: Speaker[] = [
  // Hidden on 21 September 2026 at the user's request. Kept commented rather
  // than deleted, same convention as the other switched-off content: the
  // portrait stays at /images/speakers/yogesh-prasad.webp, so restoring him is
  // uncommenting this block. His SPEAKER 08 placeholder label and pinned mono
  // treatment are preserved as they were.
  // {
  //   id: "yogesh-prasad",
  //   name: "Dr. Yogesh Prasad",
  //   role: "Group Director",
  //   organisation: "URSC, ISRO",
  //   topic: null,
  //   href: "https://www.linkedin.com/in/yogesh-prasad-a10abb5/",
  //   media: {
  //     src: "/images/speakers/yogesh-prasad.webp",
  //     alt: "Portrait of Dr. Yogesh Prasad",
  //     placeholderLabel: "SPEAKER 08",
  //     ...FRAME,
  //   },
  //   // Pinned: the positional plum would repeat Ajmal's in the same row once
  //   // the grid wraps to three up.
  //   treatment: "mono",
  //   confirmed: true,
  // },
  {
    id: "zachary-pederson",
    name: "Zachary Pederson",
    role: "Management Team Member",
    organisation: "Girls in Quantum",
    topic: null,
    href: "https://www.linkedin.com/in/zacharypederson/",
    media: {
      src: "/images/speakers/zachary-pederson.webp",
      alt: "Portrait of Zachary Pederson",
      placeholderLabel: "SPEAKER 10",
      ...FRAME,
    },
    // Pinned: pink would sit directly above Kameshwari's once the grid wraps
    // to three up, and plum would repeat Ajmal's in the same row.
    treatment: "mono",
    confirmed: true,
  },
  {
    // Guest speaker at event 4, Quantum and Qiskit 101.
    id: "subarna-roy",
    name: "Dr. Subarna Roy",
    role: "Chief Data Scientist & Quantum Ambassador",
    organisation: "IBM",
    topic: null,
    href: "https://www.linkedin.com/in/dr-subarna-roy-1224057/",
    media: {
      src: "/images/speakers/subarna-roy.webp",
      alt: "Portrait of Dr. Subarna Roy",
      placeholderLabel: "SPEAKER 07",
      ...FRAME,
    },
    // Pinned rather than positional: moving her to the front would otherwise
    // recolour every unpinned card behind her.
    treatment: "indigo",
    confirmed: true,
  },
  {
    id: "ajmal-ibn-mohammed-althaf",
    name: "Ajmal Ibn Mohammed Althaf",
    role: "Founder, CEO & Scientific Lead",
    organisation: null,
    topic: null,
    href: "https://www.linkedin.com/in/ajmal-ima/",
    media: {
      src: "/images/speakers/ajmal.webp",
      alt: "Ajmal Ibn Mohammed Althaf speaking on stage",
      placeholderLabel: "SPEAKER 01",
      ...FRAME,
    },
    treatment: "plum",
    confirmed: true,
  },
  {
    id: "kameshwari-avs",
    name: "Dr. Kameshwari AVS",
    role: "Quantum Game Theory",
    organisation: "Researcher",
    topic: null,
    href: "https://www.linkedin.com/in/a-v-s-kameshwari-505ab5147/",
    media: {
      src: "/images/speakers/kameshwari-avs.webp",
      alt: "Portrait of Dr. Kameshwari AVS",
      placeholderLabel: "SPEAKER 02",
      ...FRAME,
    },
    treatment: "pink",
    confirmed: true,
  },
  {
    id: "amar-dixit",
    name: "Amar Dixit",
    role: "CEO",
    organisation: "SwiftSeeds, Woi India",
    topic: null,
    href: "https://www.linkedin.com/in/amar-dixit/",
    media: {
      src: "/images/speakers/amar-dixit.webp",
      alt: "Portrait of Amar Dixit",
      placeholderLabel: "SPEAKER 04",
      ...FRAME,
    },
    // Breaks the positional cycle, which would repeat the preceding card's
    // mono and collide with Shreyansu's blue once the grid wraps to three up.
    treatment: "pink",
    confirmed: true,
  },
  {
    id: "abdul-samad",
    name: "Abdul Samad",
    role: "Co-Founder & Venture Creation Lead",
    organisation: "QuantumX",
    topic: null,
    href: null,
    media: {
      src: "/images/speakers/abdul-samad.webp",
      alt: "Portrait of Abdul Samad",
      placeholderLabel: "SPEAKER 09",
      ...FRAME,
    },
    // Pinned: the positional pink would repeat Amar's beside it once the grid
    // wraps to three up.
    treatment: "indigo",
    confirmed: true,
  },
  {
    id: "dhruv-sachdeva",
    name: "Dhruv Sachdeva",
    // Holds both of his titles: the card joins role and organisation with a
    // middle dot, so a third segment would read as a separate organisation.
    role: "Quantum Content Lead, tomorrowmensch",
    organisation: "IBM Qiskit Advocate",
    topic: null,
    href: "https://www.linkedin.com/in/dhruv-sachdeva-1515bb308/",
    media: {
      src: "/images/speakers/dhruv-sachdeva.webp",
      alt: "Portrait of Dhruv Sachdeva",
      placeholderLabel: "SPEAKER 11",
      ...FRAME,
    },
    // Pinned: between Abdul's and Shreyansu's indigo, and pink would sit
    // under Amar's at two up and Kameshwari's at three up.
    treatment: "mono",
    confirmed: true,
  },
  {
    id: "shreyansu-panda",
    name: "Shreyansu Panda",
    role: "Research Engineer",
    organisation: "QuantumX Foundation",
    topic: null,
    href: "https://www.linkedin.com/in/shreyansu-panda/",
    media: {
      src: "/images/speakers/shreyansu-panda.webp",
      alt: "Portrait of Shreyansu Panda",
      placeholderLabel: "SPEAKER 05",
      ...FRAME,
    },
    treatment: "indigo",
    confirmed: true,
  },
  {
    id: "sampark-bhol",
    name: "Sampark Bhol",
    role: "Research Engineer",
    organisation: "QuantumX Foundation",
    topic: null,
    href: null,
    media: {
      src: "/images/speakers/sampark-bhol.webp",
      alt: "Portrait of Sampark Bhol",
      placeholderLabel: "SPEAKER 06",
      ...FRAME,
    },
    treatment: "plum",
    confirmed: true,
  },
  {
    id: "muhammed-ameen",
    name: "Muhammed Ameen Sulaiman",
    role: "Co-founder & CTO",
    organisation: "QuantumX Foundation",
    topic: null,
    href: null,
    media: {
      src: "/images/speakers/ameen.webp",
      alt: "Portrait of Muhammed Ameen Sulaiman",
      placeholderLabel: "SPEAKER 03",
      ...FRAME,
    },
    treatment: "mono",
    confirmed: true,
  },
  {
    id: "vyahriti-vootla",
    name: "Vyahriti Vootla",
    role: "Research",
    organisation: "Girls in Quantum",
    topic: null,
    href: "https://www.linkedin.com/in/vyahriti-vootla-5b134b374/",
    media: {
      src: "/images/speakers/vyahriti-vootla.webp",
      alt: "Portrait of Vyahriti Vootla",
      placeholderLabel: "SPEAKER 12",
      ...FRAME,
    },
    // Pinned: the positional indigo would sit under Shreyansu's once the grid
    // wraps to three up.
    treatment: "pink",
    confirmed: true,
  },
  {
    id: "ishita-anand",
    name: "Ishita Anand",
    role: "Project and Team Management",
    organisation: "Girls in Quantum",
    topic: null,
    href: "https://www.linkedin.com/in/ishita-a-6353632a7/",
    media: {
      src: "/images/speakers/ishita-anand.webp",
      alt: "Portrait of Ishita Anand",
      placeholderLabel: "SPEAKER 13",
      ...FRAME,
    },
    // Pinned: the positional mono would sit under Ameen's at two up, and
    // indigo under Shreyansu's at four up. Plum only meets Sampark's at three
    // up, the least used width.
    treatment: "plum",
    confirmed: true,
  },
  {
    id: "astha",
    // Single name as supplied; add a surname here if one is confirmed.
    name: "Astha",
    role: "Content and Design",
    organisation: "Girls in Quantum",
    topic: null,
    href: "https://www.linkedin.com/in/asthaashray/",
    media: {
      src: "/images/speakers/astha.webp",
      alt: "Portrait of Astha",
      placeholderLabel: "SPEAKER 14",
      ...FRAME,
    },
    // Pinned: she opens a new row at every width, under Sampark's plum, Ameen's
    // mono or Vyahriti's pink, beside the closing card's pink. Indigo meets
    // none of them.
    treatment: "indigo",
    confirmed: true,
  },
];

export const speakersIntro = {
  label: "SPEAKERS",
  heading: ["The speakers"],
  cta: { label: "Apply to speak", href: "speakerApplication" as const },
  /** Sends people to the Foundation's roster of speakers from past events. */
  pastCta: { label: "Past speakers", href: "pastSpeakers" as const },
  /** Copy on the closing card of the rail. */
  more: "More speakers to be announced soon",
};
