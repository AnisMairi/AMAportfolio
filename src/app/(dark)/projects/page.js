import React from 'react';
//= Page components
import Services from '@/components/Services/Services5';
import Navbar from '@/components/Common/Navbar';
import Works5 from '@/components/Works/Works5';
import Network from '@/components/Blogs/Network';
import ContactForm from '@/components/Contact/ContactFormS';

export const metadata = {
  title: 'AMA - Projects'
}

export default function Works5Page() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Works5 grid={2} hideFilter={true} filterPosition="center" />
      </div>
      <ContactForm noLine />
    </>
  )
}

