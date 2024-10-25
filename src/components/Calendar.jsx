import { useState } from 'react';
import {Calendar as Calendario} from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Importa los estilos del calendario
import { Card } from 'react-bootstrap'; // Importa Card de react-bootstrap

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <Card className="p-4">
      <Card.Title className="text-center">Calendario</Card.Title>
      <Calendario
        onChange={handleDateChange}
        value={date}
        className="mx-auto" // Centra el calendario
      />
      <div className="text-center mt-3">
        <p>Fecha seleccionada: {date.toLocaleDateString()}</p>
      </div>
    </Card>
  );
};

export default Calendar;
