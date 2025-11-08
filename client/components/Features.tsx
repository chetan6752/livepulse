import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MessageCircle,
  Zap,
  TrendingUp,
  Users,
  Lock,
  Wifi,
} from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Real-time Chat",
    description:
      "Engage your audience with instant, live messaging. No delays, pure connection.",
    color: "from-primary to-secondary",
  },
  {
    icon: Zap,
    title: "AI Assistant",
    description:
      "Intelligent insights and FAQ management powered by advanced AI technology.",
    color: "from-secondary to-accent",
  },
  {
    icon: TrendingUp,
    title: "SuperChats",
    description:
      "Monetize your events with premium paid messages that stand out and earn you money.",
    color: "from-accent to-primary",
  },
  {
    icon: Users,
    title: "Audience Control",
    description:
      "Manage your event audience with ease. Moderate, moderate, and engage effortlessly.",
    color: "from-primary to-accent",
  },
  {
    icon: Lock,
    title: "Secure Events",
    description:
      "Keep your events private with 6-digit codes and secure access controls.",
    color: "from-secondary to-primary",
  },
  {
    icon: Wifi,
    title: "Live Streaming",
    description:
      "Stream to multiple platforms simultaneously and reach your audience wherever they are.",
    color: "from-accent to-secondary",
  },
];

export default function Features() {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Powerful Features Built for You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create, manage, and monetize your live events
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/50 hover:border-primary/30"
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} p-2.5 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom decoration */}
        <div className="mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10">
            <p className="text-4xl font-bold gradient-text mb-2">99.9%</p>
            <p className="text-muted-foreground">Uptime Guarantee</p>
          </div>
          <div className="text-center p-8 rounded-xl bg-gradient-to-br from-secondary/5 to-accent/5 border border-secondary/10">
            <p className="text-4xl font-bold gradient-text mb-2">&lt; 100ms</p>
            <p className="text-muted-foreground">Message Latency</p>
          </div>
          <div className="text-center p-8 rounded-xl bg-gradient-to-br from-accent/5 to-primary/5 border border-accent/10">
            <p className="text-4xl font-bold gradient-text mb-2">Unlimited</p>
            <p className="text-muted-foreground">Event Capacity</p>
          </div>
        </div>
      </div>
    </section>
  );
}
