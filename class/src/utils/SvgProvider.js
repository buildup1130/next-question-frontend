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

export const HomeIcon = ({ size = 24 }) => (
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

export const ShelfIcon = ({ size = 24 }) => (
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

export const CheckIcon = ({ size = 24 }) => (
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

export const HistoryIcon = ({ size = 24 }) => (
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

export const XButton = ({color="black"}) => (
  <svg
    width="19"
    height="20"
    viewBox="0 0 12 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 1.5L1 11.5M1 1.5L11 11.5"
      stroke={color}
      stroke-width="1.1"
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

export const TrashIcon = (props) => (
  <svg
    width="10"
    height="12"
    viewBox="0 0 10 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.86857 11.5C1.54857 11.5 1.27619 11.3903 1.05143 11.1708C0.826667 10.9513 0.714286 10.6855 0.714286 10.3735V1.73462H0V1.0371H2.85714V0.5H7.14286V1.0371H10V1.73462H9.28571V10.3735C9.28571 10.6944 9.17571 10.9624 8.95571 11.1777C8.73571 11.393 8.46095 11.5005 8.13143 11.5H1.86857ZM8.57143 1.73462H1.42857V10.3735C1.42857 10.4986 1.46976 10.6014 1.55214 10.6818C1.63452 10.7622 1.74 10.8025 1.86857 10.8025H8.13214C8.24167 10.8025 8.34238 10.7578 8.43429 10.6685C8.52619 10.5793 8.5719 10.4807 8.57143 10.3728V1.73462ZM3.43429 9.40742H4.14857V3.12968H3.43429V9.40742ZM5.85143 9.40742H6.56571V3.12968H5.85143V9.40742Z"
      fill="black"
    />
  </svg>
);

export const EditIcon = (props) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.5 2C6.22386 2 6 2.22386 6 2.5C6 2.77614 6.22386 3 6.5 3H7.5V13H6.5C6.22386 13 6 13.2239 6 13.5C6 13.7761 6.22386 14 6.5 14H9.5C9.77614 14 10 13.7761 10 13.5C10 13.2239 9.77614 13 9.5 13H8.5V3H9.5C9.77614 3 10 2.77614 10 2.5C10 2.22386 9.77614 2 9.5 2H6.5Z"
      fill="#212121"
    />
    <path
      d="M4 4H6.5V5H4C3.44771 5 3 5.44771 3 6V9.99726C3 10.5495 3.44772 10.9973 4 10.9973H6.5V11.9973H4C2.89543 11.9973 2 11.1018 2 9.99726V6C2 4.89543 2.89543 4 4 4ZM12 10.9973H9.5V11.9973H12C13.1046 11.9973 14 11.1018 14 9.99727V6C14 4.89543 13.1046 4 12 4H9.5V5H12C12.5523 5 13 5.44772 13 6V9.99727C13 10.5496 12.5523 10.9973 12 10.9973Z"
      fill="#212121"
    />
  </svg>
);

export const BookIcon2 = (props) => (
  <svg
    width="9"
    height="12"
    viewBox="0 0 9 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.76 11.625C1.30792 11.625 0.9225 11.4654 0.60375 11.1462C0.284583 10.8279 0.125 10.4427 0.125 9.99063V2.25C0.125 1.72583 0.306458 1.28229 0.669375 0.919375C1.03229 0.556458 1.47583 0.375 2 0.375H8.875V8.98125C8.59875 8.98125 8.36125 9.08021 8.1625 9.27813C7.96375 9.47604 7.86479 9.71354 7.86563 9.99063C7.86646 10.2677 7.96562 10.505 8.16313 10.7025C8.36063 10.9 8.59792 10.9992 8.875 11V11.625H1.76ZM0.75 8.72688C0.8875 8.60604 1.04063 8.51396 1.20938 8.45062C1.37729 8.38729 1.56062 8.35563 1.75937 8.35563H2.24063V1H2C1.65958 1 1.36604 1.12313 1.11938 1.36938C0.873125 1.61604 0.75 1.90958 0.75 2.25V8.72688ZM2.86563 8.35563H8.25V1H2.86563V8.35563ZM1.76 11H7.61188C7.49312 10.8625 7.40146 10.71 7.33687 10.5425C7.27229 10.3758 7.24 10.1917 7.24 9.99C7.24 9.79958 7.27167 9.61833 7.335 9.44625C7.39833 9.27417 7.49062 9.11896 7.61188 8.98062H1.76C1.47292 8.98062 1.23292 9.07979 1.04 9.27813C0.847083 9.47646 0.750417 9.71396 0.75 9.99063C0.75 10.2773 0.846667 10.5171 1.04 10.71C1.23333 10.9029 1.47333 10.9996 1.76 11Z"
      fill="black"
    />
  </svg>
);

export const ArrowUpIcon = ({ size = 18, color = "#333", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

export const BulbIcon = ({size = 24, color = "black"}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12H4M12 3V4M20 12H21M5.6 5.6L6.3 6.3M18.4 5.6L17.7 6.3M9.7 17H14.3M9 16C8.16047 15.3704 7.54033 14.4925 7.22743 13.4908C6.91453 12.4892 6.92473 11.4144 7.25658 10.4189C7.58844 9.4233 8.22512 8.55739 9.07645 7.94379C9.92778 7.33019 10.9506 7 12 7C13.0494 7 14.0722 7.33019 14.9236 7.94379C15.7749 8.55739 16.4116 9.4233 16.7434 10.4189C17.0753 11.4144 17.0855 12.4892 16.7726 13.4908C16.4597 14.4925 15.8395 15.3704 15 16C14.6096 16.3865 14.3156 16.8594 14.1419 17.3806C13.9681 17.9018 13.9195 18.4566 14 19C14 19.5304 13.7893 20.0391 13.4142 20.4142C13.0391 20.7893 12.5304 21 12 21C11.4696 21 10.9609 20.7893 10.5858 20.4142C10.2107 20.0391 10 19.5304 10 19C10.0805 18.4566 10.0319 17.9018 9.85813 17.3806C9.6844 16.8594 9.39043 16.3865 9 16Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>

)