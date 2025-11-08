import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/create"
              element={
                <PlaceholderPage
                  title="Create Event"
                  description="Set up your live event with our intuitive event creation wizard. Coming soon!"
                />
              }
            />
            <Route
              path="/join"
              element={
                <PlaceholderPage
                  title="Join Event"
                  description="Enter an event code to join a live event and connect with the host. Coming soon!"
                />
              }
            />
            <Route
              path="/dashboard"
              element={
                <PlaceholderPage
                  title="Event Dashboard"
                  description="Manage your events, view analytics, and engage with your audience. Coming soon!"
                />
              }
            />
            <Route
              path="/features"
              element={
                <PlaceholderPage
                  title="Features"
                  description="Explore all the powerful features LivePulse has to offer. Coming soon!"
                />
              }
            />
            <Route
              path="/how-it-works"
              element={
                <PlaceholderPage
                  title="How It Works"
                  description="Learn step-by-step how to create and manage live events. Coming soon!"
                />
              }
            />
            <Route
              path="/pricing"
              element={
                <PlaceholderPage
                  title="Pricing"
                  description="Check out our transparent pricing plans. Coming soon!"
                />
              }
            />
            <Route
              path="/forgot-password"
              element={
                <PlaceholderPage
                  title="Forgot Password"
                  description="Reset your password to regain access to your account. Coming soon!"
                />
              }
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
