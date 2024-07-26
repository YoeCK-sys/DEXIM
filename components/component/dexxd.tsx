"use client";

import * as React from "react";
import { useState } from "react";
import Accordion from "./Accordion"; // Asegúrate de que la ruta sea correcta
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

const accordionData = [
  {
    title: "AimBot Free",
    content: (
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow-md">
          <span className="text-sm font-medium text-white">AimBot 5%</span>
          <Switch id="god-mode" />
        </div>
        <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow-md">
          <span className="text-sm font-medium text-white">Dex Anti-Ban</span>
          <Switch id="infinite-ammo" />
        </div>
        <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow-md">
          <span className="text-sm font-medium text-white">No recoil 3%</span>
          <Switch id="unlock-all-levels" />
        </div>
      </div>
    )
  },
  {
    title: "Mods",
    content: (
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow-md">
          <span className="text-sm font-medium text-white">SOON</span>
          <Switch id="unlimited-health" />
        </div>
        <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow-md">
          <span className="text-sm font-medium text-white">SOON</span>
          <Switch id="increased-damage" />
        </div>
        <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow-md">
          <span className="text-sm font-medium text-white">SOON</span>
          <Switch id="faster-movement" />
        </div>
      </div>
    )
  },
  {
    title: "Secrets",
    content: (
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow-md">
          <span className="text-sm font-medium text-white">SOON</span>
          <Switch id="unlock-hidden-levels" />
        </div>
        <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow-md">
          <span className="text-sm font-medium text-white">SOON</span>
          <Switch id="reveal-all-collectibles" />
        </div>
        <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow-md">
          <span className="text-sm font-medium text-white">SOON</span>
          <Switch id="activate-developer-mode" />
        </div>
      </div>
    )
  }
];

export function XDXD() {
  const [expanded, setExpanded] = useState<false | number>(0);

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-900 text-white">
      <header className="flex items-center h-16 px-4 border-b border-gray-700 shrink-0 md:px-6">
        <h1 className="text-lg font-semibold">Dex Exploit</h1>
      </header>
      <main className="flex-1 overflow-auto p-4">
        <div className="space-y-4">
          {accordionData.map((item, index) => (
            <Card key={index} className="bg-gray-800 text-white">
              <CardHeader>
                <Accordion
                  i={index}
                  expanded={expanded}
                  setExpanded={setExpanded}
                  title={item.title}
                  content={item.content}
                />
              </CardHeader>
            </Card>
          ))}
        </div>
      </main>
      <footer className="bg-gray-800 p-4 text-center text-sm text-gray-400">
        <h2 className="text-lg font-semibold mb-2">Dex Exploit</h2>
        <p>Footer content here</p>
      </footer>
    </div>
  );
}
