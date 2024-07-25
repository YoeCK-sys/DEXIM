"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Dialog from "@/components/component/dialog";
import { authenticateUser } from "@/lib/auth";

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
      setExpiryDate(userExpiryDate || '');  // Asegurar que expiryDate no sea undefined
      setRole(userRole || '');  // Asegurar que role no sea undefined
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
    <div className="flex flex-col w-full min-h-screen bg-background">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <h1 className="text-lg font-semibold">Cheat Sheet</h1>
      </header>
      <main className="flex-1 flex items-center justify-center p-4 md:p-6">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Iniciar Sesión</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium">
                  Usuario
                </label>
                <Input
                  id="username"
                  placeholder="Ingresa tu usuario"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </div>
              <div>
                <label htmlFor="key" className="block text-sm font-medium">
                  Clave
                </label>
                <Input
                  id="key"
                  type="password"
                  placeholder="Ingresa tu clave"
                  value={key}
                  onChange={handleKeyChange}
                />
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <Button className="w-full mt-4" onClick={handleLogin}>
                Iniciar Sesión
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <footer className="bg-muted p-4 text-center text-sm text-muted-foreground">
        <h2 className="text-lg font-semibold mb-2">Cheat Sheet</h2>
        <p>Inicia sesión para activar tus cheats</p>
      </footer>
      {showDialog && (
        <Dialog 
          title="Bienvenido"
          content={`Hola ${username}, tu cuenta es de nivel ${role.toUpperCase()} y expira el ${expiryDate}.`}
          onClose={handleDialogClose}
        />
      )}
    </div>
  );
};
