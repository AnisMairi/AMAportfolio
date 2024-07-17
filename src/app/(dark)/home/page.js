import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import Navbar from '@/components/Common/Navbar';
import FreelanceHeader from '@/components/Headers/FreelanceHeader';
import Services from '@/components/Services/Services5';
import Works from '@/components/Works/Works5';
import Network from '@/components/Blogs/Network';
import ContactForm from '@/components/Contact/ContactFormS';


export const metadata = {
  title: 'Anis Maïri Portfolio'
}

export default function Home7() {
  return (
    <>
      <Loading />
      <Navbar />
      <FreelanceHeader />
      <Services />
      <Works />
      <Network />
      <ContactForm noLine />
    </>
  )
}