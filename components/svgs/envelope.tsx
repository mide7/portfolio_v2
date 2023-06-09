import * as React from "react"

const EnvelopeSvg = (props: any) => (
    <svg
        width={19}
        height={15}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M18.5 5.103a5.915 5.915 0 0 1-1.005.874c-1.677 1.135-3.364 2.28-5.002 3.465-.843.623-1.888 1.387-2.983 1.387h-.02c-1.095 0-2.14-.764-2.983-1.387-1.638-1.195-3.325-2.33-4.992-3.465A5.617 5.617 0 0 1 .5 5.103v7.976c0 .883.723 1.607 1.607 1.607h14.786c.884 0 1.607-.723 1.607-1.607V5.103Zm0-2.953c0-.884-.733-1.607-1.607-1.607H2.107C1.032.543.5 1.387.5 2.37c0 .914 1.015 2.05 1.728 2.531 1.557 1.085 3.134 2.17 4.69 3.265.653.452 1.758 1.376 2.572 1.376h.02c.814 0 1.919-.924 2.572-1.376 1.556-1.095 3.133-2.18 4.7-3.265.884-.612 1.718-1.627 1.718-2.752Z"
            fill="#0D446C"
            {...props}
        />
    </svg>
)

export default EnvelopeSvg
