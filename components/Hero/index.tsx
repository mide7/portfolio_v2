import Image from 'next/image'
import React from 'react'
import Memoji from "../../public/images/Memoji.png"
import BrushSvg from '../svgs/brush'
import CodeSvg from '../svgs/code'
import MemojiSvg from '../svgs/memoji'
import ToggleSvg from '../svgs/toggle'

export default function Hero() {
    return (
        <div className='px-4 py-12 container mx-auto'>
            <h1 className='text-primaryBlue font-medium text-2xl text-center'>
                Hi, I’m Ayo. Nice to meet you?
            </h1>
            <p className='text-center px-6 mt-3 text-base'>
                I design and code beautifully simple things, and I love what I do.
            </p>

            <div className='relative mt-12 w-[150px] h-[150px] rounded-full bg-primaryBlue mx-auto'>
                <span className="absolute -top-10 md:top-0 transform w-full">
                    <MemojiSvg />
                </span>
            </div>

            <h2 className='text-primaryBlue font-medium text-xl text-center mt-12'>Full Stack Developer & Mentor</h2>
            <p className='text-center px-6 mt-3 text-base text-gray-400'>
                We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.
            </p>


            <div className='mt-12 flex flex-col md:flex-row gap-6'>
                <div className='border border-gray-300 rounded-md px-3 py-6 space-y-3'>
                    <BrushSvg className="mx-auto" />
                    <h3 className='text-primaryBlue font-normal text-xl text-center'>New Design</h3>
                    <p className='text-center px-6 mt-3 text-base text-gray-400'>
                        Carefully crafted precise design, with harmonious typography and perfect padding around every component
                    </p>
                </div>

                <div className='border border-gray-300 rounded-md px-3 py-6 space-y-3'>
                    <CodeSvg className="mx-auto" />
                    <h3 className='text-primaryBlue font-normal text-xl text-center'>New Code</h3>
                    <p className='text-center px-6 mt-3 text-base text-gray-400'>
                        Built with HTML, CSS and JS. Startup’s code is easy to under-stand and easy to change. No other frameworks needed.
                    </p>
                </div>

                <div className='border border-gray-300 rounded-md px-3 py-6 space-y-3'>
                    <ToggleSvg className="mx-auto" />
                    <h3 className='text-primaryBlue font-normal text-xl text-center'>New Character</h3>
                    <p className='text-center px-6 mt-3 text-base text-gray-400'>
                        Transform your ideas into reality and launch a beautiful site with minimal frustration.
                    </p>
                </div>
            </div>
        </div>
    )
}
