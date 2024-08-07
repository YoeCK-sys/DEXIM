// push.tsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface PushNotificationProps {
  message: string;
}

export default function PushNotification({ message }: PushNotificationProps) {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className="w-full max-w-sm bg-green-500 text-green-50 shadow-lg">
        <CardContent className="flex items-center gap-4 p-4">
          <CircleCheckIcon className="h-6 w-6" />
          <div>
            <p className="text-sm font-medium">{message}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function CircleCheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
