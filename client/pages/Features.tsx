import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MessageCircle,
  Zap,
  TrendingUp,
  Users,
  Lock,
  Wifi,
  BarChart3,
  Shield,
  Smartphone,
  Globe,
  Headphones,
  CheckCircle,
} from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Real-time Chat",
    description:
      "Engage your audience with instant, live messaging with zero latency. Enable live polls, Q&A sessions, and direct viewer interaction.",
    color: "from-primary to-secondary",
  },
  {
    icon: Zap,
    title: "AI Assistant",
    description:
      "Intelligent insights and FAQ management powered by advanced AI. Automatically categorizes questions and suggests answers.",
    color: "from-secondary to-accent",
  },
  {
    icon: TrendingUp,
    title: "SuperChats",
    description:
      "Monetize your events with premium paid messages that stand out. Get paid directly for audience engagement.",
    color: "from-accent to-primary",
  },
  {
    icon: Users,
    title: "Audience Management",
    description:
      "Powerful moderation tools to manage your event audience. Ban, mute, highlight, and control the conversation flow.",
    color: "from-primary to-accent",
  },
  {
    icon: Lock,
    title: "Secure Events",
    description:
      "Keep your events private with 6-digit codes and secure access controls. End-to-end encrypted messaging.",
    color: "from-secondary to-primary",
  },
  {
    icon: Wifi,
    title: "Multi-Platform Streaming",
    description:
      "Stream to multiple platforms simultaneously. One click to broadcast to YouTube, Facebook, and Twitch.",
    color: "from-accent to-secondary",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Detailed metrics on engagement, reach, revenue, and audience behavior. Track growth and optimize future events.",
    color: "from-primary to-secondary",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "SOC 2 compliance, data encryption, and advanced security measures. Your data is protected 24/7.",
    color: "from-secondary to-accent",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description:
      "Fully responsive design that works seamlessly on all devices. Native mobile app coming soon.",
    color: "from-accent to-primary",
  },
  {
    icon: Globe,
    title: "Global CDN",
    description:
      "Lightning-fast streaming with 99.9% uptime guarantee. Servers in 6 continents for optimal performance.",
    color: "from-primary to-accent",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Round-the-clock customer support via chat, email, and phone. Expert assistance whenever you need it.",
    color: "from-secondary to-primary",
  },
  {
    icon: CheckCircle,
    title: "API Access",
    description:
      "Full API access for custom integrations. Build your own tools and extend functionality.",
    color: "from-accent to-secondary",
  },
];

export default function Features() {
  return (
    <div className="w-full min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-32 pb-20">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Powerful Features for Every Creator
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create, manage, and monetize your live
              events. From real-time chat to advanced analytics.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/50 hover:border-primary/30"
                >
                  <CardHeader>
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} p-2.5 mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
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
        </section>

        {/* Feature Comparison */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What's Included
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need is included with your LivePulse account
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Unlimited events",
              "Real-time chat & messaging",
              "AI-powered assistant",
              "SuperChat monetization",
              "Advanced analytics",
              "User management",
              "Multi-platform streaming",
              "Event history & recordings",
              "Custom branding",
              "API access",
              "Priority support",
              "Security & compliance",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
