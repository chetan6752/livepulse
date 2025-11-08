import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Lock, Globe, Zap } from "lucide-react";

export default function CreateEvent() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    eventName: "",
    description: "",
    date: "",
    time: "",
    visibility: "private",
    tags: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [eventCode, setEventCode] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const generateEventCode = () => {
    return Math.random().toString().slice(2, 8).padStart(6, "0");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      setTimeout(() => {
        const code = generateEventCode();
        setEventCode(code);
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      setIsLoading(false);
      console.error("Error creating event:", error);
    }
  };

  if (eventCode) {
    return (
      <div className="w-full min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 pt-32 pb-20 flex items-center justify-center px-4">
          <Card className="w-full max-w-md">
            <CardHeader className="space-y-2 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-float">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-3xl">Event Created!</CardTitle>
              <p className="text-muted-foreground">
                Your event is ready to go. Share the code below with your
                audience.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Event Details */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">
                  Event Name
                </p>
                <p className="text-lg font-semibold">{formData.eventName}</p>
              </div>

              {/* Event Code */}
              <div className="space-y-3 bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-lg border-2 border-primary/30">
                <p className="text-sm font-medium text-muted-foreground text-center">
                  Event Code
                </p>
                <p className="text-center font-mono text-3xl font-bold text-primary tracking-widest">
                  {eventCode}
                </p>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(eventCode);
                  }}
                  className="w-full text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  Click to copy
                </button>
              </div>

              {/* Share Instructions */}
              <div className="space-y-3 p-4 rounded-lg bg-muted/50">
                <p className="text-sm font-medium">Share this code with your audience to:</p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>✓ Join your event</li>
                  <li>��� Participate in live chat</li>
                  <li>✓ Send SuperChats</li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  onClick={() => navigate("/dashboard")}
                >
                  Go to Dashboard
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full"
                  onClick={() => navigate("/")}
                >
                  Back to Home
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-2">Create a New Event</h1>
            <p className="text-lg text-muted-foreground">
              Set up your live event and start connecting with your audience
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Event Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Event Name */}
                <div className="space-y-2">
                  <label htmlFor="eventName" className="text-sm font-medium">
                    Event Name *
                  </label>
                  <input
                    id="eventName"
                    type="text"
                    name="eventName"
                    placeholder="e.g., Product Launch Webinar"
                    value={formData.eventName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <p className="text-xs text-muted-foreground">
                    This is what your audience will see
                  </p>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm font-medium">
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Tell your audience what this event is about..."
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <p className="text-xs text-muted-foreground">
                    Max 500 characters
                  </p>
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="date" className="text-sm font-medium flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Date *
                    </label>
                    <input
                      id="date"
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="time" className="text-sm font-medium flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Time *
                    </label>
                    <input
                      id="time"
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                {/* Visibility */}
                <div className="space-y-2">
                  <label htmlFor="visibility" className="text-sm font-medium">
                    Event Visibility *
                  </label>
                  <select
                    id="visibility"
                    name="visibility"
                    value={formData.visibility}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="private">
                      Private (Invite Only with 6-digit code)
                    </option>
                    <option value="public">Public (Anyone can join)</option>
                    <option value="unlisted">
                      Unlisted (Only with direct link)
                    </option>
                  </select>
                  <p className="text-xs text-muted-foreground">
                    Choose who can access your event
                  </p>
                </div>

                {/* Visibility Info */}
                {formData.visibility === "private" && (
                  <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 flex gap-3">
                    <Lock className="w-5 h-5 text-primary flex-shrink-0" />
                    <div className="text-sm">
                      <p className="font-medium text-primary mb-1">Private Event</p>
                      <p className="text-muted-foreground">
                        Your audience will receive a unique 6-digit code to
                        join. Perfect for exclusive events.
                      </p>
                    </div>
                  </div>
                )}

                {formData.visibility === "public" && (
                  <div className="p-4 rounded-lg bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20 flex gap-3">
                    <Globe className="w-5 h-5 text-secondary flex-shrink-0" />
                    <div className="text-sm">
                      <p className="font-medium text-secondary mb-1">Public Event</p>
                      <p className="text-muted-foreground">
                        Anyone with the link can join your event. Great for
                        maximum reach.
                      </p>
                    </div>
                  </div>
                )}

                {/* Tags */}
                <div className="space-y-2">
                  <label htmlFor="tags" className="text-sm font-medium">
                    Tags (optional)
                  </label>
                  <input
                    id="tags"
                    type="text"
                    name="tags"
                    placeholder="e.g., webinar, business, education (comma separated)"
                    value={formData.tags}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <div className="flex gap-2 mt-2">
                    {formData.tags
                      .split(",")
                      .filter((tag) => tag.trim())
                      .map((tag, index) => (
                        <Badge key={index} variant="primary">
                          {tag.trim()}
                        </Badge>
                      ))}
                  </div>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  isLoading={isLoading}
                  className="w-full gap-2"
                >
                  {!isLoading && <Zap className="w-5 h-5" />}
                  Create Event
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Info Section */}
          <Card className="mt-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-lg">What happens next?</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <Badge variant="primary">1</Badge>
                  <span>
                    You'll get a unique 6-digit code for private events
                  </span>
                </li>
                <li className="flex gap-3">
                  <Badge variant="secondary">2</Badge>
                  <span>
                    Share the code with your audience to let them join
                  </span>
                </li>
                <li className="flex gap-3">
                  <Badge variant="accent">3</Badge>
                  <span>
                    Start your event and begin engaging with your audience
                  </span>
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
