import React, { useEffect, useState, useCallback } from 'react';
import PixeledNumber from '../PixeledNumber';
import { Section, Container } from './style';
import { addHours, addMinutes } from 'date-fns';
import { Timezone } from '../../pages/Main';

interface ClockProps {
  timezone: Timezone;
}

const Clock: React.FC<ClockProps> = ({ timezone }) => {
  const [hora1, setHora1] = useState(0);
  const [hora2, setHora2] = useState(0);
  const [minuto1, setMinuto1] = useState(0);
  const [minuto2, setMinuto2] = useState(0);
  const [segundo1, setSegundo1] = useState(0);
  const [segundo2, setSegundo2] = useState(0);
  const [date, setDate] = useState('');
  const [t, setT] = useState<number>({} as number);

  const switchMonth = useCallback((month: number) => {
    switch (month) {
      case 0: return 'Janeiro';
      case 1: return 'Fevereiro';
      case 2: return 'Março';
      case 3: return 'Abril';
      case 4: return 'Maio';
      case 5: return 'Junho';
      case 6: return 'Julho';
      case 7: return 'Agosto';
      case 8: return 'Setembro';
      case 9: return 'Outubro';
      case 10: return 'Novembro';
      case 11: return 'Dezembro';
    }
  }, []);

  const switchWeekDay = useCallback((weekDay: number) => {
    switch (weekDay) {
      case 0: return 'Domingo';
      case 1: return 'Segunda-feira';
      case 2: return 'Terça-feira';
      case 3: return 'Quarta-feira';
      case 4: return 'Quinta-feira';
      case 5: return 'Sexta-feira';
      case 6: return 'Sábado';
    }
  }, []);

  useEffect(() => {
    clearInterval(t);

    //Resposta imediata
    const date = addMinutes(addHours(new Date(), timezone.hours), timezone.minutes);
    console.log(date);
    setSegundo1(Math.floor(date.getSeconds() / 10));
    setMinuto1(Math.floor(date.getMinutes() / 10));
    setHora1(Math.floor(date.getHours() / 10));
    setSegundo2(date.getSeconds() % 10);
    setMinuto2(date.getMinutes() % 10);
    setHora2(date.getHours() % 10);
    setDate(switchWeekDay(date.getDay()) + ', ' + date.getDate() + ' de ' + switchMonth(date.getMonth()) + ' de ' + date.getFullYear());

    //Setando intervalo
    setT(setInterval(() => {
      const date = addMinutes(addHours(new Date(), timezone.hours), timezone.minutes);
      console.log(date);
      setSegundo1(Math.floor(date.getSeconds() / 10));
      setMinuto1(Math.floor(date.getMinutes() / 10));
      setHora1(Math.floor(date.getHours() / 10));
      setSegundo2(date.getSeconds() % 10);
      setMinuto2(date.getMinutes() % 10);
      setHora2(date.getHours() % 10);
      setDate(switchWeekDay(date.getDay()) + ', ' + date.getDate() + ' de ' + switchMonth(date.getMonth()) + ' de ' + date.getFullYear());
    }, 1000));

  }, [timezone])

  return (
    <Container>
      <h1>{date}</h1>
      <div>
        <Section>
          <PixeledNumber number={hora1} />
          <PixeledNumber number={hora2} />
        </Section>
        <Section>
          <PixeledNumber number={minuto1} />
          <PixeledNumber number={minuto2} />
        </Section>
        <Section>
          <PixeledNumber number={segundo1} />
          <PixeledNumber number={segundo2} />
        </Section>
      </div>
    </Container>

  )
}

export default Clock;