import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, ArrowRight, CheckCircle } from "lucide-react";

export default function JoinEvent() {
  const navigate = useNavigate();
  const [eventCode, setEventCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [joined, setJoined] = useState(false);
  const [eventDetails, setEventDetails] = useState<{
    name: string;
    host: string;
    participants: number;
  } | null>(null);

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 6);
    setEventCode(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (eventCode.length !== 6) {
      alert("Please enter a valid 6-digit event code");
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call to validate and join event
      setTimeout(() => {
        setEventDetails({
          name: "Product Launch Webinar",
          host: "Sarah Chen",
          participants: 342,
        });
        setJoined(true);
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      setIsLoading(false);
      console.error("Error joining event:", error);
      alert("Failed to join event. Please try again.");
    }
  };

  if (joined && eventDetails) {
    return (
      <div className="w-full min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 pt-32 pb-20 flex items-center justify-center px-4">
          <Card className="w-full max-w-md">
            <CardHeader className="space-y-2 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-float">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-3xl">Welcome!</CardTitle>
              <p className="text-muted-foreground">
                You've successfully joined the event
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Event Details */}
              <div className="space-y-4 p-4 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">
                    Event Name
                  </p>
                  <p className="text-lg font-semibold">{eventDetails.name}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">
                    Host
                  </p>
                  <p className="text-base">{eventDetails.host}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">
                    Current Participants
                  </p>
                  <p className="text-base flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    {eventDetails.participants} people watching
                  </p>
                </div>
              </div>

              {/* What you can do */}
              <div className="space-y-3 p-4 rounded-lg bg-muted/50">
                <p className="text-sm font-medium">In this event, you can:</p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> Chat with other
                    participants
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> Ask questions to
                    the host
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> Send a SuperChat
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> Vote on messages
                  </li>
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
                  Join Chat
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
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-2">Join a Live Event</h1>
            <p className="text-lg text-muted-foreground">
              Enter the event code to join and start chatting with the host and
              other participants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Join Form */}
            <Card>
              <CardHeader>
                <CardTitle>Enter Event Code</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Event Code Input */}
                  <div className="space-y-2">
                    <label htmlFor="eventCode" className="text-sm font-medium">
                      Event Code *
                    </label>
                    <div className="relative">
                      <input
                        id="eventCode"
                        type="text"
                        placeholder="000000"
                        value={eventCode}
                        onChange={handleCodeChange}
                        maxLength={6}
                        className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background text-center text-3xl font-mono tracking-widest focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50"
                      />
                      <p className="text-xs text-muted-foreground mt-2 text-center">
                        6-digit code (case insensitive)
                      </p>
                    </div>
                  </div>

                  {/* Code Status */}
                  {eventCode.length === 6 && (
                    <div className="p-3 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-primary">
                        Code ready to submit
                      </span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={isLoading}
                    disabled={eventCode.length !== 6}
                    className="w-full gap-2"
                  >
                    {!isLoading && <ArrowRight className="w-5 h-5" />}
                    Join Event
                  </Button>

                  {/* Divider */}
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-border" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-background text-muted-foreground">
                        Don't have a code?
                      </span>
                    </div>
                  </div>

                  {/* CTA for Creating Event */}
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    className="w-full gap-2"
                    onClick={() => navigate("/create")}
                  >
                    <Zap className="w-5 h-5" />
                    Create Your Own Event
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Info Card */}
            <div className="space-y-6">
              {/* How to Join */}
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">📋</span> How to Join
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ol className="space-y-3">
                    <li className="flex gap-3">
                      <Badge variant="primary" className="flex-shrink-0">
                        1
                      </Badge>
                      <div>
                        <p className="font-medium text-sm">Get Event Code</p>
                        <p className="text-xs text-muted-foreground">
                          Ask the host for the 6-digit event code
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Badge variant="secondary" className="flex-shrink-0">
                        2
                      </Badge>
                      <div>
                        <p className="font-medium text-sm">Enter Code</p>
                        <p className="text-xs text-muted-foreground">
                          Type the code into the field above
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Badge variant="accent" className="flex-shrink-0">
                        3
                      </Badge>
                      <div>
                        <p className="font-medium text-sm">Join & Chat</p>
                        <p className="text-xs text-muted-foreground">
                          Start chatting with the host and other participants
                        </p>
                      </div>
                    </li>
                  </ol>
                </CardContent>
              </Card>

              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">✨</span> Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-primary font-bold">•</span> Real-time
                      chat messaging
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-secondary font-bold">•</span> Vote on
                      messages
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent font-bold">•</span> Send
                      SuperChats
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary font-bold">•</span> Ask
                      questions
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
