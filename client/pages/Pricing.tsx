import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    description: "Perfect for first-time creators",
    price: "Free",
    priceDescription: "Forever free tier",
    features: [
      "Up to 10 events per month",
      "Up to 100 participants",
      "Basic chat features",
      "Email support",
      "Basic analytics",
      "Single platform streaming",
      "Mobile responsive",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Creator",
    description: "For growing content creators",
    price: "$29",
    priceDescription: "per month, billed annually",
    features: [
      "Unlimited events",
      "Up to 5,000 participants",
      "Real-time chat with moderation",
      "AI assistant basic",
      "Advanced analytics",
      "Multi-platform streaming (3 platforms)",
      "SuperChat monetization",
      "Priority email support",
      "Custom branding",
      "Event recordings",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Professional",
    description: "For established brands & streamers",
    price: "$99",
    priceDescription: "per month, billed annually",
    features: [
      "Unlimited everything",
      "Unlimited participants",
      "Advanced chat with AI moderation",
      "AI assistant premium",
      "Custom analytics dashboard",
      "All streaming platforms",
      "Advanced SuperChat features",
      "24/7 phone & chat support",
      "White-label options",
      "API access",
      "Custom integrations",
      "Dedicated account manager",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");

  return (
    <div className="w-full min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-32 pb-20">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your needs. Always transparent pricing
              with no hidden fees.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  billingCycle === "monthly"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("annual")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors relative ${
                  billingCycle === "annual"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Annual
                <Badge variant="secondary" className="absolute -top-2 -right-8">
                  Save 20%
                </Badge>
              </button>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  tier.highlighted ? "border-2 border-primary md:scale-105" : ""
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-secondary p-1">
                    <div className="bg-background rounded-sm py-1 px-3">
                      <p className="text-xs font-semibold text-primary text-center">
                        MOST POPULAR
                      </p>
                    </div>
                  </div>
                )}

                <CardHeader
                  className={tier.highlighted ? "pt-12" : ""}
                >
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <p className="text-muted-foreground text-sm mt-2">
                    {tier.description}
                  </p>

                  {/* Price */}
                  <div className="mt-6 space-y-1">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">{tier.price}</span>
                      {tier.price !== "Free" && (
                        <span className="text-muted-foreground">/month</span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {tier.priceDescription}
                    </p>
                  </div>

                  {/* CTA */}
                  <Link to="/create" className="w-full mt-6">
                    <Button
                      variant={tier.highlighted ? "primary" : "outline"}
                      size="lg"
                      className="w-full gap-2"
                    >
                      {tier.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm font-semibold text-muted-foreground">
                      What's included:
                    </p>
                    <ul className="space-y-3">
                      {tier.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Can I change plans anytime?",
                a: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.",
              },
              {
                q: "Do you offer discounts for annual billing?",
                a: "Absolutely! Annual plans come with a 20% discount compared to monthly billing.",
              },
              {
                q: "Is there a money-back guarantee?",
                a: "Yes, we offer a 30-day money-back guarantee on all paid plans. No questions asked.",
              },
              {
                q: "Can I cancel anytime?",
                a: "Yes, you can cancel your subscription at any time. Your access continues until the end of your billing period.",
              },
              {
                q: "Do you offer enterprise plans?",
                a: "Yes! We offer custom enterprise plans for large organizations. Contact our sales team for details.",
              },
              {
                q: "Are there any hidden fees?",
                a: "No! Our pricing is completely transparent. You'll only pay what's listed. No surprises.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-border/50 hover:border-primary/30 transition-colors"
              >
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
