import { Badge } from "@/components/ui/badge";
import {
  Plus,
  Share2,
  Users,
  MessageSquare,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Plus,
    title: "Create Your Event",
    description:
      "Set up a new event with a title, description, date, and visibility settings. Get a unique 6-digit code instantly.",
    color: "from-primary to-secondary",
  },
  {
    number: "2",
    icon: Share2,
    title: "Share the Code",
    description:
      "Share your event code with friends, followers, or your audience. They can join with just one click.",
    color: "from-secondary to-accent",
  },
  {
    number: "3",
    icon: Users,
    title: "Manage Audience",
    description:
      "See who's joined, manage participants, and control the event flow with powerful moderation tools.",
    color: "from-accent to-primary",
  },
  {
    number: "4",
    icon: MessageSquare,
    title: "Engage in Real-time",
    description:
      "Chat with your audience in real-time. Respond to questions, interact, and build genuine connections.",
    color: "from-primary to-accent",
  },
  {
    number: "5",
    icon: TrendingUp,
    title: "Monetize with SuperChats",
    description:
      "Let your audience send premium paid messages that stand out and earn you money.",
    color: "from-secondary to-primary",
  },
  {
    number: "6",
    icon: CheckCircle,
    title: "Review Insights",
    description:
      "Get detailed analytics on engagement, reach, revenue, and audience behavior.",
    color: "from-accent to-secondary",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-gradient-to-b from-background to-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20 animate-slide-up">
          <Badge variant="primary" className="mb-4">
            Simple Process
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            How LivePulse Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Six simple steps to launch your live event and connect with your
            audience
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8 md:space-y-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${isEven ? "" : "md:grid-cols-2 md:[direction:rtl]"}`}>
                  {/* Content */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-lg`}>
                        {step.number}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-lg">
                      {step.description}
                    </p>
                  </div>

                  {/* Illustration */}
                  <div className="relative h-64 md:h-80 flex items-center justify-center">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl opacity-10`} />
                    <div className={`relative w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white shadow-lg group hover:scale-110 transition-transform duration-300 animate-float`}>
                      <Icon className="w-12 h-12 md:w-16 md:h-16" />
                    </div>

                    {/* Decorative elements */}
                    {index < steps.length - 1 && (
                      <div className="absolute -bottom-16 md:hidden left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-primary/50 to-transparent" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 md:mt-32 text-center">
          <div className="inline-block px-8 py-6 rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border border-primary/20">
            <p className="text-lg font-semibold mb-2">Ready to get started?</p>
            <p className="text-muted-foreground">
              Launch your first event in under 5 minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
