import { event } from "./event";
import { program } from "./program";

/**
 * /kochi-hack: the participant page for Quantum Hack Day Kochi (event 3).
 *
 * Copy is the organisers' participant brief of 22 October 2026. Their notes
 * to themselves ("confirm before publishing", "add the directions link") are
 * not copy and were left out. What they marked unconfirmed is either `null`,
 * which hides the line, or carried in a `pending` string, which renders as a
 * PendingNote, never as fact. The brief's "Qiskit documentation" links point
 * at the retired docs.quantum.ibm.com hosts; the ones below are the current
 * IBM Quantum Platform addresses also used in `data/guides.ts`.
 */

const hackDay3 = program.find((day) => day.id === "event-3");
const MAP_URL = "https://maps.app.goo.gl/3UsEPFVUBNV5oKh67";

export const hackDay = {
  title: "Quantum Hack Day Kochi",
  summary:
    "A free, hands-on quantum computing hackathon at TinkerSpace, Kochi, on Sunday 1 November 2026. Pick a real-world challenge, build with Qiskit, and demo your prototype.",
  registrationUrl: hackDay3?.registrationUrl ?? event.urls.registration,

  hero: {
    label: "Qiskit Fall Fest 2026 · QuantumX Hackathon",
    // Both marks are white-on-transparent and sit on a plum plate; on the light
    // hero they would vanish. TinkerSpace is represented by the TinkerHub
    // Foundation mark, at the user's direction (22 Oct 2026); alt follows the
    // artwork, not the venue name.
    organisers: [
      { name: "QuantumX", href: null as string | null, logo: { src: "/logos/quantumx-white.png", width: 800, height: 118, alt: "QuantumX" } },
      { name: "TinkerSpace", href: event.urls.tinkerspace as string | null, logo: { src: "/images/partners/tinkerhub.png", width: 800, height: 155, alt: "TinkerHub Foundation" } },
    ],
    heading: ["Build. Experiment.", "Solve with Quantum."],
    // Decorative: a dilution refrigerator, the cryostat that holds a
    // superconducting quantum chip. Transparent, so it sits on the box grid.
    image: { src: "/images/kochi-hack/dilution-refrigerator.webp", width: 1100, height: 1100 },
    standfirst:
      "Explore the possibilities of quantum computing by building solutions to real-world problems.",
    body: [
      "Quantum Hack Day Kochi is a hands-on hackathon where students, developers, researchers, and technology enthusiasts come together to explore quantum computing, experiment with Qiskit, and build innovative solutions to practical challenges.",
    ],
    facts: [
      { label: "Date", value: "Sunday, 1 November 2026" },
      { label: "Time", value: "9:00 AM – 6:00 PM" },
      { label: "Venue", value: "TinkerSpace, Kochi", href: MAP_URL },
      { label: "Fee", value: "Free" },
      { label: "Participation", value: "Solo or teams of up to 4" },
      { label: "Organisers", value: "QuantumX × TinkerSpace" },
    ],
  },

  about: {
    body: [
      "Quantum Hack Day Kochi is designed to make quantum computing more accessible through experimentation, collaboration, and hands-on problem-solving.",
      "Participants will select a challenge, develop a solution, and demonstrate how quantum computing can contribute to addressing a real-world problem. Projects should combine clear problem formulation, meaningful technical implementation, and a practical demonstration.",
    ],
    expect: [
      "Explore quantum computing through practical applications.",
      "Build projects using Qiskit and relevant development tools.",
      "Work on challenges in healthcare, mobility, energy, and sustainability.",
      "Collaborate with fellow participants and exchange ideas.",
      "Present your prototype and receive feedback.",
      "Connect with the wider quantum technology community.",
    ],
    audience: [
      "Students and beginners",
      "Developers and software engineers",
      "AI/ML enthusiasts",
      "Researchers and technology enthusiasts",
      "Anyone interested in quantum computing applications",
    ],
    prerequisites:
      "Prior quantum computing experience is not required. Basic Python knowledge may be helpful, particularly for implementation-focused challenges.",
  },

  // Read from event 3 in data/program.ts, so the homepage card and this
  // page show one schedule.
  schedule: {
    rows: (hackDay3?.sessions ?? []).map((row) => ({ time: row.time ?? "", activity: row.title })),
  },

  challenges: [
    {
      title: "Quantum Optimization for Emergency Vehicle Routing",
      track: "Quantum Optimization | Smart Mobility",
      problem: [
        "Emergency response teams need to determine efficient routes for ambulances to reach multiple locations while accounting for distance, traffic conditions, and limited road availability.",
        "In time-critical situations, inefficient routing can delay emergency response and affect outcomes.",
      ],
      challenge:
        "Develop a quantum-assisted route optimization solution that determines an efficient route for an emergency vehicle visiting multiple locations.",
      outcome:
        "Build a model that minimizes total travel cost while producing a clear, interpretable route.",
      inputs: [
        "A set of locations",
        "Distances between locations",
        "Optional traffic or travel-cost values",
        "Starting location",
      ],
      approaches: [
        "QAOA",
        "QUBO formulations",
        "Quantum optimization with classical preprocessing",
        "Hybrid quantum-classical optimization",
      ],
      demonstrate: [
        "How the routing problem is represented mathematically",
        "How your solution finds or evaluates routes",
        "The role of the quantum component",
        "Results and comparison with a simple classical baseline, where feasible",
      ],
      consideration: null,
    },
    {
      title: "Quantum Machine Learning for Disease Classification",
      track: "Quantum Machine Learning | Healthcare",
      problem: [
        "Medical datasets often contain multiple features that can help distinguish between healthy and diseased patients. Machine learning can use these features to support classification and pattern recognition.",
      ],
      challenge:
        "Build a hybrid quantum-classical machine learning model that classifies patients using an appropriate dataset. The goal is to explore how quantum circuits can be incorporated into a machine learning pipeline, not to prove that quantum machine learning is inherently superior to classical machine learning.",
      outcome: null,
      inputs: null,
      approaches: [
        "Variational Quantum Classifiers (VQC)",
        "Quantum Support Vector Machines (QSVM)",
        "Quantum kernels",
        "Hybrid neural networks incorporating quantum circuits",
      ],
      demonstrate: [
        "Dataset selection and preprocessing",
        "Feature encoding and quantum circuit design",
        "Integration of the quantum model into the classification pipeline",
        "Evaluation using appropriate metrics",
        "Comparison with a classical baseline, where feasible",
      ],
      consideration:
        "Use publicly available or otherwise appropriately authorized data. Do not include personally identifiable patient information in your project or demonstration.",
    },
    {
      title: "Quantum Simulation for Energy Systems",
      track: "Quantum Optimization | Energy and Sustainability",
      problem: [
        "Energy systems must balance generation costs, resource availability, capacity constraints, and electricity demand.",
        "Finding a cost-effective allocation of available energy resources can help make energy planning more efficient.",
      ],
      challenge:
        "Develop a simplified quantum-assisted model that allocates energy resources to meet demand while minimizing total generation cost.",
      outcome: null,
      inputs: [
        "Multiple energy sources",
        "Energy demand",
        "Generation costs",
        "Capacity constraints",
      ],
      approaches: [
        "QUBO optimization",
        "QAOA",
        "Hybrid quantum-classical optimization",
        "Small-scale quantum simulation",
      ],
      demonstrate: [
        "How the allocation problem is formulated",
        "How capacity and demand constraints are handled",
        "The resulting resource allocation",
        "Total cost and feasibility of the solution",
        "Comparison with a classical approach, where feasible",
      ],
      consideration: null,
    },
    {
      title: "Quantum Optimization for EV Charging Stations",
      track: "Quantum Optimization | Electric Mobility",
      problem: [
        "As electric vehicle adoption increases, charging stations may experience periods of high demand. Poor scheduling can lead to long waiting times, inefficient use of charging infrastructure, and higher energy costs.",
      ],
      challenge:
        "Develop a quantum optimization model that determines when and where electric vehicles should be charged while minimizing waiting time and energy costs.",
      outcome: null,
      inputs: [
        "Electric vehicle locations",
        "Battery levels",
        "Charging station locations",
        "Charging station capacity",
        "Electricity costs at different times",
      ],
      approaches: [
        "QUBO formulations",
        "QAOA",
        "Hybrid quantum-classical scheduling",
        "Classical preprocessing combined with quantum optimization",
      ],
      demonstrate: [
        "How vehicles are assigned to charging stations",
        "How charging schedules are generated",
        "How capacity and charging requirements are handled",
        "The resulting schedule and relevant performance metrics",
      ],
      consideration: null,
    },
    {
      title: "Post-Quantum Cryptography for a Quantum-Safe Future",
      track: "Cybersecurity | Post-Quantum Cryptography (PQC)",
      problem: [
        "Many widely used cryptographic systems could become vulnerable to attacks from sufficiently powerful quantum computers. Organizations need to prepare for this threat by exploring cryptographic algorithms designed to protect sensitive data and secure digital communications in a post-quantum world.",
      ],
      challenge:
        "Develop a prototype that demonstrates how an existing application or secure communication workflow can be upgraded using post-quantum cryptography (PQC). Explore how quantum-resistant algorithms can protect data while considering practical factors such as performance, key sizes, and compatibility.",
      outcome: null,
      inputs: [
        "A sample application or secure communication workflow",
        "Conventional cryptographic algorithms for comparison",
        "Post-quantum cryptographic algorithms, such as ML-KEM or ML-DSA",
        "Sample messages, files, or data to secure",
        "Performance metrics, such as execution time and key or signature sizes",
      ],
      approaches: [
        "Post-quantum key establishment using ML-KEM",
        "Digital signatures using ML-DSA",
        "Hybrid classical and post-quantum cryptography",
        "Quantum-safe secure messaging or file protection",
        "PQC performance benchmarking and migration tools",
      ],
      demonstrate: [
        "How the selected post-quantum cryptographic algorithm works within your application",
        "How keys are established, messages are encrypted, or signatures are generated and verified",
        "How the PQC implementation compares with a conventional cryptographic baseline",
        "Performance measurements and practical trade-offs",
        "How your solution could help prepare an application for the post-quantum era",
      ],
      consideration: null,
    },
  ],

  // The organisers' "Hack Day Project Submission Guide", posted on Discord on
  // 31 Oct 2026; wording follows it so the site and the server agree.
  requirements: [
    {
      heading: "Project information",
      body: null,
      items: [
        "Team name",
        "Project name",
        "Selected challenge or problem statement",
        "Team member names",
        "Team member roles (optional but recommended)",
      ],
      note: null,
    },
    {
      heading: "Problem statement",
      body: "Explain the real-world problem your project aims to solve. Include:",
      items: [
        "What is the problem, and why is it important?",
        "Who is affected by it?",
        "What are you trying to optimize, predict, classify, or simulate?",
      ],
      note: "Approximately 150–300 words.",
    },
    {
      heading: "Proposed solution",
      body: "Describe your solution in simple, understandable terms. Include:",
      items: [
        "Your overall approach",
        "The workflow: Input → Processing → Output",
        "How your system addresses the problem",
        "Why you chose this approach",
      ],
      note: "A simple architecture or workflow diagram is highly recommended.",
    },
    {
      heading: "Quantum component (mandatory)",
      body: "Every project must include a meaningful quantum computing component. Clearly explain:",
      items: [
        "Quantum technology used: for example QAOA, VQE, VQC, QSVM, quantum kernels, quantum neural networks, quantum simulation, or another Qiskit-supported approach",
        "Why you chose it, and why it suits your problem",
        "Problem mapping: how your real-world problem is represented as a quantum problem",
        "Quantum circuit or algorithm: what it does and how it contributes to the solution",
        "Role of quantum computing: which part of your system uses it, and what it achieves",
      ],
      note: "Simply adding a Hadamard gate or a random quantum circuit does not qualify as meaningful quantum integration. The quantum component must have a clear purpose in solving or investigating the selected problem.",
    },
    {
      heading: "Implementation and reproducibility",
      body: "Submit a complete, working implementation that another person can reproduce. Include:",
      items: [
        "Source code (.py files, Jupyter notebooks, or both)",
        "README with setup and execution instructions",
        "Required dependencies and installation instructions",
        "Dataset, or instructions for accessing the dataset",
        "Configuration details, where applicable",
      ],
      note: "Make sure your code is organized, documented, and runnable by following the instructions in your README.",
    },
    {
      heading: "Qiskit usage",
      body: "As this is a Qiskit Hack Day, use Qiskit wherever appropriate and document your implementation. Mention:",
      items: [
        "Qiskit libraries used",
        "Quantum circuits created",
        "Quantum algorithms implemented",
        "Backend or simulator used",
      ],
      note: "If your project uses a hybrid classical–quantum approach, explain how the classical and quantum components interact.",
    },
  ],

  submission: {
    intro:
      "All teams must submit their projects before the submission deadline. Review your submission carefully and make sure every mandatory requirement is met.",
    checklist: [
      "Provided all project and team details",
      "Explained the problem and proposed solution",
      "Clearly documented the mandatory quantum component",
      "Included the complete source code and necessary files",
      "Added setup instructions and dependencies",
      "Documented your Qiskit implementation and backend or simulator",
      "Verified that another person can reproduce your project",
    ],
    recommended:
      "Architecture diagram, screenshots, a short demo video, classical baseline comparison, and future improvements.",
    strong: [
      "Address the chosen problem clearly.",
      "Demonstrate a working minimum viable prototype.",
      "Integrate quantum computing meaningfully.",
      "Explain the technical implementation and design choices.",
      "Present results and limitations honestly.",
      "Be reproducible and easy to evaluate.",
    ],
    strongNote:
      "Teams are not expected to prove quantum advantage. A well-designed, honest, working prototype is more valuable than an ambitious idea without a functioning implementation.",
    details: [
      { label: "Portal and deadline", value: "Announced on the day" },
      {
        label: "Repository",
        value: "Public, or access-enabled as specified by the organizers",
      },
      {
        label: "Demo format",
        value: "Live demonstration during the showcase",
      },
    ],
  },

  judging: {
    phases: [
      {
        heading: "Phase 1: Idea and feasibility",
        criteria: [
          { label: "Problem understanding and SDG relevance", weight: 20 },
          { label: "Innovation and creativity", weight: 25 },
          { label: "Feasibility within the hackathon timeline", weight: 20 },
          { label: "Quantum component planning", weight: 25 },
          { label: "Clarity of presentation", weight: 10 },
        ],
      },
      {
        heading: "Phase 2: Prototype and implementation",
        criteria: [
          { label: "MVP functionality and completion", weight: 25 },
          { label: "Quantum component implementation", weight: 25 },
          { label: "Technical implementation", weight: 20 },
          { label: "Innovation and real-world impact", weight: 15 },
          { label: "Demo and presentation", weight: 15 },
        ],
      },
    ],
    pending: "Phases and weightings to be confirmed",
  },

  rules: {
    items: [
      { heading: "Original work", body: "Code a major part of your project on the day of the event, and clearly acknowledge external code, datasets, libraries, and other resources." },
      { heading: "Relevant quantum integration", body: "Every project must include a meaningful quantum computing component related to the selected challenge." },
      { heading: "Team participation", body: "Join solo or as a team of up to four members. Each team submits its details once on Discord to get hackathon access." },
      { heading: "Bring a laptop", body: "Every team needs at least one working laptop: you demonstrate your final project and present your code on it during the evaluation." },
      { heading: "Respectful collaboration", body: "Treat participants, organizers, volunteers, and judges respectfully." },
      { heading: "Responsible data use", body: "Use authorized datasets and do not expose confidential, personal, or sensitive information." },
      { heading: "Transparency", body: "Clearly explain what has been implemented, what is simulated, what is incomplete, and what results have actually been obtained." },
      { heading: "Reproducibility", body: "Provide sufficient documentation for judges to understand and, where possible, run your solution." },
      { heading: "Organizer instructions", body: "Follow the event team's instructions regarding venue safety, equipment, access, and event operations." },
    ],
    pending: "Rules pending organiser approval",
  },

  faq: [
    { question: "Do I need prior quantum computing experience?", answer: "No. The event is beginner-friendly; you can learn as you build." },
    { question: "Do I need to know Python?", answer: "Python is recommended for implementation-focused challenges, particularly when using Qiskit." },
    { question: "Can I participate alone?", answer: "Yes. You can join solo or as a team." },
    { question: "How many people can be in a team?", answer: "Up to four members, including the team leader." },
    { question: "Can I join a team if I don't have one?", answer: "Yes. Use the #general chat on the participant Discord server to team up, or join solo." },
    { question: "Do I need a laptop?", answer: "Yes. You demonstrate your final project and present your code on the day, so every team needs at least one working laptop. One per team is enough." },
    { question: "Can I build my project before the event?", answer: "You can prepare, but a major part of the project must be coded on the day of the event." },
    { question: "Do all projects need to use Qiskit?", answer: "Qiskit should be used wherever appropriate, as this is a Qiskit Hack Day. Every project must include a meaningful quantum computing component." },
    { question: "Do I need access to a real quantum computer?", answer: "No. A suitable simulator-based implementation may be used; document the simulator or backend in your submission." },
    { question: "Do I need to prove quantum advantage?", answer: "No. The goal is to explore how quantum computing can contribute to the problem. Explain your approach and evaluate your results honestly." },
    { question: "Can I use publicly available datasets or libraries?", answer: "Yes. Document their sources and setup instructions, and follow the applicable licences and data-use conditions." },
    { question: "Will there be a project presentation?", answer: "Yes. The day includes a project showcase and demos. The exact presentation format and time limit will be announced by the organizers." },
    { question: "Will participants receive certificates?", answer: "Yes." },
    { question: "Is there a registration fee?", answer: "No. Quantum Hack Day Kochi is free." },
    { question: "What should I bring?", answer: "A working laptop (at least one per team), its charger, and any login credentials you need for your development tools." },
    { question: "Where can I ask for help?", answer: "On the participant Discord server, whose invite confirmed participants receive by email, or by emailing the organising team." },
  ],

  venue: {
    name: "TinkerSpace, Kochi, Kerala",
    body: "Quantum Hack Day Kochi will be held in person at TinkerSpace on 1 November 2026.",
    mapUrl: MAP_URL,
    beforeYouTravel: [
      "Keep your registration confirmation accessible.",
      "Bring a working laptop (at least one per team) and its charger.",
      "Follow the check-in instructions shared by the organizers.",
    ],
  },

  resources: {
    links: [
      { label: "Qiskit documentation", href: "https://quantum.cloud.ibm.com/docs" },
      { label: "IBM Quantum Learning", href: "https://quantum.cloud.ibm.com/learning" },
      { label: "IBM Quantum Platform", href: "https://quantum.cloud.ibm.com/" },
      { label: "Python", href: "https://www.python.org/" },
      { label: "Jupyter", href: "https://jupyter.org/" },
      { label: "GitHub", href: "https://github.com/" },
    ],
    tips: [
      "Review the challenge tracks before the event.",
      "Familiarize yourself with basic Python and quantum circuit concepts.",
      "Set up your development environment in advance if possible.",
      "Start with a small, testable objective.",
      "Think about how you will evaluate your results.",
    ],
  },

  community: {
    body: "All discussion for the hackathon happens on the participant Discord server. If you are a registered and confirmed participant, check your email for the link to join it.",
    // The invite reaches confirmed participants by email; it is never
    // published here (see data/event.ts on raw Discord invites).
    notice: "Registered and confirmed? Check your email for the participant Discord invite.",
    // Posted by the organisers on Discord, 29 Oct 2026. Verified by hand
    // before the participant role and hackathon channels are granted.
    access: {
      heading: "Get hackathon access",
      body: "To receive the participant role and the hackathon channels, each team posts its details once in the team details channel on Discord. The organizers verify them before granting access.",
      fields: ["Team Name", "Number of Members", "Team Members (Discord IDs)"],
      rules: [
        "Submit only one response per team.",
        "Include the Discord ID of every member, including the team leader.",
        "Every listed member must have joined the QuantumX Discord server.",
        "Do not post duplicates; for a correction, contact the organizers.",
      ],
    },
    onDiscord: [
      "Introduce yourself",
      "Form or find a team",
      "Hack discussion",
      "Problem statements",
      "Submission guidance",
    ],
    joinUrl: event.urls.community,
    email: event.contactEmail,
  },

  awards: {
    body: "The day closes with awards. Participants showcase their projects, explain their technical approach, and receive feedback from the evaluation panel. Every participant receives a certificate.",
    prizePool: { label: "Prize pool", value: "₹25K" },
    workspace: {
      image: { src: "/images/kochi-hack/startup-park.webp", alt: "The Startup Park building in Bengaluru" },
      heading: "Startup Park workspace access",
      body: "Startup Park, Bengaluru has committed workspace access for the winning teams.",
      places: [
        { place: "1st place", value: "3 months" },
        { place: "2nd place", value: "1 month" },
        { place: "3rd place", value: "1 month" },
      ],
    },
  },
};

