import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background" />
        
        {/* Animated orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/30 to-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-secondary/30 to-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float animation-delay-2000" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent p-0.5 animate-slide-up">
          {/* Inner content */}
          <div className="rounded-3xl bg-background p-12 md:p-20 text-center space-y-8">
            {/* Icon */}
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-float">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Ready to Transform Your <span className="gradient-text">Live Events?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join thousands of creators using LivePulse to connect with their
                audience, drive engagement, and monetize their content. Start
                creating your first event today.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/create">
                <Button
                  variant="primary"
                  size="lg"
                  className="gap-2 px-8 shadow-lg"
                >
                  Create Event Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/join">
                <Button variant="outline" size="lg" className="px-8">
                  Join Event
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="pt-8 border-t border-border space-y-4">
              <p className="text-sm text-muted-foreground">
                No credit card required • Free tier available
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">99.9% Uptime</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span className="text-muted-foreground">
                    Real-time Encryption
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-muted-foreground">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
