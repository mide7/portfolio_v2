import Link from 'next/link'
import React from 'react'
import SocialLinkAndIcon from '../SocialLinkAndIcon'
import LinkedInSvg from '../svgs/linkedIn'
import LogoSvg from '../svgs/logo'
import TwitterSvg from '../svgs/twitter'

export default function Footer() {
    return (
        <div className='bg-white'>
            {/* NOTE: For small screens */}
            <div className='container mx-auto px-4 py-6 pb-8 space-y-6 sm:hidden'>
                <hr />
                <h2 className='text-center text-gray-400'>Be sure to take a look at our Terms of Use and Privacy Policy</h2>
                <div className='flex gap-6 items-center'>
                    <span className='text-primaryBlue'>Contacts</span>
                    <span className='flex items-center gap-6 w-full'>
                        <SocialLinkAndIcon href={'https://twitter.com/im_haryo'} icon={<TwitterSvg />} linkStyle={"transform scale-150 hover:motion-safe:animate-bounce p-1"} />
                        <SocialLinkAndIcon href={'https://www.linkedin.com/in/ayomide-peter-6440021b0/'} icon={<LinkedInSvg />} linkStyle={"transform scale-110 hover:motion-safe:animate-bounce p-1"} />
                    </span>
                    <span className="self-end">
                        <LogoSvg />
                    </span>
                </div>
            </div>

            {/* NOTE: For big screens */}
            <div className='container mx-auto px-4 py-6 sm:grid grid-cols-3 justify-center  items-center hidden bg-white'>
                <h2 className='text-center text-gray-400'>Be sure to take a look at our Terms of Use and Privacy Policy</h2>

                <Link
                    href={"/"}
                    className="justify-self-center hover:motion-safe:animate-pulse active:motion-safe:animate-pulse"
                >
                    <LogoSvg />
                </Link>

                <div className='flex gap-6 items-center justify-self-end px-4'>
                    <span className='text-primaryBlue'>Contacts</span>
                    <span className='flex items-center gap-6 w-full'>
                        <SocialLinkAndIcon href={'https://twitter.com/im_haryo'} icon={<TwitterSvg />} linkStyle={"transform scale-150 hover:motion-safe:animate-bounce p-1"} />
                        <SocialLinkAndIcon href={'https://www.linkedin.com/in/ayomide-peter-6440021b0/'} icon={<LinkedInSvg />} linkStyle={"transform scale-110 hover:motion-safe:animate-bounce p-1"} />
                    </span>
                </div>

            </div>
        </div>
    )
}
