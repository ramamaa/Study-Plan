import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface DemoCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export function DemoCard({
  title,
  description,
  icon: Icon,
  href,
}: DemoCardProps) {
  return (
    <Card className="w-full max-w-sm">
      <CardContent className="p-6 space-y-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
          <Icon className="h-5 w-5 text-blue-600" />
        </div>

        <div className="space-y-1">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>

        <Button asChild className="w-fit">
          <a href={href}>Open Demo</a>
        </Button>
      </CardContent>
    </Card>
  );
}
