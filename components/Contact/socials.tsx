import React from 'react'
import SocialLinkAndIcon from '../SocialLinkAndIcon'
import EnvelopeSvg from '../svgs/envelope'
import LinkedInSvg from '../svgs/linkedIn'
import PhoneSvg from '../svgs/phone'
import TwitterSvg from '../svgs/twitter'

export default function ContactSocials() {
    return (
        <div className='space-y-6'>
            <h1 className='text-primaryBlue font-medium text-2xl sm:text-3xl'>Get in Touch with Me</h1>
            <p className='text-gray-400 text-sm'>We appreciate each customer and we are proud that 60% of clients come back to work with us again.</p>
            <SocialLinkAndIcon href={'tel:+2348130542804'} title={"+234 813 054 2804"} icon={<PhoneSvg />} linkStyle={"font-medium active:motion-safe:animate-ping"} />
            <SocialLinkAndIcon href={'mailto:info@ayomidepeter.com'} title={"info@ayomidepeter.com"} icon={<EnvelopeSvg />} linkStyle={"font-medium active:motion-safe:animate-ping"} />
            <hr />
            <h2 className='text-primaryBlue font-medium text-xl'>Am on Socials</h2>
            <div className='grid grid-cols-2 items-center'>
                <SocialLinkAndIcon href={'https://twitter.com/im_haryo'} icon={<TwitterSvg />} title={"Twitter"} linkStyle={"font-medium active:motion-safe:animate-ping text-gray-500 hover:text-gray-400 flex"} />
                <SocialLinkAndIcon href={'https://www.linkedin.com/in/ayomide-peter-6440021b0/'} icon={<LinkedInSvg />} title={"LinkedIn"} linkStyle={"font-medium active:motion-safe:animate-ping text-gray-500 hover:text-gray-400"} />
            </div>
        </div>
    )
}
