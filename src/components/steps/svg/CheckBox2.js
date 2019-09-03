import React from 'react'


export const CheckBox2 = () => {
    return (
        <svg className='check-line' width="40" height="40" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect id="Rectangle 3" width="170" height="170" fill="#E5E5E5"/>
            <rect id="Rectangle 2" width="170" height="170" rx="5" fill="#5A5F5D"/>
            <rect id="Rectangle" x="17" y="17" width="136" height="136" rx="5" fill="#B0FADF"/>
            <g className="" id="Line" filter="url(#filter0_i)">
            <line id="Line" x1="29.9805" y1="93.3924" x2="69.9166" y2="128.862" stroke="#18C61F" strokeWidth="15" strokeLinejoin="round"/>
            </g>
            <g id="Line 2" filter="url(#filter1_b)">
            <line x1="63.6334" y1="132.708" x2="140.149" y2="37.3075" stroke="#18C61F" strokeWidth="15"/>
            </g>
            <defs>
            <filter id="filter0_i" x="25" y="87.7848" width="49.897" height="50.685" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
            </filter>
            <filter id="filter1_b" x="53.7828" y="28.6149" width="96.2172" height="112.785" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImage" stdDeviation="2"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur" result="shape"/>
            </filter>
            </defs>
        </svg>
    )
}



