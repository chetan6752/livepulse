import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Content Creator",
    image: "🎬",
    content:
      "LivePulse completely transformed how I engage with my audience. The real-time features and SuperChats monetization increased my event revenue by 300%.",
    rating: 5,
    gradient: "from-primary to-secondary",
  },
  {
    name: "James Murphy",
    role: "Event Organizer",
    image: "🎪",
    content:
      "The platform is incredibly intuitive. I was able to set up my first event in minutes. My audience loved the chat features and AI assistant.",
    rating: 5,
    gradient: "from-secondary to-accent",
  },
  {
    name: "Emma Rodriguez",
    role: "Fitness Influencer",
    image: "💪",
    content:
      "LivePulse gives me everything I need to host professional live fitness classes. The engagement metrics helped me understand my audience better.",
    rating: 5,
    gradient: "from-accent to-primary",
  },
  {
    name: "David Park",
    role: "Music Producer",
    image: "🎵",
    content:
      "The live streaming capabilities are phenomenal. I can reach my fans from all platforms simultaneously. Highly recommended for any musician.",
    rating: 5,
    gradient: "from-primary to-accent",
  },
  {
    name: "Lisa Thompson",
    role: "Business Coach",
    image: "📚",
    content:
      "The AI assistant feature saves me so much time managing FAQs. My attendees feel heard, and I can focus on delivering great content.",
    rating: 5,
    gradient: "from-secondary to-primary",
  },
  {
    name: "Michael Chang",
    role: "Gaming Streamer",
    image: "🎮",
    content:
      "Finally, a platform built for streamers. The moderation tools and SuperChats system are game-changers. My community loves it.",
    rating: 5,
    gradient: "from-accent to-secondary",
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Loved by Creators Worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of creators who are using LivePulse to connect,
            engage, and monetize
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="animate-slide-up group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <Card className={`relative h-full overflow-hidden border-2 border-transparent bg-gradient-to-br from-card to-card hover:shadow-xl transition-all duration-300`}>
                {/* Gradient border effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg`}
                />

                <CardContent className="relative pt-8">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-accent text-accent"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-2xl`}>
                      {testimonial.image}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 animate-slide-up">
            <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">
              4.9/5
            </p>
            <p className="text-sm text-muted-foreground">Average Rating</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-secondary/5 to-accent/5 border border-secondary/10 animate-slide-up" style={{ animationDelay: "50ms" }}>
            <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">
              50K+
            </p>
            <p className="text-sm text-muted-foreground">Happy Users</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-accent/5 to-primary/5 border border-accent/10 animate-slide-up" style={{ animationDelay: "100ms" }}>
            <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">
              98%
            </p>
            <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 animate-slide-up" style={{ animationDelay: "150ms" }}>
            <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">
              24/7
            </p>
            <p className="text-sm text-muted-foreground">Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
