import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, ArrowLeft, CheckCircle } from "lucide-react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      setTimeout(() => {
        setSubmittedEmail(email);
        setSubmitted(true);
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      setIsLoading(false);
      console.error("Error sending reset email:", error);
    }
  };

  if (submitted) {
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
              <CardTitle className="text-3xl">Check Your Email</CardTitle>
              <p className="text-muted-foreground">
                We've sent a password reset link to your email
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Email Confirmation */}
              <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 space-y-2">
                <p className="text-sm font-medium text-muted-foreground">
                  Email Sent To:
                </p>
                <p className="text-lg font-semibold break-all">{submittedEmail}</p>
              </div>

              {/* Instructions */}
              <div className="space-y-3 p-4 rounded-lg bg-muted/50">
                <p className="text-sm font-medium">What's next?</p>
                <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                  <li>Open your email inbox</li>
                  <li>Find the email from LivePulse</li>
                  <li>Click the reset password link</li>
                  <li>Enter your new password</li>
                </ol>
              </div>

              {/* Info */}
              <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  💡 If you don't see the email, check your spam folder or try
                  resending.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <Link to="/login">
                  <Button variant="primary" size="lg" className="w-full">
                    Back to Login
                  </Button>
                </Link>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setEmail("");
                  }}
                  className="w-full px-4 py-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  Try Another Email
                </button>
              </div>

              {/* Support */}
              <p className="text-xs text-muted-foreground text-center">
                Still having trouble?{" "}
                <Link to="/" className="text-primary hover:underline">
                  Contact support
                </Link>
              </p>
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
      <main className="flex-1 pt-32 pb-20 flex items-center justify-center px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-2 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
            </div>
            <CardTitle className="text-3xl">Reset Password</CardTitle>
            <p className="text-muted-foreground">
              Enter your email address and we'll send you a link to reset your
              password
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  We'll send a secure password reset link to this email
                </p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                isLoading={isLoading}
                className="w-full"
              >
                Send Reset Link
              </Button>

              {/* Back to Login */}
              <Link to="/login">
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Login
                </button>
              </Link>
            </form>

            {/* Divider */}
            <div className="mt-6 relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-background text-muted-foreground">
                  or
                </span>
              </div>
            </div>

            {/* Signup Link */}
            <div className="mt-6 text-center">
              <p className="text-muted-foreground text-sm">
                Don't have an account?{" "}
                <Link to="/signup" className="text-primary font-semibold hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
