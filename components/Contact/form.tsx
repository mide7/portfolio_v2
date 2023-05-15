import React, { FormEvent, useRef } from 'react'

export default function ContactForm() {
    const messageRef = useRef<HTMLTextAreaElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const body = {
            message: messageRef.current?.value,
            email: emailRef.current?.value
        }

        try {
            const response = await fetch("/api/contact-me", {
                method: "pos",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })

            if (response.status > 399) {
                throw new Error(response.statusText)
            }

            const { message } = await response.json()

            return alert(message)

        } catch (error: any) {
            alert(error.message)
            console.error(error.message)
        }

    }

    return (
        <form onSubmit={handleSubmit} className='space-y-3 sm:space-y-6'>
            <h1 className='text-primaryBlue font-medium text-2xl sm:text-3xl'>Drop me a message</h1>
            <p className='text-gray-400 text-sm'>Am always looking for a next great project</p>

            <textarea ref={messageRef} name="" id="" rows={5} className="border rounded-md p-3 w-full bg-transparent focus:border-primaryBlue text-gray-400 outline-none transition-all duration-500" placeholder='Your message'></textarea>

            <div className='flex flex-col sm:flex-row gap-6'>
                <input ref={emailRef} type="email" className="border rounded-md sm:rounded-full p-3 w-full bg-transparent focus:border-primaryBlue text-gray-400 outline-none transition-all duration-500 " placeholder='Your email' />

                <button type="submit" className='bg-primaryBlue rounded-full min-h-[3rem] sm:min-w-[160px] font-semibold text-white border-2 border-primaryBlue hover:text-primaryBlue hover:bg-white transition-all duration-500 active:motion-safe:animate-ping'>Send</button>
            </div>
        </form>
    )
}
