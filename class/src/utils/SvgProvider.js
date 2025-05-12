export const RefreshIcon = ({ size = 24, color = "#333333" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path
      d="M17.65 6.35C16.2 4.9 14.2 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 10h7V3l-2.35 3.35z"
      fill={color}
    />
  </svg>
);

export const HomeIcon = ({size = 24}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 10.25V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V10.25C21 9.93524 20.8518 9.63885 20.6 9.45L12.6 3.45C12.2466 3.17667 11.7534 3.17667 11.4 3.45L3.4 9.45C3.14819 9.63885 3 9.93524 3 10.25Z"
      fill="currentColor"
    />
  </svg>
);

export const BookIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="26" height="26" fill="url(#pattern0_1016_4599)" />
    <defs>
      <pattern
        id="pattern0_1016_4599"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_1016_4599" transform="scale(0.01)" />
      </pattern>
      <image
        id="image0_1016_4599"
        width="100"
        height="100"
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB+UlEQVR4nO3dsY5MYRiH8SfcAaHbDW5AR6LZ2USro6LWKnVEsxGFaGh1Gq4AiStwCXQUrkDE7isnM2IVe7banf/3zvNL3v7L9+yZL3Mmew5IkiRJkiRJOuwicAd4ADxsONuj5L4BfAT2gWo8C8KdBV4EbFQZBM4A7wI2qQyy9CRgg8ogS5eBnwEbVAZZenXMRnxZHfIfBp0a6VCfzo7vRyz4B7DD+GqkIFszC75LDzVSkGszCz5HDzVSkMXMgrsog2QxSBiDhDFIGIOE2aggz1bf5Nc9b2bWuFFBXgfck5rm08waDYJBvELwCvEj6yR4hjQLsgDuB8ytmTVu1KE+AoOEMUgYg4QxSBiDhDFIGIOEMUgYg4QxSBiDhDFIGIOEMUgYg4QxSBiDhDFIGIOEMUgYg4QxSBiDhDFIGIOEMUgYg4QxSBiDhDFIGIOEMUiYVkHOA1eBmwNPdQnyGTgI+B/0OqEZLkj3WRDIIGEMEsYgYQwyUJBfwKORXutwhDaH+hSjg+oSZHrIcgfV5UHK07f0DqrLo8bv0UON9jD+bzMP499lfDVSkMnLY24xfPV1Fafrki90yfM44GZfnfLEfmT9PUveBmxSGeT/1+Y9b/4bSI1yhRx2HXgP/A7YtDLIPxeA26tXr+4BT5vNlTX+0UuSJEmSJEmswx8VNgFTHUrQxgAAAABJRU5ErkJggg=="
      />
    </defs>
  </svg>
);

export const ShelfIcon = ({size = 24}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 3C3.73478 3 3.48043 3.10536 3.29289 3.29289C3.10536 3.48043 3 3.73478 3 4V20C3 20.2652 3.10536 20.5196 3.29289 20.7071C3.48043 20.8946 3.73478 21 4 21H14C14.2652 21 14.5196 20.8946 14.7071 20.7071C14.8946 20.5196 15 20.2652 15 20V15.297L16 20C16.0552 20.2594 16.2111 20.4862 16.4336 20.6306C16.656 20.775 16.9266 20.8251 17.186 20.77L21.098 19.938C21.3574 19.8828 21.5842 19.7269 21.7286 19.5044C21.873 19.282 21.9231 19.0114 21.868 18.752L18.958 5.058C18.9028 4.79864 18.7469 4.57181 18.5244 4.42741C18.302 4.28302 18.0314 4.23287 17.772 4.288L14.992 4.878C14.9622 4.63583 14.8449 4.41289 14.6622 4.25118C14.4795 4.08946 14.244 4.00013 14 4H10C10 3.73478 9.89464 3.48043 9.70711 3.29289C9.51957 3.10536 9.26522 3 9 3H4ZM10 6H13V14H10V6ZM10 19V16H13V19H10ZM8 5V15H5V5H8ZM8 17V19H5V17H8ZM17.332 16.65L19.288 16.234L19.704 18.19L17.748 18.606L17.332 16.65ZM16.916 14.693L15.253 6.868L17.209 6.452L18.873 14.278L16.916 14.693Z"
      fill="currentColor"
    />
  </svg>
);

export const CheckIcon = ({size = 24}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_908_1165"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="24"
    >
      <rect width="24" height="24" fill="currentColor" />
    </mask>
    <g mask="url(#mask0_908_1165)">
      <path
        d="M16.0386 17.5084L13.4136 14.8834L14.5 14.0002L16.0386 15.8001L20 12.0002L20.7219 12.8001L16.0386 17.5084ZM16.0386 10.5084L13.4136 7.8834L14.5 7.0002L16.0386 9.0002L20 5L20.5 5.5L16.0386 10.5084ZM2 15.8001V14.4751H7H10.9969V15.8001H2ZM2 9.6669V8.20015H10.9969V9.6669H7H2Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export const HistoryIcon = ({size = 24}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 21C9.7 21 7.696 20.2377 5.988 18.713C4.28 17.1883 3.30067 15.284 3.05 13H5.1C5.33333 14.7333 6.10433 16.1667 7.413 17.3C8.72167 18.4333 10.2507 19 12 19C13.95 19 15.6043 18.321 16.963 16.963C18.3217 15.605 19.0007 13.9507 19 12C18.9993 10.0493 18.3203 8.39533 16.963 7.038C15.6057 5.68067 13.9513 5.00133 12 5C10.85 5 9.775 5.26667 8.775 5.8C7.775 6.33333 6.93333 7.06667 6.25 8H9V10H3V4H5V6.35C5.85 5.28333 6.88767 4.45833 8.113 3.875C9.33833 3.29167 10.634 3 12 3C13.25 3 14.421 3.23767 15.513 3.713C16.605 4.18833 17.555 4.82967 18.363 5.637C19.171 6.44433 19.8127 7.39433 20.288 8.487C20.7633 9.57967 21.0007 10.7507 21 12C20.9993 13.2493 20.762 14.4203 20.288 15.513C19.814 16.6057 19.1723 17.5557 18.363 18.363C17.5537 19.1703 16.6037 19.812 15.513 20.288C14.4223 20.764 13.2513 21.0013 12 21ZM14.8 16.2L11 12.4V7H13V11.6L16.2 14.8L14.8 16.2Z"
      fill="currentColor"
    />
  </svg>
);

export const CheckedIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.55156 18.0001L3.85156 12.3001L5.27656 10.8751L9.55156 15.1501L18.7266 5.9751L20.1516 7.4001L9.55156 18.0001Z"
      fill="currentColor"
    />
  </svg>
);

export const DownIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.0609 16.0599C12.7796 16.3408 12.3984 16.4986 12.0009 16.4986C11.6034 16.4986 11.2221 16.3408 10.9409 16.0599L5.28288 10.4039C5.00161 10.1225 4.84366 9.74089 4.84375 9.34304C4.84384 8.94518 5.00198 8.56365 5.28338 8.28239C5.56477 8.00113 5.94637 7.84317 6.34423 7.84326C6.74209 7.84336 7.12361 8.00149 7.40488 8.28289L12.0009 12.8789L16.5969 8.28289C16.8797 8.00952 17.2585 7.85814 17.6518 7.86137C18.0451 7.8646 18.4214 8.02218 18.6996 8.30016C18.9779 8.57815 19.1358 8.95429 19.1394 9.34759C19.143 9.74088 18.992 10.1199 18.7189 10.4029L13.0619 16.0609L13.0609 16.0599Z"
      fill="currentColor"
    />
  </svg>
);

export const TrashCanIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.1875 3.4375L11.8 9.70312C11.7012 11.3037 11.6519 12.1044 11.25 12.68C11.0516 12.9645 10.7962 13.2046 10.5 13.385C9.90187 13.75 9.1 13.75 7.49625 13.75C5.89 13.75 5.08687 13.75 4.4875 13.3844C4.19118 13.2036 3.93576 12.9631 3.7375 12.6781C3.33625 12.1019 3.2875 11.3 3.19125 9.69688L2.8125 3.4375M1.875 3.4375H13.125M10.035 3.4375L9.60813 2.5575C9.325 1.9725 9.18313 1.68063 8.93875 1.49813C8.88446 1.4577 8.82698 1.42175 8.76688 1.39062C8.49625 1.25 8.17125 1.25 7.52187 1.25C6.85562 1.25 6.5225 1.25 6.24687 1.39625C6.18595 1.42888 6.12783 1.46651 6.07313 1.50875C5.82625 1.69813 5.68813 2.00125 5.41188 2.60688L5.03313 3.4375M5.9375 10.3125V6.5625M9.0625 10.3125V6.5625"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const XButton = () => (
  <svg
    width="19"
    height="20"
    viewBox="0 0 12 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 1.5L1 11.5M1 1.5L11 11.5"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const DocsIcon = () => (
  <svg
    width="26"
    height="30"
    viewBox="0 0 26 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="26" height="30" fill="url(#pattern0_938_1207)" />
    <defs>
      <pattern
        id="pattern0_938_1207"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref="#image0_938_1207"
          transform="matrix(0.01 0 0 0.00866667 0 0.0666667)"
        />
      </pattern>
      <image
        id="image0_938_1207"
        width="100"
        height="100"
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADFElEQVR4nO2csWoUURiFbwT1BTQJitZa6cNoYZmomE5RsVIWEewXZueeM7P7AvsOWosIgq22RolYiBErHRlIES4uQtzsnHv//8BtJ+e73/yXmd0lIXg8Ho9HKSRPdl23FqxlNpudJfkMwFsA+yQ7sbUbY7wRLCTGeI3kN4FN7/6xfpHcDiWH5HUAvwU2uzMvpW3bDZLfBTa5cykhBADPD28EgJ8A7lVVtRkEQmvHF8l3CeTdIBT+XUK5UtKnqbqu14O2kO2ipaTAIYN+ALZSKf1DCYCdkHtyFFK0lFyFFCslZyFFSsldSHFSShBSlJRShBQjpSQhRUgpTUj2UkoUkrWUUoVkK6VkIVlKKV1IdlLUhSD5JnM0Gp04ynWy+ZRYXQjJL0nHS0e9VhaTkoGQl0nH+J/X054UdSEAdtI7upfStu3lZR9fEj8xUhcyHo9Pk/yQ9jyOBeDj0LzyQvo0TXN1Vb+MCUNHrtCCxBivAHjvQoQyn89PkbwD4AWAzz4hBYZqJ4RcIev8coWs88sVss4vV8g6v1wh6/xyhazzyxWyzi9XyDq/XCHr/HKFrPPLFbLOL1fIOr9cIev8coWs88sVss6/rELpdbjiNTT/0uJC6ELoE+ITYu7IyjVU45crZJ1frpB1frlC1vn9sZcuhP7Y6xOyKH5k0T86yesOsc4vV8g6v1wh6/xyhazz+3sIXQj9PcQnZFH8yKK/h+R1h1jnlytknV+ukHV+uULW+dXeQ8KKM/TfP7ZCLmRJcSH0CaEfWcc/IbmGavxyhazzyxWyzi9XyDq/XCHr/HKFrPPLFbLOL1fIOr9cIev8coWs88sVss4vV8g6P4CvSakzwUjqul4/zN7vhYKQN0mprWAkMcabCftrBSFPkwnZnUwmF0LhIXmR5KdEyEjhLjlP8kcipS96q23bjVBYqqrabJrmdvq/4wHsT6fTc0EhJB8t6ytY5rseBpV0XbcGYCawKd1Aa9rvQVBKX4jkg350BTaoW8XqWQHcD+pnLMknJF8B2CtQwt4B2+Oedej99ng8Ho8nHOQPgLmVccswfWkAAAAASUVORK5CYII="
      />
    </defs>
  </svg>
);

export const XIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.60156 13.3983L7.49994 7.49994L13.3983 13.3983M13.3983 1.60156L7.49881 7.49994L1.60156 1.60156"
      stroke="#FF4545"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const BackIcon = ({ size = 24, color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 19l-7-7 7-7" />
  </svg>
);

export const WorkBookIcon = ({ size = 48, color = "#6D78FF" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 39C8 37.6739 8.52678 36.4021 9.46447 35.4645C10.4021 34.5268 11.6739 34 13 34H40M8 39C8 40.3261 8.52678 41.5979 9.46447 42.5355C10.4021 43.4732 11.6739 44 13 44H40V4L13 4C11.6739 4 10.4021 4.52678 9.46447 5.46447C8.52678 6.40215 8 7.67392 8 9L8 39Z"
      stroke={color}
      strokeOpacity="0.8"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
