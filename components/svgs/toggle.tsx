import * as React from "react"

const ToggleSvg = (props: any) => (
    <svg
        width={46}
        height={29}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M.112 14.714C.112 22.594 6.518 29 14.398 29H31.54c7.879 0 14.285-6.406 14.285-14.286S39.42.43 31.541.43H14.398C6.518.429.112 6.835.112 14.714ZM31.54 26.143c-6.295 0-11.43-5.134-11.43-11.429 0-6.294 5.135-11.428 11.43-11.428 6.294 0 11.428 5.134 11.428 11.428 0 6.295-5.134 11.429-11.428 11.429Z"
            fill="#0D446C"
            {...props}
        />
    </svg>
)

export default ToggleSvg
