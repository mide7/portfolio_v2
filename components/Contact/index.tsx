import React from 'react'
import ContactForm from './form'
import ContactSocials from './socials'

export default function Contact() {
    return (
        <div className='md:grid md:grid-cols-2 space-y-12 md:space-y-0 sm:gap-12 container mx-auto px-4 pt-8 sm:pt-12 min-h-[calc(100vh-230px)] sm:min-h-[calc(100vh-150px)]'>
            <ContactForm />
            <ContactSocials />
        </div>
    )
}
