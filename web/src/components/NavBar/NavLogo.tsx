import Link from "next/link";

export default function NavLogo({ isScrolled }: Readonly<{ isScrolled: boolean }>) {
  return (
    <Link href="/" className="h-8">
      <svg className="transition h-full w-full" width="291" height="48" viewBox="0 0 291 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M67.44 32.168C66.272 32.168 65.216 31.968 64.272 31.568C63.344 31.168 62.608 30.592 62.064 29.84C61.52 29.088 61.24 28.2 61.224 27.176H64.824C64.872 27.864 65.112 28.408 65.544 28.808C65.992 29.208 66.6 29.408 67.368 29.408C68.152 29.408 68.768 29.224 69.216 28.856C69.664 28.472 69.888 27.976 69.888 27.368C69.888 26.872 69.736 26.464 69.432 26.144C69.128 25.824 68.744 25.576 68.28 25.4C67.832 25.208 67.208 25 66.408 24.776C65.32 24.456 64.432 24.144 63.744 23.84C63.072 23.52 62.488 23.048 61.992 22.424C61.512 21.784 61.272 20.936 61.272 19.88C61.272 18.888 61.52 18.024 62.016 17.288C62.512 16.552 63.208 15.992 64.104 15.608C65 15.208 66.024 15.008 67.176 15.008C68.904 15.008 70.304 15.432 71.376 16.28C72.464 17.112 73.064 18.28 73.176 19.784H69.48C69.448 19.208 69.2 18.736 68.736 18.368C68.288 17.984 67.688 17.792 66.936 17.792C66.28 17.792 65.752 17.96 65.352 18.296C64.968 18.632 64.776 19.12 64.776 19.76C64.776 20.208 64.92 20.584 65.208 20.888C65.512 21.176 65.88 21.416 66.312 21.608C66.76 21.784 67.384 21.992 68.184 22.232C69.272 22.552 70.16 22.872 70.848 23.192C71.536 23.512 72.128 23.992 72.624 24.632C73.12 25.272 73.368 26.112 73.368 27.152C73.368 28.048 73.136 28.88 72.672 29.648C72.208 30.416 71.528 31.032 70.632 31.496C69.736 31.944 68.672 32.168 67.44 32.168ZM77.985 17.12C77.377 17.12 76.873 16.936 76.473 16.568C76.089 16.184 75.897 15.712 75.897 15.152C75.897 14.592 76.089 14.128 76.473 13.76C76.873 13.376 77.377 13.184 77.985 13.184C78.577 13.184 79.065 13.376 79.449 13.76C79.833 14.128 80.025 14.592 80.025 15.152C80.025 15.712 79.833 16.184 79.449 16.568C79.065 16.936 78.577 17.12 77.985 17.12ZM79.641 34.184C79.641 35.656 79.273 36.712 78.537 37.352C77.817 38.008 76.777 38.336 75.417 38.336H73.929V35.48H74.889C75.401 35.48 75.761 35.376 75.969 35.168C76.177 34.976 76.281 34.656 76.281 34.208V18.704H79.641V34.184ZM88.8647 32.216C87.5847 32.216 86.4327 31.936 85.4087 31.376C84.3847 30.8 83.5767 29.992 82.9847 28.952C82.4087 27.912 82.1207 26.712 82.1207 25.352C82.1207 23.992 82.4167 22.792 83.0087 21.752C83.6167 20.712 84.4407 19.912 85.4807 19.352C86.5207 18.776 87.6807 18.488 88.9607 18.488C90.2407 18.488 91.4007 18.776 92.4407 19.352C93.4807 19.912 94.2967 20.712 94.8887 21.752C95.4967 22.792 95.8007 23.992 95.8007 25.352C95.8007 26.712 95.4887 27.912 94.8647 28.952C94.2567 29.992 93.4247 30.8 92.3687 31.376C91.3287 31.936 90.1607 32.216 88.8647 32.216ZM88.8647 29.288C89.4727 29.288 90.0407 29.144 90.5687 28.856C91.1127 28.552 91.5447 28.104 91.8647 27.512C92.1847 26.92 92.3447 26.2 92.3447 25.352C92.3447 24.088 92.0087 23.12 91.3367 22.448C90.6807 21.76 89.8727 21.416 88.9127 21.416C87.9527 21.416 87.1447 21.76 86.4887 22.448C85.8487 23.12 85.5287 24.088 85.5287 25.352C85.5287 26.616 85.8407 27.592 86.4647 28.28C87.1047 28.952 87.9047 29.288 88.8647 29.288ZM86.8727 16.952C86.4247 16.952 86.0487 16.8 85.7447 16.496C85.4407 16.192 85.2887 15.816 85.2887 15.368C85.2887 14.92 85.4407 14.544 85.7447 14.24C86.0487 13.92 86.4247 13.76 86.8727 13.76C87.3207 13.76 87.6967 13.92 88.0007 14.24C88.3207 14.544 88.4807 14.92 88.4807 15.368C88.4807 15.816 88.3207 16.192 88.0007 16.496C87.6967 16.8 87.3207 16.952 86.8727 16.952ZM91.3127 16.952C90.8647 16.952 90.4887 16.8 90.1847 16.496C89.8807 16.192 89.7287 15.816 89.7287 15.368C89.7287 14.92 89.8807 14.544 90.1847 14.24C90.4887 13.92 90.8647 13.76 91.3127 13.76C91.7607 13.76 92.1367 13.92 92.4407 14.24C92.7607 14.544 92.9207 14.92 92.9207 15.368C92.9207 15.816 92.7607 16.192 92.4407 16.496C92.1367 16.8 91.7607 16.952 91.3127 16.952ZM103.473 18.488C104.465 18.488 105.337 18.688 106.089 19.088C106.841 19.472 107.433 19.976 107.865 20.6V18.704H111.249V32.096C111.249 33.328 111.001 34.424 110.505 35.384C110.009 36.36 109.265 37.128 108.273 37.688C107.281 38.264 106.081 38.552 104.673 38.552C102.785 38.552 101.233 38.112 100.017 37.232C98.8174 36.352 98.1374 35.152 97.9774 33.632H101.313C101.489 34.24 101.865 34.72 102.441 35.072C103.033 35.44 103.745 35.624 104.577 35.624C105.553 35.624 106.345 35.328 106.953 34.736C107.561 34.16 107.865 33.28 107.865 32.096V30.032C107.433 30.656 106.833 31.176 106.065 31.592C105.313 32.008 104.449 32.216 103.473 32.216C102.353 32.216 101.329 31.928 100.401 31.352C99.4734 30.776 98.7374 29.968 98.1934 28.928C97.6654 27.872 97.4014 26.664 97.4014 25.304C97.4014 23.96 97.6654 22.768 98.1934 21.728C98.7374 20.688 99.4654 19.888 100.377 19.328C101.305 18.768 102.337 18.488 103.473 18.488ZM107.865 25.352C107.865 24.536 107.705 23.84 107.385 23.264C107.065 22.672 106.633 22.224 106.089 21.92C105.545 21.6 104.961 21.44 104.337 21.44C103.713 21.44 103.137 21.592 102.609 21.896C102.081 22.2 101.649 22.648 101.313 23.24C100.993 23.816 100.833 24.504 100.833 25.304C100.833 26.104 100.993 26.808 101.313 27.416C101.649 28.008 102.081 28.464 102.609 28.784C103.153 29.104 103.729 29.264 104.337 29.264C104.961 29.264 105.545 29.112 106.089 28.808C106.633 28.488 107.065 28.04 107.385 27.464C107.705 26.872 107.865 26.168 107.865 25.352ZM117.891 20.768C118.323 20.064 118.883 19.512 119.571 19.112C120.275 18.712 121.075 18.512 121.971 18.512V22.04H121.083C120.027 22.04 119.227 22.288 118.683 22.784C118.155 23.28 117.891 24.144 117.891 25.376V32H114.531V18.704H117.891V20.768ZM136.594 25.064C136.594 25.544 136.562 25.976 136.498 26.36H126.778C126.858 27.32 127.194 28.072 127.786 28.616C128.378 29.16 129.106 29.432 129.97 29.432C131.218 29.432 132.106 28.896 132.634 27.824H136.258C135.874 29.104 135.138 30.16 134.05 30.992C132.962 31.808 131.626 32.216 130.042 32.216C128.762 32.216 127.61 31.936 126.586 31.376C125.578 30.8 124.786 29.992 124.21 28.952C123.65 27.912 123.37 26.712 123.37 25.352C123.37 23.976 123.65 22.768 124.21 21.728C124.77 20.688 125.554 19.888 126.562 19.328C127.57 18.768 128.73 18.488 130.042 18.488C131.306 18.488 132.434 18.76 133.426 19.304C134.434 19.848 135.21 20.624 135.754 21.632C136.314 22.624 136.594 23.768 136.594 25.064ZM133.114 24.104C133.098 23.24 132.786 22.552 132.178 22.04C131.57 21.512 130.826 21.248 129.946 21.248C129.114 21.248 128.41 21.504 127.834 22.016C127.274 22.512 126.93 23.208 126.802 24.104H133.114ZM146.415 18.512C147.999 18.512 149.279 19.016 150.255 20.024C151.231 21.016 151.719 22.408 151.719 24.2V32H148.359V24.656C148.359 23.6 148.095 22.792 147.567 22.232C147.039 21.656 146.319 21.368 145.407 21.368C144.479 21.368 143.743 21.656 143.199 22.232C142.671 22.792 142.407 23.6 142.407 24.656V32H139.047V18.704H142.407V20.36C142.855 19.784 143.423 19.336 144.111 19.016C144.815 18.68 145.583 18.512 146.415 18.512ZM163.993 15.248V32H160.633V15.248H163.993ZM174.68 18.512C176.264 18.512 177.544 19.016 178.52 20.024C179.496 21.016 179.984 22.408 179.984 24.2V32H176.624V24.656C176.624 23.6 176.36 22.792 175.832 22.232C175.304 21.656 174.584 21.368 173.672 21.368C172.744 21.368 172.008 21.656 171.464 22.232C170.936 22.792 170.672 23.6 170.672 24.656V32H167.312V18.704H170.672V20.36C171.12 19.784 171.688 19.336 172.376 19.016C173.08 18.68 173.848 18.512 174.68 18.512ZM190.547 18.512C192.131 18.512 193.411 19.016 194.387 20.024C195.363 21.016 195.851 22.408 195.851 24.2V32H192.491V24.656C192.491 23.6 192.227 22.792 191.699 22.232C191.171 21.656 190.451 21.368 189.539 21.368C188.611 21.368 187.875 21.656 187.331 22.232C186.803 22.792 186.539 23.6 186.539 24.656V32H183.179V18.704H186.539V20.36C186.987 19.784 187.555 19.336 188.243 19.016C188.947 18.68 189.715 18.512 190.547 18.512ZM204.951 32.216C203.671 32.216 202.519 31.936 201.495 31.376C200.471 30.8 199.663 29.992 199.071 28.952C198.495 27.912 198.207 26.712 198.207 25.352C198.207 23.992 198.503 22.792 199.095 21.752C199.703 20.712 200.527 19.912 201.567 19.352C202.607 18.776 203.767 18.488 205.047 18.488C206.327 18.488 207.487 18.776 208.527 19.352C209.567 19.912 210.383 20.712 210.975 21.752C211.583 22.792 211.887 23.992 211.887 25.352C211.887 26.712 211.575 27.912 210.951 28.952C210.343 29.992 209.511 30.8 208.455 31.376C207.415 31.936 206.247 32.216 204.951 32.216ZM204.951 29.288C205.559 29.288 206.127 29.144 206.655 28.856C207.199 28.552 207.631 28.104 207.951 27.512C208.271 26.92 208.431 26.2 208.431 25.352C208.431 24.088 208.095 23.12 207.423 22.448C206.767 21.76 205.959 21.416 204.999 21.416C204.039 21.416 203.231 21.76 202.575 22.448C201.935 23.12 201.615 24.088 201.615 25.352C201.615 26.616 201.927 27.592 202.551 28.28C203.191 28.952 203.991 29.288 204.951 29.288ZM219.895 28.904L223.255 18.704H226.831L221.911 32H217.831L212.935 18.704H216.535L219.895 28.904ZM227.854 25.304C227.854 23.96 228.118 22.768 228.646 21.728C229.19 20.688 229.918 19.888 230.83 19.328C231.758 18.768 232.79 18.488 233.926 18.488C234.918 18.488 235.782 18.688 236.518 19.088C237.27 19.488 237.87 19.992 238.318 20.6V18.704H241.702V32H238.318V30.056C237.886 30.68 237.286 31.2 236.518 31.616C235.766 32.016 234.894 32.216 233.902 32.216C232.782 32.216 231.758 31.928 230.83 31.352C229.918 30.776 229.19 29.968 228.646 28.928C228.118 27.872 227.854 26.664 227.854 25.304ZM238.318 25.352C238.318 24.536 238.158 23.84 237.838 23.264C237.518 22.672 237.086 22.224 236.542 21.92C235.998 21.6 235.414 21.44 234.79 21.44C234.166 21.44 233.59 21.592 233.062 21.896C232.534 22.2 232.102 22.648 231.766 23.24C231.446 23.816 231.286 24.504 231.286 25.304C231.286 26.104 231.446 26.808 231.766 27.416C232.102 28.008 232.534 28.464 233.062 28.784C233.606 29.104 234.182 29.264 234.79 29.264C235.414 29.264 235.998 29.112 236.542 28.808C237.086 28.488 237.518 28.04 237.838 27.464C238.158 26.872 238.318 26.168 238.318 25.352ZM248.896 21.464V27.896C248.896 28.344 249 28.672 249.208 28.88C249.432 29.072 249.8 29.168 250.312 29.168H251.872V32H249.76C246.928 32 245.512 30.624 245.512 27.872V21.464H243.928V18.704H245.512V15.416H248.896V18.704H251.872V21.464H248.896ZM255.993 17.12C255.401 17.12 254.905 16.936 254.505 16.568C254.121 16.184 253.929 15.712 253.929 15.152C253.929 14.592 254.121 14.128 254.505 13.76C254.905 13.376 255.401 13.184 255.993 13.184C256.585 13.184 257.073 13.376 257.457 13.76C257.857 14.128 258.057 14.592 258.057 15.152C258.057 15.712 257.857 16.184 257.457 16.568C257.073 16.936 256.585 17.12 255.993 17.12ZM257.649 18.704V32H254.289V18.704H257.649ZM266.872 32.216C265.592 32.216 264.44 31.936 263.416 31.376C262.392 30.8 261.584 29.992 260.992 28.952C260.416 27.912 260.128 26.712 260.128 25.352C260.128 23.992 260.424 22.792 261.016 21.752C261.624 20.712 262.448 19.912 263.488 19.352C264.528 18.776 265.688 18.488 266.968 18.488C268.248 18.488 269.408 18.776 270.448 19.352C271.488 19.912 272.304 20.712 272.896 21.752C273.504 22.792 273.808 23.992 273.808 25.352C273.808 26.712 273.496 27.912 272.872 28.952C272.264 29.992 271.432 30.8 270.376 31.376C269.336 31.936 268.168 32.216 266.872 32.216ZM266.872 29.288C267.48 29.288 268.048 29.144 268.576 28.856C269.12 28.552 269.552 28.104 269.872 27.512C270.192 26.92 270.352 26.2 270.352 25.352C270.352 24.088 270.016 23.12 269.344 22.448C268.688 21.76 267.88 21.416 266.92 21.416C265.96 21.416 265.152 21.76 264.496 22.448C263.856 23.12 263.536 24.088 263.536 25.352C263.536 26.616 263.848 27.592 264.472 28.28C265.112 28.952 265.912 29.288 266.872 29.288ZM283.641 18.512C285.225 18.512 286.505 19.016 287.481 20.024C288.457 21.016 288.945 22.408 288.945 24.2V32H285.585V24.656C285.585 23.6 285.321 22.792 284.793 22.232C284.265 21.656 283.545 21.368 282.633 21.368C281.705 21.368 280.969 21.656 280.425 22.232C279.897 22.792 279.633 23.6 279.633 24.656V32H276.273V18.704H279.633V20.36C280.081 19.784 280.649 19.336 281.337 19.016C282.041 18.68 282.809 18.512 283.641 18.512Z"
          fill={isScrolled ? "#000" : "#fff"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 0C2.68629 0 0 2.68629 0 6V42C0 45.3137 2.68629 48 6 48H42C45.3137 48 48 45.3137 48 42V6C48 2.68629 45.3137 0 42 0H6ZM27.162 16.1946C27.9376 16.7656 28.3765 17.5668 28.4787 18.598H33.7841C33.7586 17.0384 33.341 15.6662 32.5313 14.4815C31.7216 13.2969 30.5881 12.3722 29.1307 11.7074C27.6819 11.0426 25.9858 10.7102 24.0427 10.7102C22.1336 10.7102 20.429 11.0426 18.929 11.7074C17.429 12.3722 16.2486 13.2969 15.3878 14.4815C14.5356 15.6662 14.1137 17.0511 14.1222 18.6364C14.1137 20.571 14.7486 22.1094 16.027 23.2514C17.3055 24.3935 19.0483 25.233 21.2557 25.7699L24.1066 26.4858C25.0611 26.7159 25.8665 26.9716 26.5228 27.2528C27.1876 27.5341 27.6904 27.875 28.0313 28.2756C28.3807 28.6761 28.5555 29.1705 28.5555 29.7585C28.5555 30.3892 28.3637 30.9474 27.9802 31.4332C27.5966 31.919 27.0555 32.2983 26.3566 32.571C25.6662 32.8438 24.8523 32.9801 23.9148 32.9801C22.9603 32.9801 22.1037 32.8352 21.3452 32.5455C20.5952 32.2472 19.9944 31.8082 19.5427 31.2287C19.0995 30.6406 18.8481 29.9077 18.7884 29.0298H13.4319C13.4745 30.9134 13.9305 32.4943 14.7998 33.7727C15.6776 35.0426 16.8964 36.0014 18.456 36.6491C20.0242 37.2969 21.8651 37.6207 23.9787 37.6207C26.1094 37.6207 27.929 37.3011 29.4376 36.6619C30.9546 36.0142 32.1137 35.1065 32.9148 33.9389C33.7245 32.7628 34.1336 31.3736 34.1421 29.7713C34.1336 28.6804 33.9333 27.7131 33.5412 26.8693C33.1577 26.0256 32.6165 25.2926 31.9177 24.6705C31.2188 24.0483 30.3921 23.5241 29.4376 23.098C28.483 22.6719 27.4347 22.331 26.2927 22.0753L23.9404 21.5128C23.3694 21.3849 22.8324 21.2315 22.3296 21.0526C21.8268 20.8651 21.3836 20.6477 21.0001 20.4006C20.6165 20.1449 20.314 19.8423 20.0924 19.4929C19.8793 19.1435 19.7813 18.7344 19.7983 18.2656C19.7983 17.7031 19.9603 17.2003 20.2841 16.7571C20.6165 16.3139 21.0938 15.9688 21.716 15.7216C22.3381 15.4659 23.1009 15.3381 24.0043 15.3381C25.3339 15.3381 26.3864 15.6236 27.162 16.1946Z"
          fill={isScrolled ? "#000" : "#fff"}
        />
      </svg>
    </Link>
  );
}
