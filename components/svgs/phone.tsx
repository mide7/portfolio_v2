import * as React from "react"

const PhoneSvg = (props: any) => (
    <svg
        width={15}
        height={15}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M14.568 11.427c0-.07 0-.14-.03-.211-.07-.211-.563-.432-.764-.532-.572-.322-1.155-.633-1.717-.965-.262-.16-.583-.462-.895-.462-.612 0-1.506 1.818-2.049 1.818-.27 0-.622-.25-.863-.391C6.42 9.668 5.156 8.404 4.14 6.575c-.14-.24-.391-.592-.391-.864 0-.542 1.818-1.436 1.818-2.049 0-.311-.302-.633-.462-.894-.332-.562-.643-1.145-.965-1.717C4.041.85 3.82.358 3.61.287c-.07-.03-.14-.03-.211-.03-.362 0-1.065.16-1.396.312-.492.21-.814.773-1.065 1.225-.321.593-.512 1.195-.512 1.868 0 .934.382 1.778.693 2.632a9.39 9.39 0 0 0 .834 1.758c1.054 1.707 3.113 3.767 4.821 4.821a9.391 9.391 0 0 0 1.758.834c.854.311 1.697.693 2.631.693.673 0 1.276-.19 1.869-.512.452-.251 1.014-.573 1.225-1.065.15-.332.312-1.035.312-1.396Z"
            fill="#0D446C"
            {...props}
        />
    </svg>
)

export default PhoneSvg
