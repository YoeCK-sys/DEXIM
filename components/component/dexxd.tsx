"use client";

import React, { useState, useRef } from "react";
import Accordion from "./Accordion";
import { Card, CardHeader } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";


const accordionData = [
  {
    title: "AimBot Free",
    content: (
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-800 bg-opacity-70 rounded-lg shadow-md backdrop-blur-lg">
          <span className="text-sm font-medium text-white">AimBot 5%</span>
          <Switch id="god-mode" />
        </div>
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-800 bg-opacity-70 rounded-lg shadow-md backdrop-blur-lg">
          <span className="text-sm font-medium text-white">Dex Anti-Ban</span>
          <Switch id="infinite-ammo" />
        </div>
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-800 bg-opacity-70 rounded-lg shadow-md backdrop-blur-lg">
          <span className="text-sm font-medium text-white">No recoil 3%</span>
          <Switch id="unlock-all-levels" />
        </div>
      </div>
    )
  },
  // Agrega las otras secciones aquí
];

export function XDXD() {
  const [expanded, setExpanded] = useState<number | false>(false);

  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-to-r from-gray-900 to-black text-white">
      <header className="flex items-center h-16 px-4 border-b border-gray-700 shrink-0 md:px-6">
      <h1 className="text-lg font-semibold">AetherX </h1>
      <img src="logoxs.png" alt="AetherX Logo" className="h-14 mr-4" />
      </header>
      <main className="flex-1 overflow-auto p-4">
        <div className="space-y-4">
          {accordionData.map((item, index) => (
            <Card key={index} className="bg-gray-800 bg-opacity-0 text-white backdrop-blur-lg border-none">
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
    </div>
  );
}
