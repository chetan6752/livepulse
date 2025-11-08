import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full pt-32 md:pt-40 pb-20 md:pb-32 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-purple-50/30 to-background" />
        
        {/* Animated orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-gradient-to-br from-secondary/20 to-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-4000" style={{ animationDelay: "4s" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 w-fit">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">
                The Future of Live Events
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                Real-time Events,{" "}
                <span className="gradient-text">Extraordinary Engagement</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Connect with your audience like never before. Real-time chat,
                AI-powered insights, and monetization tools built for modern
                creators.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/create">
                <Button variant="primary" size="lg" className="gap-2">
                  <Zap className="w-5 h-5" />
                  Create Event
                </Button>
              </Link>
              <Link to="/join">
                <Button variant="outline" size="lg">
                  Join Event
                </Button>
              </Link>
            </div>

            {/* Social proof */}
            <div className="pt-8 border-t border-border space-y-4">
              <p className="text-sm text-muted-foreground">
                Trusted by creators and event organizers
              </p>
              <div className="flex items-center gap-6">
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-foreground">10K+</p>
                  <p className="text-sm text-muted-foreground">Active Events</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-foreground">500K+</p>
                  <p className="text-sm text-muted-foreground">Engaged Users</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-foreground">$50M+</p>
                  <p className="text-sm text-muted-foreground">Earnings</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Animated illustration */}
          <div className="hidden md:block relative h-full min-h-96">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Outer circle */}
              <div className="absolute w-80 h-80 rounded-full border-2 border-primary/20 animate-spin" style={{ animationDuration: "20s" }} />
              
              {/* Middle circle */}
              <div className="absolute w-64 h-64 rounded-full border-2 border-secondary/20 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }} />
              
              {/* Inner circle */}
              <div className="absolute w-48 h-48 rounded-full border-2 border-accent/20 animate-spin" style={{ animationDuration: "10s" }} />

              {/* Center content */}
              <div className="absolute w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-2xl animate-float">
                <div className="w-24 h-24 bg-background rounded-full flex items-center justify-center">
                  <Zap className="w-12 h-12 text-primary animate-pulse-glow" />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-0 right-10 w-16 h-16 bg-gradient-to-br from-secondary/80 to-secondary rounded-lg shadow-lg animate-float" style={{ animationDelay: "0.5s" }} />
              <div className="absolute bottom-10 left-5 w-20 h-20 bg-gradient-to-br from-accent/80 to-accent rounded-full shadow-lg animate-float" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
