import Image from 'next/image'
import React from 'react'
import RW1 from "../../public/images/rw1.png"
import RW2 from "../../public/images/rw2.png"
import RW3 from "../../public/images/rw3.png"

export default function RecentWorks() {
    return (
        <section className='bg-primaryGray'>
            <div className='px-4 py-12 container mx-auto '>
                <h2 className='text-primaryBlue font-medium text-xl text-center'>
                    Some of my recent work
                </h2>

                <div className='flex flex-col md:flex-row gap-6 mt-6'>
                    <div>
                        <Image src={RW1} />
                        <h4 className='font-medium'>Project Title</h4>
                        <h5 className='font-normal'>Web App</h5>
                    </div>

                    <div>
                        <Image src={RW2} />
                        <h4 className='font-medium'>Project Title</h4>
                        <h5 className='font-normal'>Web App</h5>
                    </div>

                    <div>
                        <Image src={RW3} />
                        <h4 className='font-medium'>Project Title</h4>
                        <h5 className='font-normal'>Web App</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}
