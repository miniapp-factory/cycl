"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function SleepCycle() {
  const [sleepStart, setSleepStart] = useState<Date | null>(null);
  const [sleepEnd, setSleepEnd] = useState<Date | null>(null);
  const [duration, setDuration] = useState<string>("");

  const startSleep = () => {
    setSleepStart(new Date());
    setSleepEnd(null);
    setDuration("");
  };

  const endSleep = () => {
    const end = new Date();
    setSleepEnd(end);
    if (sleepStart) {
      const diffMs = end.getTime() - sleepStart.getTime();
      const hours = Math.floor(diffMs / 3600000);
      const minutes = Math.floor((diffMs % 3600000) / 60000);
      setDuration(`${hours}h ${minutes}m`);
    }
  };

  useEffect(() => {
    if (sleepStart && sleepEnd) {
      // Persist or process the sleep data here if needed
    }
  }, [sleepStart, sleepEnd]);

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Sleep Cycle Tracker</CardTitle>
        <CardDescription>
          Record when you go to bed and when you wake up to see how long you slept.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex justify-between">
          <span>Start:</span>
          <span>{sleepStart ? sleepStart.toLocaleTimeString() : "Not started"}</span>
        </div>
        <div className="flex justify-between">
          <span>End:</span>
          <span>{sleepEnd ? sleepEnd.toLocaleTimeString() : "Not ended"}</span>
        </div>
        <div className="flex justify-between">
          <span>Duration:</span>
          <span>{duration || "N/A"}</span>
        </div>
        <div className="flex gap-2">
          <Button onClick={startSleep} variant="outline">
            Start Sleep
          </Button>
          <Button onClick={endSleep} variant="outline">
            End Sleep
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
