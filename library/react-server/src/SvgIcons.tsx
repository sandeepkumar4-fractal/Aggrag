import React, { forwardRef } from "react";
type PropsType = {
  color?: any;
};

export const CopyIcon = (props: PropsType) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5 16.5L19.5 4.5L18.75 3.75H9L8.25 4.5L8.25 7.5L5.25 7.5L4.5 8.25V20.25L5.25 21H15L15.75 20.25V17.25H18.75L19.5 16.5ZM15.75 15.75L15.75 8.25L15 7.5L9.75 7.5V5.25L18 5.25V15.75H15.75ZM6 9L14.25 9L14.25 19.5L6 19.5L6 9Z"
        fill={props.color ? props.color : "#000"}
      />
    </svg>
  );
};

export const BinIcon = (props: PropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="18px"
      height="18px"
      fill={props.color ? props.color : "#000"}
    >
      <path d="M 28 9 C 26.895 9 26 9.895 26 11 L 26 12 L 14 12 C 12.896 12 12 12.896 12 14 C 12 15.104 12.896 16 14 16 L 15 16 L 15 46 C 15 49.309 17.691 52 21 52 L 43 52 C 46.309 52 49 49.309 49 46 L 49 16 L 50 16 C 51.104 16 52 15.104 52 14 C 52 12.896 51.104 12 50 12 L 38 12 L 38 11 C 38 9.895 37.105 9 36 9 L 28 9 z M 19 16 L 45 16 L 45 46 C 45 47.103 44.103 48 43 48 L 21 48 C 19.897 48 19 47.103 19 46 L 19 16 z M 23.5 20 C 22.672 20 22 20.671 22 21.5 L 22 42.5 C 22 43.329 22.672 44 23.5 44 C 24.328 44 25 43.329 25 42.5 L 25 21.5 C 25 20.671 24.328 20 23.5 20 z M 32 20 C 30.896 20 30 20.896 30 22 L 30 42 C 30 43.104 30.896 44 32 44 C 33.104 44 34 43.104 34 42 L 34 22 C 34 20.896 33.104 20 32 20 z M 40.5 20 C 39.672 20 39 20.671 39 21.5 L 39 42.5 C 39 43.329 39.672 44 40.5 44 C 41.328 44 42 43.329 42 42.5 L 42 21.5 C 42 20.671 41.328 20 40.5 20 z" />
    </svg>
  );
};

export const LockIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5555 8.88889H14.9999V6.11111C14.9999 3.36806 12.743 1.11111 9.99995 1.11111C7.22217 1.11111 4.99995 3.36806 4.99995 6.11111V8.88889H4.44439C3.19439 8.88889 2.22217 9.86111 2.22217 11.1111V16.6667C2.22217 17.8819 3.19439 18.8889 4.44439 18.8889H15.5555C16.7708 18.8889 17.7777 17.8819 17.7777 16.6667V11.1111C17.7777 9.89584 16.7708 8.88889 15.5555 8.88889ZM7.22217 6.11111C7.22217 4.58334 8.43745 3.33334 9.99995 3.33334C11.5277 3.33334 12.7777 4.58334 12.7777 6.11111V8.88889H7.22217V6.11111Z"
        fill="#393939"
      />
    </svg>
  );
};

export const TickMark = () => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" stroke="#1C274C" strokeWidth="1.5" />
      <path
        d="M8.5 12.5L10.5 14.5L15.5 9.5"
        stroke="#1C274C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const Chevron = forwardRef<any, any>((props, ref) => (
  <svg
    {...props}
    ref={ref}
    width="20px"
    height="20px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9999 13.9394L17.4696 8.46973L18.5303 9.53039L11.9999 16.0607L5.46961 9.53039L6.53027 8.46973L11.9999 13.9394Z"
      fill="#54a2e8"
    />
  </svg>
));

Chevron.displayName = "Chevron";
