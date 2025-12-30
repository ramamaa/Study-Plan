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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Handshake } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";

export default function ExamPage() {
  return (
    <div className="flex min-h-screen bg-muted/40">
      <Sidebar />

      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT */}
          <div className="lg:col-span-2 space-y-6">
            {/* Generate Exam */}
            <Card>
              <CardHeader className="font-semibold">
                Generate New Exam
              </CardHeader>
              <CardContent className="space-y-4">
                <Select defaultValue="math">
                  <SelectTrigger>
                    <SelectValue placeholder="Subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="math">Mathematics</SelectItem>
                    <SelectItem value="physics">Physics</SelectItem>
                  </SelectContent>
                </Select>

                <Input placeholder="Topic (e.g. Calculus)" />

                <Select defaultValue="medium">
                  <SelectTrigger>
                    <SelectValue placeholder="Difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="easy">Easy</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="hard">Hard</SelectItem>
                  </SelectContent>
                </Select>

                <Button className="w-full">Generate Exam</Button>
              </CardContent>
            </Card>

            {/* Question */}
            <Card>
              <CardHeader className="font-semibold">Question 1 of 4</CardHeader>
              <CardContent className="space-y-4">
                <p className="font-medium">
                  Which of the following is considered a fundamental principle
                  of quantum mechanics?
                </p>

                <RadioGroup className="space-y-2">
                  <Option
                    value="a"
                    label="Newton's Law of Universal Gravitation"
                  />
                  <Option
                    value="b"
                    label="Heisenberg's Uncertainty Principle"
                  />
                  <Option value="c" label="Ohm's Law of Electrical Circuits" />
                  <Option value="d" label="Law of Conservation of Energy" />
                </RadioGroup>

                <div className="flex justify-between pt-4">
                  <Button variant="secondary">Previous</Button>
                  <Button>Next</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT */}
          <Card className="flex flex-col items-center justify-center text-center">
            <CardContent className="space-y-4 py-16">
              <Handshake className="h-10 w-10 text-muted-foreground mx-auto" />
              <p className="text-muted-foreground">
                Submit your exam to see performance analytics here.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

function Option({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-center space-x-2">
      <RadioGroupItem value={value} id={value} />
      <Label htmlFor={value}>{label}</Label>
    </div>
  );
}
