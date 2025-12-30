"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";

export default function StudyPlannerPage() {
  return (
    <div className="flex min-h-screen bg-muted/40">
      <Sidebar />

      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto space-y-6">
          <h1 className="text-2xl font-bold">Personalized Study Planner</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Form */}
            <Card>
              <CardHeader className="font-semibold">
                Generate Your Study Plan
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Subject Name (e.g. Organic Chemistry)" />
                <Input type="date" />
                <Input type="number" placeholder="Daily Available Hours" />

                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Student Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>

                <Button className="w-full">Generate Study Plan</Button>
              </CardContent>
            </Card>

            {/* Generated Plan */}
            <Card>
              <CardHeader className="font-semibold">
                Generated Study Plan
              </CardHeader>
              <CardContent className="space-y-5">
                <DayPlan
                  day="Monday"
                  tasks={[
                    {
                      subject: "Mathematics",
                      topic: "Algebraic Equations",
                      time: "2 hours",
                      status: "completed",
                    },
                    {
                      subject: "Physics",
                      topic: "Newton’s Laws",
                      time: "1.5 hours",
                      status: "completed",
                    },
                  ]}
                />

                <DayPlan
                  day="Tuesday"
                  tasks={[
                    {
                      subject: "Mathematics",
                      topic: "Algebraic Equations",
                      time: "2 hours",
                      status: "missed",
                    },
                    {
                      subject: "Physics",
                      topic: "Newton’s Laws",
                      time: "1.5 hours",
                      status: "pending",
                    },
                  ]}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

function DayPlan({
  day,
  tasks,
}: {
  day: string;
  tasks: {
    subject: string;
    topic: string;
    time: string;
    status: "completed" | "pending" | "missed";
  }[];
}) {
  return (
    <div className="space-y-3">
      <h3 className="font-medium text-blue-600">{day}</h3>

      {tasks.map((task, i) => (
        <div
          key={i}
          className="flex items-center justify-between rounded-md border p-3"
        >
          <div>
            <p className="font-medium">{task.subject}</p>
            <p className="text-sm text-muted-foreground">{task.topic}</p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              {task.time}
            </div>
          </div>

          <Badge
            variant={
              task.status === "completed"
                ? "default"
                : task.status === "missed"
                ? "destructive"
                : "secondary"
            }
          >
            {task.status}
          </Badge>
        </div>
      ))}
    </div>
  );
}
