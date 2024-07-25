// auth.ts
import users from './users.json';
import { parseISO, isBefore } from 'date-fns';
import { getCurrentServerTime } from './time';

interface User {
  username: string;
  key: string;
  expiryDate: string;
  role: string; // Añadido el campo role
}

interface AuthParams {
  username: string;
  key: string;
}

export const authenticateUser = async ({ username, key }: AuthParams) => {
  const user = (users as User[]).find((user: User) => user.username === username && user.key === key);
  
  if (user) {
    try {
      const currentDate = await getCurrentServerTime();
      const expiryDate = parseISO(user.expiryDate);

      if (isNaN(currentDate.getTime()) || isNaN(expiryDate.getTime())) {
        return { authenticated: false, error: "Error en la verificación de fechas" };
      }

      if (isBefore(currentDate, expiryDate)) {
        return { authenticated: true, error: null, role: user.role, expiryDate: user.expiryDate };
      } else {
        return { authenticated: false, error: "La cuenta ha expirado" };
      }
    } catch (error) {
      return { authenticated: false, error: "Error en el proceso de autenticación" };
    }
  }

  return { authenticated: false, error: "Usuario o clave incorrecta" };
};
