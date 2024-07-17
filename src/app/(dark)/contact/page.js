import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import Navbar from '@/components/Common/Navbar';
import ContactHeader from '@/components/Contact/ContactHeader';
import ContactForm from '@/components/Contact/ContactForm';


export const metadata = {
  title: 'Contact me'
}

export default function ContactPage() {
  return (
    <>
      <Loading />
      <Navbar />
      <div className="main-content">
      <ContactHeader />
      <ContactForm />

      </div>
    </>
  )
}
