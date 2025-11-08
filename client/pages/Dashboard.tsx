import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  Eye,
  Users,
  TrendingUp,
  Calendar,
  Clock,
  MoreVertical,
  Zap,
} from "lucide-react";

const sampleEvents = [
  {
    id: 1,
    name: "Product Launch Webinar",
    status: "live",
    viewers: 342,
    startTime: "2024-02-15 14:00",
    earnings: 1250,
    code: "825491",
  },
  {
    id: 2,
    name: "Community Q&A Session",
    status: "scheduled",
    viewers: 0,
    startTime: "2024-02-20 15:30",
    earnings: 0,
    code: "729384",
  },
  {
    id: 3,
    name: "Fitness Class - Cardio",
    status: "ended",
    viewers: 156,
    startTime: "2024-02-10 10:00",
    earnings: 450,
    code: "613847",
  },
  {
    id: 4,
    name: "Music Production Tutorial",
    status: "ended",
    viewers: 89,
    startTime: "2024-02-08 16:00",
    earnings: 230,
    code: "528491",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "live":
      return "bg-red-500/10 text-red-600 border-red-200";
    case "scheduled":
      return "bg-blue-500/10 text-blue-600 border-blue-200";
    case "ended":
      return "bg-gray-500/10 text-gray-600 border-gray-200";
    default:
      return "bg-gray-500/10 text-gray-600 border-gray-200";
  }
};

export default function Dashboard() {
  const [events] = useState(sampleEvents);

  const totalEarnings = events.reduce((sum, event) => sum + event.earnings, 0);
  const totalViewers = events.reduce((sum, event) => sum + event.viewers, 0);
  const liveCount = events.filter((e) => e.status === "live").length;

  return (
    <div className="w-full min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <div>
              <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
              <p className="text-lg text-muted-foreground">
                Manage your events and track your performance
              </p>
            </div>
            <Link to="/create">
              <Button variant="primary" size="lg" className="gap-2">
                <Plus className="w-5 h-5" />
                Create Event
              </Button>
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Live Events</p>
                  <p className="text-3xl font-bold">{liveCount}</p>
                  {liveCount > 0 && (
                    <div className="flex items-center gap-2 text-xs">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-red-600">Broadcasting now</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Total Viewers</p>
                  <p className="text-3xl font-bold">{totalViewers}</p>
                  <p className="text-xs text-muted-foreground">
                    Across all events
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Total Earnings</p>
                  <p className="text-3xl font-bold">${totalEarnings}</p>
                  <p className="text-xs text-muted-foreground">
                    From SuperChats
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Total Events</p>
                  <p className="text-3xl font-bold">{events.length}</p>
                  <p className="text-xs text-muted-foreground">
                    Created & hosted
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Events Section */}
          <div className="mb-12">
            <div className="mb-6">
              <h2 className="text-2xl font-bold">Your Events</h2>
              <p className="text-muted-foreground">
                Manage and track your live events
              </p>
            </div>

            <div className="space-y-4">
              {events.length === 0 ? (
                <Card>
                  <CardContent className="pt-12 pb-12 text-center">
                    <div className="space-y-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mx-auto">
                        <Zap className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-2">No events yet</p>
                        <p className="text-muted-foreground text-sm">
                          Create your first event to get started
                        </p>
                      </div>
                      <Link to="/create">
                        <Button variant="primary" size="sm">
                          Create Event
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-4">
                  {events.map((event) => (
                    <Card key={event.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          {/* Event Info */}
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <h3 className="font-semibold text-lg">
                                {event.name}
                              </h3>
                              <Badge
                                className={`capitalize ${getStatusColor(
                                  event.status
                                )}`}
                              >
                                {event.status === "live" && (
                                  <span className="w-2 h-2 rounded-full bg-current mr-1 animate-pulse" />
                                )}
                                {event.status}
                              </Badge>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                              {/* Code */}
                              <div className="space-y-1">
                                <p className="text-xs text-muted-foreground">
                                  Event Code
                                </p>
                                <p className="font-mono text-sm font-semibold">
                                  {event.code}
                                </p>
                              </div>

                              {/* Time */}
                              <div className="space-y-1">
                                <p className="text-xs text-muted-foreground flex items-center gap-1">
                                  <Calendar className="w-3 h-3" />
                                  Start Time
                                </p>
                                <p className="text-sm">{event.startTime}</p>
                              </div>

                              {/* Viewers */}
                              <div className="space-y-1">
                                <p className="text-xs text-muted-foreground flex items-center gap-1">
                                  <Eye className="w-3 h-3" />
                                  Viewers
                                </p>
                                <p className="text-sm font-semibold">
                                  {event.viewers}
                                </p>
                              </div>

                              {/* Earnings */}
                              <div className="space-y-1">
                                <p className="text-xs text-muted-foreground">
                                  Earnings
                                </p>
                                <p className="text-sm font-semibold text-green-600">
                                  ${event.earnings}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex gap-2">
                            {event.status === "live" && (
                              <Button variant="primary" size="sm">
                                Join Live
                              </Button>
                            )}
                            {event.status === "scheduled" && (
                              <Button variant="secondary" size="sm">
                                Start Now
                              </Button>
                            )}
                            {event.status === "ended" && (
                              <Button variant="ghost" size="sm">
                                View Replay
                              </Button>
                            )}
                            <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                              <MoreVertical className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Quick Stats */}
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Performance Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Average Viewers
                  </p>
                  <p className="text-2xl font-bold">
                    {events.length > 0
                      ? Math.round(totalViewers / events.length)
                      : 0}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Earnings Per Event
                  </p>
                  <p className="text-2xl font-bold">
                    ${events.length > 0 ? Math.round(totalEarnings / events.length) : 0}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Completion Rate
                  </p>
                  <p className="text-2xl font-bold">
                    {events.length > 0
                      ? Math.round(
                          (events.filter((e) => e.status === "ended").length /
                            events.length) *
                            100
                        )
                      : 0}
                    %
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
