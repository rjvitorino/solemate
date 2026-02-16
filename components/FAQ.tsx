import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    q: "How does shoe-splitting work?",
    a: "You create a profile with your size, side, and style. We show you compatible people. You coordinate the purchase off-platform — you stay in control of the details.",
  },
  {
    q: "Is it free to use?",
    a: "Creating a profile and browsing matches is free. We may introduce optional premium features later.",
  },
  {
    q: "What if my match and I disagree?",
    a: "You’re not locked in. You can pass, block, or move on. No transactions happen inside the app at this stage.",
  },
  {
    q: "Is my personal information safe?",
    a: "You share only what’s needed — for example, region-level location. You control your profile visibility. We don’t ask for medical or health information.",
  },
  {
    q: "Can I use SoleMate outside Portugal?",
    a: "We’re starting with regions in Portugal. We may expand to other areas later.",
  },
];

export function FAQ() {
  return (
    <section
      className="relative z-10 px-4 py-16 sm:px-6 lg:px-8"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-2xl">
        <h2
          id="faq-heading"
          className="text-2xl font-semibold text-sole-dark mb-8"
        >
          FAQ
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left">
                {item.q}
              </AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
