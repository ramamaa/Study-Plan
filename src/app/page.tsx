import { DemoCard } from "@/components/DemoCard";
import { Sidebar } from "@/components/Sidebar";
import { Calendar, Brain, ClipboardCheck } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex min-h-screen bg-muted/40">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold">
              AI Learning Intelligence Platform
            </h1>
            <p className="text-muted-foreground mt-2">
              Adaptive learning powered by AI
            </p>
          </div>

          {/* Demo Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <DemoCard
              title="Study Planner"
              description="Generate personalized study plans based on your subjects, deadlines, and available time."
              icon={Calendar}
              href="/planner"
            />

            <DemoCard
              title="Homework Helper"
              description="Receive intelligent step-by-step hints and explanations without direct answers."
              icon={Brain}
              href="/homework"
            />

            <DemoCard
              title="Exam & Analysis"
              description="Create custom exams and get AI-powered insights into strengths and weaknesses."
              icon={ClipboardCheck}
              href="/exam"
            />
          </div>

          {/* Footer */}
          <footer className="pt-12 text-center text-sm text-muted-foreground">
            © 2025 AI Learning Intelligence Platform. All rights reserved.
          </footer>
        </div>
      </main>
    </div>
  );
}
