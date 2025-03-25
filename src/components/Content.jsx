import React from 'react';
import Section from "./Section";
import TrustedByManySection from '../sections/TrustedByManySection';
import OurJobSection from '../sections/OurJobSection';
import AboutUsSection from '../sections/AboutUsSection';
import Reasons from '../sections/Reasons';

const Content = () => {
  return (
    <div className='Content'>
    <Section delay={0}><AboutUsSection /></Section>
    <Section delay={0.2}><OurJobSection /></Section>
    <Section delay={0.2}><TrustedByManySection /></Section>
      <Section delay={0.}><h2>Pourquoi Nous Choisir ?</h2>
      <Reasons/></Section>
    </div>
  );
};

export default Content;