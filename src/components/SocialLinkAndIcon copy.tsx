import React from 'react'

interface Iprops {
    href: string
    icon: JSX.Element
    title?: string
    linkStyle?: string
}

export default function SocialLinkAndIcon({ href, icon, title, linkStyle }: Iprops) {
    return (
        <a
            href={href}
            target="_blank"
            className={`flex gap-3 items-center text-primaryBlue hover:text-[#0d446cbe]  first:fill-primaryBlue fill-primaryBlue icon-links transition-all duration-500 ${linkStyle && linkStyle}`} rel="noreferrer">
            {icon}
            {title && <span>{title}</span>}
        </a >
    )
}
