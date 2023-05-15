import * as React from "react"

const CircleFilledSvg = (props: any) => (
    <svg
        width={8}
        height={8}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <circle cx={4} cy={4} r={3.5} fill="#0D446C" stroke="#0D446C" />
    </svg>
)

export default CircleFilledSvg
