"use client"


import ContactForm from '@/components/contact-form'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { useState } from 'react'

export default function Contact() {
  return (
    <>
    <Header />
    <section className='py-24 mt-10'>
      <div className='container'>
      <p className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Contact Us
              </p>
              <p className="mt-6  text-center text-sm leading-8 text-gray-600 sh-contact">
              Contact Ace C&M today to learn more about our services and how we can help you maintain a clean, safe, and functional property. 
              </p><br/>
        <ContactForm />
      </div>
    </section>
    <Footer />
    </>
  )
}
