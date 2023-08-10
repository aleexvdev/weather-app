import React from 'react'

export const IconPrecipitationStatus = (props: React.SVGProps<SVGSVGElement>) => {
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
        d="M18 40h-7C5.292 40 1 35.708 1 30s4.292-11 10-11h2C14.8 9.423 23.898 3 34 3c11.414 0 21 8.586 21 20 4.565 0 8 4.435 8 9s-3.435 8-8 8H45"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M23 42c0 5.034 4.136 8 9 8s8-2.966 8-8c0-7-8-17-8-17s-9 10-9 17z"
      />
    </svg>
  );
}

export const IconPrecipitationRain = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M12.7 1.088L12 0l-.7 1.088c-.751 1.168-7.342 11.525-7.342 15.366C3.958 20.615 7.565 24 12 24s8.042-3.385 8.042-7.546c0-3.84-6.591-14.197-7.342-15.366zM12 22.335c-3.516 0-6.377-2.638-6.377-5.881C5.623 13.908 9.732 6.756 12 3.1c2.268 3.656 6.377 10.809 6.377 13.355 0 3.242-2.861 5.88-6.377 5.88zm4.957-6.017c0 2.548-2.22 4.615-4.957 4.615-2.737 0-4.957-2.067-4.957-4.615 0-.163.021-.347.058-.549 0 0 1.306-2.616 4.847 0 2.999 2.215 4.95 0 4.95 0 .038.202.059.386.059.549z" />
    </svg>
  );
}

export const IconPrecipitationSnow = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M8 16a.5.5 0 01-.5-.5v-1.293l-.646.647a.5.5 0 01-.707-.708L7.5 12.793V8.866l-3.4 1.963-.496 1.85a.5.5 0 11-.966-.26l.237-.882-1.12.646a.5.5 0 01-.5-.866l1.12-.646-.884-.237a.5.5 0 11.26-.966l1.848.495L7 8 3.6 6.037l-1.85.495a.5.5 0 01-.258-.966l.883-.237-1.12-.646a.5.5 0 11.5-.866l1.12.646-.237-.883a.5.5 0 11.966-.258l.495 1.849L7.5 7.134V3.207L6.147 1.854a.5.5 0 11.707-.708l.646.647V.5a.5.5 0 111 0v1.293l.647-.647a.5.5 0 11.707.708L8.5 3.207v3.927l3.4-1.963.496-1.85a.5.5 0 11.966.26l-.236.882 1.12-.646a.5.5 0 01.5.866l-1.12.646.883.237a.5.5 0 11-.26.966l-1.848-.495L9 8l3.4 1.963 1.849-.495a.5.5 0 01.259.966l-.883.237 1.12.646a.5.5 0 01-.5.866l-1.12-.646.236.883a.5.5 0 11-.966.258l-.495-1.849-3.4-1.963v3.927l1.353 1.353a.5.5 0 01-.707.708l-.647-.647V15.5a.5.5 0 01-.5.5z" />
    </svg>
  );
}