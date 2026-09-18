import type { GuideDocument } from "@/types/event";
import { event } from "@/data/event";

/**
 * The two longer footer pages: where to start learning, and why Qiskit.
 *
 * Every destination below is IBM's or Qiskit's own, and each was checked to
 * resolve on 18 September 2026. qiskit.org has been retired and now redirects
 * to IBM's Qiskit page, so nothing here points at it; the docs, tutorials and
 * courses all live on IBM Quantum Platform now.
 */

const IBM_QUANTUM_SIGNUP = "https://quantum.cloud.ibm.com/registration";

export const resources: GuideDocument = {
  title: "Resources",
  summary:
    "Where to start learning quantum computing with Qiskit, before QFF26 or after it.",
  sections: [
    {
      heading: "Qiskit",
      links: [
        { label: "Qiskit", href: "https://www.ibm.com/quantum/qiskit" },
        { label: "Qiskit on GitHub", href: "https://github.com/Qiskit/qiskit" },
        { label: "Documentation", href: "https://quantum.cloud.ibm.com/docs" },
        {
          label: "Install Qiskit",
          href: "https://quantum.cloud.ibm.com/docs/guides/install-qiskit",
        },
      ],
    },
    {
      heading: "IBM Quantum",
      links: [
        { label: "Create an IBM Quantum account", href: IBM_QUANTUM_SIGNUP },
        { label: "IBM Quantum Platform", href: "https://quantum.cloud.ibm.com/" },
        { label: "IBM Quantum", href: "https://www.ibm.com/quantum" },
      ],
    },
    {
      heading: "Learning",
      links: [
        { label: "IBM Quantum Learning", href: "https://quantum.cloud.ibm.com/learning" },
        {
          label: "Basics of quantum information",
          href: "https://quantum.cloud.ibm.com/learning/courses/basics-of-quantum-information",
        },
        { label: "Tutorials", href: "https://quantum.cloud.ibm.com/docs/tutorials" },
        { label: "Qiskit on YouTube", href: "https://www.youtube.com/@qiskit" },
      ],
    },
    {
      heading: "Community",
      links: [
        { label: "Join the Qiskit Slack", href: "https://qisk.it/join-slack" },
        { label: "Qiskit on GitHub", href: "https://github.com/Qiskit" },
        { label: "Qiskit ecosystem", href: "https://www.ibm.com/quantum/ecosystem" },
      ],
    },
  ],
  links: [
    { label: "Why Qiskit", href: "/why-qiskit" },
    { label: "Register", href: event.urls.registration },
  ],
};

export const whyQiskit: GuideDocument = {
  title: "Why Qiskit",
  summary:
    "QFF26 is a Qiskit Fall Fest, so every session comes back to Qiskit. Here is why it is the place we start.",
  sections: [
    {
      heading: "It is open",
      body: [
        "Qiskit is open source. The code, the documentation and the tutorials are public, so you can read how it works, fix what you find, and learn alongside the people who build it.",
      ],
    },
    {
      heading: "You learn by building",
      body: [
        "Quantum computing makes more sense once you run it. With Qiskit you write circuits, run experiments and try out algorithms yourself, instead of only reading about them.",
      ],
    },
    {
      heading: "It reaches real hardware",
      body: [
        "The same code that runs on a simulator can run on IBM quantum processors through IBM Quantum Platform. You see how real devices behave, noise included, not only what the textbook predicts.",
      ],
    },
    {
      heading: "The community is large",
      body: [
        "Researchers, educators, developers and students around the world use Qiskit. What you learn at QFF26 carries into that community, and into the next Fall Fest.",
      ],
    },
    {
      heading: "You can start from zero",
      body: [
        "No quantum background is needed. The courses, tutorials and community channels meet you where you are, whether this is your first circuit or your research tool.",
      ],
    },
    {
      heading: "Ready to start?",
      body: [
        "Make an IBM Quantum account and run your first circuit before QFF26 begins.",
      ],
      links: [{ label: "Create an IBM Quantum account", href: IBM_QUANTUM_SIGNUP }],
    },
  ],
  links: [
    { label: "Resources", href: "/resources" },
    { label: "Register", href: event.urls.registration },
  ],
};
