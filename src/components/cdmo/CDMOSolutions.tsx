import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import manufacturing from "@/assets/manufacturing.jpg";

const solutions = [
{
  title: "Simplified IND",
  desc: "Expedite timeline focused on IND Phase 1 by utilizing AMOGEN's proprietary platform processes."
},
{
  title: "Comprehensive IND",
  desc: "Leverage wider scopes of study to mitigate the risk for development and ensure robust submissions."
},
{
  title: "Enhanced CMC",
  desc: "Replace cell line/process/formulation to improve key features and product quality attributes."
}];


const CDMOSolutions = () => {
  return (
    <section id="quality-systems" className="py-20 lg:py-28 bg-section-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <div className="max-w-4xl mb-14">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4">
              Customized Solutions
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
              Customized CMC Development Solutions
            </h2>
          </div>
        </ScrollReveal>

        













































        {/* CTA */}
        <ScrollReveal>
          <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold text-primary-foreground">
                Contact us to accelerate your development journey.
              </h3>
            </div>
            <a
              href="#rfp-process"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-md bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-colors shrink-0">

              Contact Us <ArrowRight size={14} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>);

};

export default CDMOSolutions;