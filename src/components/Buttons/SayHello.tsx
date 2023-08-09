import Link from 'next/link'
import React from 'react'

export default function SayHelloBtn() {
    return (
        <Link href={"/contact"}
            className='capitalize text-primaryBlue border-2 border-primaryBlue hover:bg-primaryBlue hover:text-white font-semibold sm:min-w-[160px] py-2 px-4 text-center rounded-full transition-all duration-500 active:animate-ping'>
            say hello
        </Link>
    )
}
