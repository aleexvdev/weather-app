// icon:weather_rain | Linea Iconset https://linea.io/ | Benjamin Sigidi
import * as React from "react";

function IconRainWeather(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M55 40c4.565 0 8-3.435 8-8 0-4.565-3.435-9-8-9 0-11.414-9.586-20-21-20-10.102 0-19.2 6.423-21 16h-2C5.292 19 1 24.292 1 30s4.292 10 10 10h44z"
      />
      <g
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={2}
      >
        <path d="M22 46v14M12 46v14M32 46v14M42 46v14M52 46v14" />
      </g>
    </svg>
  );
}

export default IconRainWeather;