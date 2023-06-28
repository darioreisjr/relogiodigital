import  { useState, useEffect } from 'react';

export default function App() {

  const data = new Date()
  const horas = data.getHours()
  const minutos = data.getMinutes()
  const segundos = data.getSeconds()


  const [hora, setHora] = useState(horas);
  const [minuto, setMinuto] = useState(minutos);
  const [segundo, setSegundo] = useState(segundos);

  useEffect(() => {
    const interval = setInterval(() => {
      setSegundo(segundo + 1);
      if (segundo == 59) {
        setSegundo(0);
        setMinuto(minuto + 1);
        if (minuto == 59) {
          setMinuto(0);
          setHora(hora + 1);
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
   <section className='h-screen flex flex-col justify-center items-center bg-gray-950'>
    <h1 className='text-gray-200 p-3 text-4xl'>RELÓGIO DIGITAL</h1>

    <div className='flex items-center gap-2'>
      <div className='flex justify-center items-center rounded-lg'>
          <h2 className='text-4xl text-gray-200 bg-gray-800  p-14  justify-center items-center'>{hora}</h2>
        </div>
        <div className='flex justify-center items-center'>
          <h2 className='text-4xl text-gray-200 bg-gray-800 p-14  justify-center items-center'>
          {minuto <= 9 ? `0${minuto}` : `${minuto}` }
          </h2>
        </div>
        <div className='flex justify-center items-center'>
          <h2 className='text-4xl text-gray-200 bg-gray-800  p-14 rounded-lg justify-center items-center'>
          {segundo <= 9 ? `0${segundo}` : `${segundo}` }
          </h2>
        </div>
    </div>
   </section>
  );
}
