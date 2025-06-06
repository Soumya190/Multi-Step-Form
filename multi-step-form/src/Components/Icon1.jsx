function Icon1(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 40 40"
      className={props.className}
    >
      <g fill="none" fill-rule="evenodd">
        <circle cx="20" cy="20" r="20" fill="#FFAF7E" />
        <path
          fill="#FFF"
          fill-rule="nonzero"
          d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z"
        />
      </g>
    </svg>
  );
}

export default Icon1;
