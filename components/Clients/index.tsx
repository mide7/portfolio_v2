import React from 'react'
import clientsSvg from "../../public/svgs/clients-lg.svg"
import Image from 'next/image'

export default function Clients() {
    return (
        <section className='px-4 py-12 container mx-auto space-y-6'>
            <h2 className='text-primaryBlue font-medium text-xl text-center'>
                Our Clients
            </h2>
            <div className='w-full text-center '>
                <Image src={clientsSvg} alt={"clients"} />
            </div>
        </section>
    )
}
