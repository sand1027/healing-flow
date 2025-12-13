import { Card, CardContent } from "@/components/ui/card";

const caseStudies = [
  {
    title: "Overcoming Anxiety Through Mindfulness",
    client: "Sarah M., 32",
    challenge: "Severe anxiety affecting daily life and work performance",
    solution: "Combined CBT with mindfulness-based stress reduction techniques",
    result: "Reduced anxiety levels by 80% within 6 months, improved work performance",
  },
  {
    title: "Rebuilding After Loss",
    client: "Michael T., 45",
    challenge: "Grief and depression following the loss of a loved one",
    solution: "Grief counseling with trauma-informed therapy approaches",
    result: "Found healthy coping mechanisms and renewed sense of purpose",
  },
  {
    title: "Strengthening Relationship Bonds",
    client: "Emma & David, Couple",
    challenge: "Communication breakdown and growing distance",
    solution: "Couples therapy focusing on communication and emotional connection",
    result: "Restored intimacy and developed effective communication strategies",
  },
  {
    title: "Managing Work-Related Stress",
    client: "Jennifer L., 38",
    challenge: "Burnout and chronic stress from high-pressure job",
    solution: "Stress management techniques and boundary-setting strategies",
    result: "Achieved work-life balance and improved overall well-being",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mb-16">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/60 mb-6 block">
              Case Studies
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8">
              Real Stories,
              <br />
              <span className="font-normal">Real Results</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/60 leading-relaxed font-light max-w-2xl">
              Discover how our therapeutic approaches have helped individuals and couples on their journey to wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-foreground/10 rounded-none">
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-light mb-2">{study.title}</h3>
                    <p className="text-sm text-foreground/50 uppercase tracking-wider">{study.client}</p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-foreground/60 mb-2">Challenge</h4>
                      <p className="text-sm text-foreground/70 font-light">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-foreground/60 mb-2">Solution</h4>
                      <p className="text-sm text-foreground/70 font-light">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-foreground/60 mb-2">Result</h4>
                      <p className="text-sm text-foreground/70 font-light">{study.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

