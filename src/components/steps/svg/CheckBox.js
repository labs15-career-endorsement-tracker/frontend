import React from 'react'

export const CheckBox = () => {
    return (
        <svg width="30" height="30" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="170" height="170" fill="#E5E5E5"/>
        <rect width="170" height="170" rx="5" fill="#453E3E"/>
        <rect x="17" y="17" width="136" height="136" rx="5" fill="#DAE7BF"/>
        <g filter="url(#filter0_i)">
        <line x1="29.9805" y1="93.3924" x2="69.9166" y2="128.862" stroke="#18C61F" stroke-width="15" stroke-linejoin="round"/>
        </g>
        <g filter="url(#filter1_b)">
        <line x1="63.6334" y1="132.708" x2="140.149" y2="37.3075" stroke="#18C61F" stroke-width="15"/>
        </g>
        <defs>
        <filter id="filter0_i" x="25" y="87.7848" width="49.897" height="50.685" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        <filter id="filter1_b" x="53.7828" y="28.6149" width="96.2172" height="112.785" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feGaussianBlur in="BackgroundImage" stdDeviation="2"/>
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur" result="shape"/>
        </filter>
        </defs>
        </svg>
    )
  }