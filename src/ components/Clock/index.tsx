import React from 'react';
import PixeledNumber from '../PixeledNumber';
import { Section } from './style';

const Clock: React.FC = () => {

  return (
    <>
      <Section>
        <PixeledNumber type='hora1' />
        <PixeledNumber type='hora2' />
      </Section>
      <Section>
        <PixeledNumber type='minuto1' />
        <PixeledNumber type='minuto2' />
      </Section>
      <Section>
        <PixeledNumber type='segundo1' />
        <PixeledNumber type='segundo2' />
      </Section>
    </>
  )
}

export default Clock;