import * as React from "react";

function IconLatitude(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m0 2c3 0 5.5 1.6 6.9 4H5.1C6.5 5.6 9 4 12 4m0 16c-3 0-5.5-1.6-6.9-4h13.8c-1.4 2.4-3.9 4-6.9 4m-7.7-6c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2h15.5c.2.6.3 1.3.3 2s-.1 1.4-.3 2H4.3z" />
    </svg>
  );
}

export default IconLatitude;
