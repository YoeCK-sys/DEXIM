"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Dialog from "@/components/component/dialog";
import { authenticateUser } from "@/lib/auth";
import { AnimatePresence } from 'framer-motion';

export const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [key, setKey] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [expiryDate, setExpiryDate] = useState<string>('');
  const [role, setRole] = useState<string>('');
  const router = useRouter();

  const handleLogin = async () => {
    const { authenticated, error: authError, role: userRole, expiryDate: userExpiryDate } = await authenticateUser({ username, key });

    if (authenticated) {
      setExpiryDate(userExpiryDate || '');
      setRole(userRole || '');
      setShowDialog(true);
    } else {
      setError(authError ?? 'Error desconocido');
    }
  };

  const handleDialogClose = () => {
    setShowDialog(false);
    if (role === 'free') {
      router.push('/free');
    } else if (role === 'vip') {
      router.push('/page3');
    } else if (role === 'ultimate') {
      router.push('/page4');
    }
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKey(e.target.value);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-to-r from-gray-900 to-black text-white">
      <header className="flex items-center h-16 px-4 border-b border-gray-700 shrink-0 md:px-6">
        <h1 className="text-lg font-semibold">Dex Exploit</h1>
      </header>
      <main className="flex-1 flex items-center justify-center p-4 md:p-6">
        <Card className="w-full max-w-md bg-gray-900 bg-opacity-10 border border-gray-700 text-white backdrop-blur-lg">
          <CardHeader>
            <CardTitle>Iniciar Sesión</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex flex-col">
                <label htmlFor="username" className="text-sm font-medium mb-1 text-white">
                  Usuario
                </label>
                <Input
                  id="username"
                  placeholder="Ingresa tu usuario"
                  value={username}
                  onChange={handleUsernameChange}
                  className="bg-gray-700 bg-opacity-50 text-white placeholder-gray-400 border border-gray-600 rounded-md py-2 px-3 text-base"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="key" className="text-sm font-medium mb-1 text-white">
                  Clave
                </label>
                <Input
                  id="key"
                  type="password"
                  placeholder="Ingresa tu clave"
                  value={key}
                  onChange={handleKeyChange}
                  className="bg-gray-700 bg-opacity-50 text-white placeholder-gray-400 border border-gray-600 rounded-md py-2 px-3 text-base"
                />
              </div>
              {error && <p className="text-red-400 mt-2">{error}</p>}
              <Button className="w-full mt-4 bg-green-500 hover:bg-green-600" onClick={handleLogin}>
                Iniciar Sesión
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <AnimatePresence>
        {showDialog && (
          <Dialog 
            title="Bienvenido"
            content={`Hola ${username}, tu cuenta es de nivel ${role.toUpperCase()} y expira el ${expiryDate}.`}
            onClose={handleDialogClose}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

