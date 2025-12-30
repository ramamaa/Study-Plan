"use client";

import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Lightbulb } from "lucide-react";

export default function HomeworkHelperPage() {
  return (
    <div className="flex min-h-screen bg-muted/40">
      <Sidebar />

      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-2xl font-bold">Homework Helper (No Cheating)</h1>

          {/* Question Input */}
          <Card>
            <CardHeader className="font-semibold">
              Your Homework Question
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                rows={4}
                placeholder="Paste your homework question here. The AI will guide you through it."
              />
              <Button className="w-full">Get Hint</Button>
              <p className="text-xs text-muted-foreground text-center">
                AI provides guidance, not direct answers.
              </p>
            </CardContent>
          </Card>

          {/* AI Guidance */}
          <Card>
            <CardHeader className="font-semibold">AI Guidance</CardHeader>
            <CardContent className="space-y-4">
              <Hint
                title="Understand the Problem Statement"
                text="Read the question carefully and identify what is being asked. Highlight keywords, units, and given values."
              />
              <Hint
                title="Identify Key Concepts"
                text="Think about which formulas or principles apply to this problem."
              />
              <Hint
                title="Break Down into Smaller Steps"
                text="Split the problem into manageable steps before solving."
              />
            </CardContent>
          </Card>

          {/* Follow-up */}
          <Card>
            <CardHeader className="font-semibold">
              Ask a Follow-up Question
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea placeholder="e.g. Can you explain step 2 in more detail?" />
              <Button className="w-full" variant="secondary">
                Submit Question
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

function Hint({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex gap-3 rounded-md border p-4">
      <Lightbulb className="h-5 w-5 text-blue-600 mt-1" />
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}
