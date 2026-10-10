/**
 * Next-cohort waitlist.
 *
 * Submissions go to Netlify Forms under `formName`. Netlify only registers a
 * form it finds in static HTML at deploy time, so the same name and fields are
 * declared in `public/__forms.html`; rename or add a field in both places.
 */
export const waitlist = {
  formName: "next-cohort-waitlist",
  label: "NEXT COHORT",
  heading: "Join the waitlist for the next cohort.",
  body: "Leave your email and we will write to you once the next cohort is announced.",
  submitLabel: "Join waitlist",
  success: {
    heading: "Thanks, you're on the list.",
    body: "You will receive a communication from us once the next cohort announcement is out.",
  },
  error: "Something went wrong. Please try again in a moment.",
};
