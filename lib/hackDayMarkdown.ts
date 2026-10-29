import { event } from "@/data/event";
import { hackDay } from "@/data/hackDay";

/**
 * /kochi-hack as Markdown, for the page's "Copy page" menu and /kochi-hack.md.
 *
 * Built from the same data as the page, so the two cannot drift. Pending notes
 * come through as italic lines, the same caveat the page shows.
 */

const list = (items: string[]) => items.map((item) => `- ${item}`).join("\n");
const pending = (note: string) => `_${note}._`;
const withName = (text: string) => text.split(hackDay.title).join(`**${hackDay.title}**`);

export function hackDayMarkdown(): string {
  const { hero, about, schedule, challenges, requirements, submission, judging, rules, faq, venue, resources, community, awards } = hackDay;
  const out: string[] = [];

  out.push(
    `# ${hackDay.title}`,
    `**${hero.heading.join(" ")}** ${hero.standfirst}`,
    ...hero.body.map(withName),
    hero.facts.map((f) => `- **${f.label}:** ${"href" in f && f.href ? `[${f.value}](${f.href})` : f.value}`).join("\n"),
    `[Register](${hackDay.registrationUrl}) · ${event.urls.site}/kochi-hack`,
    `_${hackDay.community.notice}_`,
  );

  out.push(
    "## About the hackathon",
    ...about.body.map(withName),
    "### What you can expect",
    list(about.expect),
    "### Who can participate?",
    list(about.audience),
    `**Prerequisites:** ${about.prerequisites}`,
  );

  out.push(
    "## Schedule",
    pending(schedule.pending),
    ["| Time | Activity |", "| --- | --- |", ...schedule.rows.map((r) => `| ${r.time} | ${r.activity} |`)].join("\n"),
  );

  out.push("## Problem statements", "Choose one challenge. Your solution should address the stated problem and include a meaningful quantum computing component.");
  challenges.forEach((c, i) => {
    out.push(`### Challenge ${i + 1}: ${c.title}`, `**Track:** ${c.track}`, "**The problem**", ...c.problem, "**Your challenge**", c.challenge);
    if (c.outcome) out.push(`**Expected outcome:** ${c.outcome}`);
    if (c.inputs) out.push("**Inputs you can work with**", list(c.inputs));
    out.push("**Possible approaches**", list(c.approaches), "**What to demonstrate**", list(c.demonstrate));
    if (c.consideration) out.push(`**Important:** ${c.consideration}`);
  });

  out.push("## Project requirements");
  requirements.forEach((r, i) => {
    out.push(`### ${i + 1}. ${r.heading}`);
    if (r.body) out.push(r.body);
    out.push(list(r.items));
    if (r.note) out.push(`_${r.note}_`);
  });

  out.push(
    "## Submission",
    submission.intro,
    "### Required checklist",
    submission.checklist.map((item) => `- [ ] ${item}`).join("\n"),
    `**Recommended additions:** ${submission.recommended}`,
    "### What makes a strong submission?",
    submission.strong.map((item, i) => `${i + 1}. ${item}`).join("\n"),
    submission.strongNote,
    submission.details.map((d) => `- **${d.label}:** ${d.value}`).join("\n"),
  );

  out.push("## Judging criteria", pending(judging.pending));
  judging.phases.forEach((phase) => {
    out.push(
      `### ${phase.heading}`,
      ["| Criterion | Weight |", "| --- | --- |", ...phase.criteria.map((c) => `| ${c.label} | ${c.weight}% |`)].join("\n"),
    );
  });

  out.push(
    "## Rules and code of conduct",
    pending(rules.pending),
    rules.items.map((r, i) => `${i + 1}. **${r.heading}:** ${r.body}`).join("\n"),
    `[QFF26 code of conduct](${event.urls.site}${event.urls.codeOfConduct})`,
  );

  out.push("## FAQ", ...faq.flatMap((item) => [`### ${item.question}`, item.answer]));

  out.push(
    "## Venue and travel",
    `**[${venue.name}](${venue.mapUrl})**`,
    venue.body,
    "### Before you travel",
    list(venue.beforeYouTravel),
  );

  out.push(
    "## Tools and resources",
    list(resources.links.map((l) => `[${l.label}](${l.href})`)),
    "### Preparation tips",
    list(resources.tips),
  );

  out.push(
    "## Community and support",
    community.body,
    `### ${community.access.heading}`,
    community.access.body,
    ["```", ...community.access.fields.map((f) => `${f}:`), "```"].join("\n"),
    list(community.access.rules),
    "### On the server",
    list(community.onDiscord),
    list([
      `[Join the QuantumX community](${community.joinUrl})`,
      `[${community.email}](mailto:${community.email})`,
    ]),
  );

  out.push("## Awards and recognition", awards.body, pending(awards.pending));

  return out.join("\n\n") + "\n";
}
