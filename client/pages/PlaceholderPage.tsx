import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Zap } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({
  title = "Page in Development",
  description = "This page is under construction. Let us know what you'd like to see here!",
}: PlaceholderPageProps) {
  return (
    <div className="w-full min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-32 pb-20 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-float">
              <Zap className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Content */}
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-lg text-muted-foreground mb-8">{description}</p>

          {/* CTA */}
          <Link to="/">
            <Button variant="primary" size="lg" className="gap-2">
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
