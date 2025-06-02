import React from 'react';
import ContactForm from '../components/ContactForm';
import '../styles/ContactMe.css'

const ContactMe: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center py-12">
      <div className="container mx-auto px-16 mt-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Contact Me</h1>
          <hr className="my-4 max-w-[150px] mx-auto border-secondary border-2" />
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactMe; 