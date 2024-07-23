// auth.ts
import users from './users.json';
import { parseISO, isBefore } from 'date-fns';
import { getCurrentServerTime } from './time';

interface User {
  username: string;
  key: string;
  expiryDate: string;
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

      // Verifica y muestra valores
      console.log('Current Date:', currentDate.toISOString());
      console.log('Expiry Date:', expiryDate.toISOString());
      console.log('User Expiry Date from JSON:', user.expiryDate);

      // Verifica si currentDate y expiryDate son válidas
      if (isNaN(currentDate.getTime()) || isNaN(expiryDate.getTime())) {
        console.error('Invalid date value');
        return { authenticated: false, error: "Error en la verificación de fechas" };
      }

      if (isBefore(currentDate, expiryDate)) {
        console.log('Account is still valid.');
        return { authenticated: true, error: null };
      } else {
        console.log('Account has expired.');
        return { authenticated: false, error: "La cuenta ha expirado" };
      }
    } catch (error) {
      console.error('Error while authenticating user:', error);
      return { authenticated: false, error: "Error en el proceso de autenticación" };
    }
  }

  return { authenticated: false, error: "Usuario o clave incorrecta" };
};
