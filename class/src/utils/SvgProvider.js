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

export const ProfileIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0)">
      <path
        d="M15 16.667C15 15.3409 14.4732 14.0691 13.5355 13.1315C12.5979 12.1938 11.3261 11.667 10 11.667C8.67392 11.667 7.40215 12.1938 6.46447 13.1315C5.52678 14.0691 5 15.3409 5 16.667"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0013 11.6667C11.8423 11.6667 13.3346 10.1743 13.3346 8.33333C13.3346 6.49238 11.8423 5 10.0013 5C8.16035 5 6.66797 6.49238 6.66797 8.33333C6.66797 10.1743 8.16035 11.6667 10.0013 11.6667Z"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0013 18.3337C14.6037 18.3337 18.3346 14.6027 18.3346 10.0003C18.3346 5.39795 14.6037 1.66699 10.0013 1.66699C5.39893 1.66699 1.66797 5.39795 1.66797 10.0003C1.66797 14.6027 5.39893 18.3337 10.0013 18.3337Z"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
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

export const XButton = ({ color = "black" }) => (
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

export const UserIcon = ({ size = 36, color = "#808FFF" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 2.19747e-10C22.6264 -1.23112e-05 25.2271 0.517293 27.6536 1.52238C30.0802 2.52747 32.2849 4.00065 34.1421 5.85782C35.9993 7.71499 37.4725 9.91977 38.4776 12.3463C39.4827 14.7728 40 17.3735 40 20C40 31.0457 31.0457 40 20 40C8.95434 40 0 31.0457 0 20C0 8.95434 8.95434 2.19747e-10 20 2.19747e-10ZM22 22H18C13.0486 22 8.79768 24.9988 6.96421 29.2795C9.86521 33.3474 14.6228 36 20 36C25.3771 36 30.1347 33.3474 33.0358 29.2792C31.2023 24.9988 26.9514 22 22 22ZM20 6C16.6863 6 14 8.68631 14 12C14 15.3137 16.6863 18 20 18C23.3136 18 25.9999 15.3137 25.9999 12C25.9999 8.68631 23.3137 6 20 6Z"
      fill={color}
    />
  </svg>
);

export const IconTarget = ({ size = 28 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0)">
      <g clipPath="url(#clip1)">
        <path
          d="M13.9386 27.0921C20.8407 27.0921 26.4359 21.4969 26.4359 14.5949C26.4359 7.69286 20.8407 2.09766 13.9386 2.09766C7.03661 2.09766 1.44141 7.69286 1.44141 14.5949C1.44141 21.4969 7.03661 27.0921 13.9386 27.0921Z"
          fill="#E5E4DF"
        />
        <path
          d="M21.0343 14.5947C21.0343 18.513 17.8579 21.6893 13.9397 21.6893C10.0214 21.6893 6.91844 18.5123 6.84505 14.5947C6.7722 10.7063 9.77192 7.60215 13.9397 7.50011C17.8567 7.40413 21.0343 10.6765 21.0343 14.5947Z"
          fill="#E5E4DF"
        />
        <path
          d="M13.9371 28.1653C6.45462 28.1653 0.367188 22.0778 0.367188 14.5954C0.367188 7.11282 6.45462 1.02539 13.9371 1.02539C21.4195 1.02539 27.5069 7.11282 27.5069 14.5954C27.5069 22.0778 21.4195 28.1653 13.9371 28.1653ZM13.9371 3.59127C7.86938 3.59127 2.93302 8.5277 2.93302 14.5954C2.93302 20.6631 7.86938 25.5994 13.9371 25.5994C20.0048 25.5994 24.9411 20.6631 24.9411 14.5954C24.9411 8.5277 20.0047 3.59127 13.9371 3.59127Z"
          fill="#FF473E"
        />
        <path
          d="M13.9381 22.7626C9.44398 22.7626 5.85664 19.1839 5.77106 14.6153C5.6858 10.0636 9.18564 6.544 13.9118 6.42828C18.4081 6.31557 22.1055 10.0251 22.1055 14.5953C22.1055 19.0987 18.4417 22.7626 13.9381 22.7626ZM14.089 9.18098C14.0468 9.18098 14.0041 9.18158 13.9617 9.18257C10.8065 9.25978 8.46945 11.5789 8.52567 14.5772C8.5826 17.6222 10.9601 20.0075 13.938 20.0075C16.9225 20.0075 19.3504 17.5796 19.3504 14.5952C19.3505 11.6098 16.9901 9.18098 14.089 9.18098Z"
          fill="#FF473E"
        />
        <path
          d="M13.9393 16.8162C15.1657 16.8162 16.1599 15.822 16.1599 14.5956C16.1599 13.3692 15.1657 12.375 13.9393 12.375C12.7129 12.375 11.7188 13.3692 11.7188 14.5956C11.7188 15.822 12.7129 16.8162 13.9393 16.8162Z"
          fill="#FF473E"
        />
        <path
          d="M15.8984 13.1393L15.3001 12.541L13.6254 14.2157C13.6233 14.2183 13.6208 14.2202 13.6185 14.2225C13.5787 14.2617 13.5471 14.3083 13.5254 14.3598C13.5037 14.4112 13.4924 14.4665 13.4922 14.5223C13.492 14.5782 13.5028 14.6335 13.5241 14.6852C13.5453 14.7368 13.5766 14.7837 13.6161 14.8232C13.6556 14.8627 13.7025 14.894 13.7541 14.9152C13.8058 14.9365 13.8611 14.9473 13.917 14.9471C13.9728 14.9469 14.028 14.9356 14.0795 14.9139C14.131 14.8922 14.1776 14.8606 14.2168 14.8208C14.2191 14.8185 14.221 14.816 14.2233 14.8136L15.8984 13.1393Z"
          fill="#2B3B47"
        />
        <path
          d="M23.9321 4.5336C26.009 0.0290477 22.0473 -1.64313 21.378 5.89286L15.5716 11.0656C15.5309 11.0973 15.4922 11.1313 15.4556 11.1676C15.4533 11.1698 15.4514 11.1723 15.4492 11.1746L15.4447 11.1786L15.4452 11.179C14.9473 11.6886 14.9504 12.505 15.4555 13.0101C15.9606 13.5152 16.777 13.5182 17.2866 13.0204L17.287 13.0208L17.2909 13.0165C17.2932 13.0142 17.2957 13.0124 17.298 13.0101C17.3342 12.9734 17.3683 12.9347 17.4 12.894L22.5727 7.08756C30.1089 6.41846 28.4367 2.45668 23.9321 4.5336Z"
          fill="#0074A8"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0">
        <rect
          width="28"
          height="28"
          fill="white"
          transform="translate(0 0.5)"
        />
      </clipPath>
      <clipPath id="clip1">
        <rect
          width="28"
          height="28"
          fill="white"
          transform="translate(0 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
);

export const IconCheck = ({ size = 28 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0)">
      <path
        d="M28 14C28 21.732 21.732 28 14 28C6.26799 28 0 21.732 0 14C0 6.26799 6.26799 0 14 0C21.732 0 28 6.26799 28 14ZM12.3806 21.4129L22.7677 11.0258C23.1204 10.6731 23.1204 10.1012 22.7677 9.74846L21.4904 8.47113C21.1377 8.11836 20.5658 8.11836 20.213 8.47113L11.7419 16.9421L7.78699 12.9872C7.43428 12.6345 6.86237 12.6345 6.5096 12.9872L5.23227 14.2645C4.87956 14.6172 4.87956 15.1892 5.23227 15.5419L11.1032 21.4128C11.456 21.7656 12.0279 21.7656 12.3806 21.4129Z"
        fill="#33C06E"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="28" height="28" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const IconFire = ({ size = 28 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.5977 27.3681C5.36989 27.3681 2.90436 17.7487 4.01883 11.446C4.06734 11.1717 4.42691 11.0926 4.58359 11.323C5.06878 12.0361 5.50054 13.0661 6.2159 12.9767C7.29112 12.8423 8.03601 3.35469 14.4085 0.685115C14.6107 0.600404 14.8223 0.76113 14.8001 0.979224C14.485 4.07087 16.3412 8.49701 19.6299 8.49701C21.5151 8.49701 22.8049 6.99244 23.4495 5.48143C23.6452 5.02244 24.3159 5.08029 24.4282 5.56652C25.5783 10.5476 28.6528 27.3681 14.5977 27.3681Z"
      fill="#FF8F1F"
    />
    <path
      d="M11.3598 18.0917C11.5768 17.9094 11.9063 18.0345 11.9556 18.3136C12.0708 18.9668 12.4499 20.0892 13.6934 20.0892C15.1892 20.0892 16.2043 15.9732 16.4706 14.7627C16.5144 14.5635 16.7084 14.4283 16.9083 14.4689C20.6464 15.229 22.464 27.3674 14.2448 27.3674C8.26136 27.3674 9.6169 19.5559 11.3598 18.0917ZM21.5744 4.9463C21.7062 3.91588 19.8251 6.7342 19.8251 6.7342C19.8251 6.7342 21.2592 7.41156 21.5744 4.9463ZM2.62117 20.3136C2.66081 19.875 2.09649 18.7005 1.99658 19.1655C1.75743 20.2781 2.58152 20.7523 2.62117 20.3136Z"
      fill="#FFB636"
    />
    <path
      d="M17.675 19.0641C17.5348 18.4795 17.0321 19.8374 17.0953 20.3905C17.1585 20.9436 18.0103 20.4628 17.675 19.0641Z"
      fill="#FFD469"
    />
  </svg>
);

export const IconBookMark = ({ size = 28 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.94287 27.1319L13.6714 21.5047C13.8272 21.2696 14.1724 21.2696 14.3282 21.5047L18.0567 27.1319C18.4057 27.6588 19.2261 27.4116 19.2261 26.7797V0.911203C19.2261 0.558961 18.9406 0.273438 18.5883 0.273438H9.4112C9.05896 0.273438 8.77344 0.558961 8.77344 0.911203V26.7797C8.77349 27.4116 9.59386 27.6588 9.94287 27.1319Z"
      fill="#FF473E"
    />
  </svg>
);
