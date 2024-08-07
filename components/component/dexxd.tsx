"use client";

import React, { useState } from "react";
import Accordion from "./Accordion";
import { Card, CardHeader } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function XDXD() {
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleSwitchChange = (option: string, isChecked: boolean) => {
    console.log(`Switch for ${option} is now ${isChecked ? 'ON' : 'OFF'}`); // Log for debugging
    if (isChecked) {
      toast.success(`Activated: ${option}`);
    } else {
      toast.info(`Deactivated: ${option}`);
    }
  };

  const accordionData = [
    {
      title: "AimBot Free",
      content: (
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-800 bg-opacity-70 rounded-lg shadow-md backdrop-blur-lg">
            <span className="text-sm font-medium text-white">AimBot 5%</span>
            <Switch id="aimbot" onCheckedChange={(checked) => handleSwitchChange("AimBot 5%", checked)} />
          </div>
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-800 bg-opacity-70 rounded-lg shadow-md backdrop-blur-lg">
            <span className="text-sm font-medium text-white">Dex Anti-Ban</span>
            <Switch id="dex-antiban" onCheckedChange={(checked) => handleSwitchChange("Dex Anti-Ban", checked)} />
          </div>
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-800 bg-opacity-70 rounded-lg shadow-md backdrop-blur-lg">
            <span className="text-sm font-medium text-white">No recoil 3%</span>
            <Switch id="no-recoil" onCheckedChange={(checked) => handleSwitchChange("No recoil 3%", checked)} />
          </div>
        </div>
      )
    },
    // Add other sections here
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-to-r from-gray-900 to-black text-white">
      <header className="flex items-center h-16 px-4 border-b border-gray-700 shrink-0 md:px-6">
        <h1 className="text-lg font-semibold">AetherX</h1>
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
      <ToastContainer /> {/* Agrega el ToastContainer para mostrar notificaciones */}
    </div>
  );
}

