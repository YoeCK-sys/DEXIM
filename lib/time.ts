// time.ts
export const getCurrentServerTime = async (): Promise<Date> => {
  try {
    const response = await fetch('http://worldtimeapi.org/api/timezone/Etc/UTC');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const date = new Date(data.utc_datetime);

    // Verifica si la fecha es válida
    if (isNaN(date.getTime())) {
      throw new Error('Invalid date from API');
    }

    return date;
  } catch (error) {
    console.error('Error fetching server time:', error);
    return new Date(); // Devolver una fecha por defecto en caso de error
  }
};
