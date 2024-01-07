
// components/About.js
'use client'
import React from 'react';
import Link from 'next/link';
import { footerLinks } from '@constants';

const About = () => {
  const aboutLinks = footerLinks.find((section) => section.title === 'About');

  return (
    <div>
       About
    </div>
  );
};

export default About;
