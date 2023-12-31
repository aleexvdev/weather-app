// icon:wi-celsius | Weather Icons https://erikflowers.github.io/weather-icons/ | Eric Flowers
import * as React from "react";

function IconWiCelsius(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M4.5 10a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm0-2a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM22 10h-2a4 4 0 10-8 0v5a4 4 0 108 0h2a6 6 0 11-12 0v-5a6 6 0 1112 0z" />
    </svg>
  );
}

export default IconWiCelsius;
