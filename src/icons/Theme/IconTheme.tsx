import React from 'react'

export const IconTheme = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 21 21"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path xmlns="http://www.w3.org/2000/svg" fill="#000000" fill-rule="evenodd" d="M68,121 C72.9705627,121 77,116.970563 77,112 C77,107.029437 72.9705627,103 68,103 C63.0294373,103 59,107.029437 59,112 C59,116.970563 63.0294373,121 68,121 Z M68,119.8 C72.2313475,119.8 75.8,116.307821 75.8,112 C75.8,108.076069 72.6281738,104.2 68,104.2 L68,119.8 Z" transform="matrix(-1 0 0 1 77 -103)"/>
    </svg>
  );
}