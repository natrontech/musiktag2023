export function Logo(props) {
  return (
    // <svg aria-hidden="true" viewBox="0 0 183 48" {...props}>
    //   <path
    //     fill="#3B82F6"
    //     fillRule="evenodd"
    //     d="M1.172 21.172a4 4 0 000 5.656l20 20a4 4 0 105.656-5.656l-20-20a4 4 0 00-5.656 0z"
    //     clipRule="evenodd"
    //   />
    //   <path
    //     fill="#93C5FD"
    //     fillRule="evenodd"
    //     d="M26.828 6.828a4 4 0 10-5.656-5.656l-19 19A3.987 3.987 0 015 19a3.98 3.98 0 012.827 1.172L10.657 23 26.828 6.828z"
    //     clipRule="evenodd"
    //   />
    //   <path
    //     fill="#0F172A"
    //     d="M52 32V15.2h5.736c1.968 0 3.584.352 4.848 1.056 1.28.688 2.224 1.664 2.832 2.928.624 1.248.936 2.72.936 4.416 0 1.696-.312 3.176-.936 4.44-.608 1.248-1.552 2.224-2.832 2.928-1.264.688-2.88 1.032-4.848 1.032H52zm3.072-2.64h2.52c1.408 0 2.52-.224 3.336-.672a3.958 3.958 0 001.752-1.968c.352-.864.528-1.904.528-3.12 0-1.2-.176-2.232-.528-3.096a3.944 3.944 0 00-1.752-1.992c-.816-.464-1.928-.696-3.336-.696h-2.52V29.36zm18.263 2.928c-1.2 0-2.264-.256-3.192-.768a5.559 5.559 0 01-2.184-2.16c-.529-.928-.793-2-.793-3.216 0-1.232.257-2.328.769-3.288a5.687 5.687 0 012.16-2.232c.927-.544 2.016-.816 3.264-.816 1.168 0 2.2.256 3.096.768a5.407 5.407 0 012.088 2.112c.511.88.767 1.864.767 2.952 0 .176-.008.36-.023.552 0 .192-.009.392-.025.6h-9.047c.063.928.383 1.656.96 2.184.591.528 1.303.792 2.136.792.623 0 1.143-.136 1.56-.408.431-.288.752-.656.96-1.104h3.12a5.68 5.68 0 01-1.128 2.064 5.423 5.423 0 01-1.92 1.44c-.753.352-1.609.528-2.569.528zm.024-9.984a3.23 3.23 0 00-1.992.648c-.577.416-.945 1.056-1.105 1.92h5.928c-.047-.784-.335-1.408-.864-1.872-.527-.464-1.183-.696-1.967-.696zm12.927 9.984c-1.216 0-2.288-.264-3.216-.792a5.851 5.851 0 01-2.208-2.208c-.528-.944-.792-2.024-.792-3.24 0-1.216.264-2.296.792-3.24A5.851 5.851 0 0183.07 20.6c.928-.528 2-.792 3.216-.792 1.52 0 2.8.4 3.84 1.2 1.04.784 1.704 1.872 1.992 3.264h-3.24a2.299 2.299 0 00-.96-1.344c-.464-.336-1.016-.504-1.656-.504-.848 0-1.568.32-2.16.96-.592.64-.888 1.528-.888 2.664 0 1.136.296 2.024.888 2.664.592.64 1.312.96 2.16.96.64 0 1.192-.16 1.656-.48.48-.32.8-.776.96-1.368h3.24c-.288 1.344-.952 2.424-1.992 3.24-1.04.816-2.32 1.224-3.84 1.224zm12.903 0c-1.2 0-2.264-.256-3.192-.768a5.559 5.559 0 01-2.184-2.16c-.528-.928-.792-2-.792-3.216 0-1.232.256-2.328.768-3.288a5.687 5.687 0 012.16-2.232c.928-.544 2.016-.816 3.264-.816 1.168 0 2.2.256 3.096.768a5.407 5.407 0 012.088 2.112c.512.88.768 1.864.768 2.952 0 .176-.008.36-.024.552 0 .192-.008.392-.024.6h-9.048c.064.928.384 1.656.96 2.184.592.528 1.304.792 2.136.792.624 0 1.144-.136 1.56-.408.432-.288.752-.656.96-1.104h3.12a5.68 5.68 0 01-1.128 2.064 5.423 5.423 0 01-1.92 1.44c-.752.352-1.608.528-2.568.528zm.024-9.984a3.23 3.23 0 00-1.992.648c-.576.416-.944 1.056-1.104 1.92h5.928c-.048-.784-.336-1.408-.864-1.872-.528-.464-1.184-.696-1.968-.696zm7.096 14.976V20.096h2.736l.336 1.704c.384-.528.888-.992 1.512-1.392.64-.4 1.464-.6 2.472-.6 1.12 0 2.12.272 3 .816a5.846 5.846 0 012.088 2.232c.512.944.768 2.016.768 3.216 0 1.2-.256 2.272-.768 3.216a5.894 5.894 0 01-2.088 2.208c-.88.528-1.88.792-3 .792-.896 0-1.68-.168-2.352-.504a4.24 4.24 0 01-1.632-1.416v6.912h-3.072zm6.408-7.68c.976 0 1.784-.328 2.424-.984.64-.656.96-1.504.96-2.544s-.32-1.896-.96-2.568c-.64-.672-1.448-1.008-2.424-1.008-.992 0-1.808.336-2.448 1.008-.624.656-.936 1.504-.936 2.544s.312 1.896.936 2.568c.64.656 1.456.984 2.448.984zM125.36 32c-1.248 0-2.248-.304-3-.912-.752-.608-1.128-1.688-1.128-3.24v-5.184h-2.04v-2.568h2.04l.36-3.192h2.712v3.192h3.216v2.568h-3.216v5.208c0 .576.12.976.36 1.2.256.208.688.312 1.296.312h1.488V32h-2.088zm5.014-13.752c-.56 0-1.024-.168-1.392-.504-.352-.336-.528-.76-.528-1.272s.176-.928.528-1.248c.368-.336.832-.504 1.392-.504.56 0 1.016.168 1.368.504.368.32.552.736.552 1.248s-.184.936-.552 1.272c-.352.336-.808.504-1.368.504zM128.838 32V20.096h3.072V32h-3.072zm12.518.288c-1.696 0-3.152-.36-4.368-1.08a7.383 7.383 0 01-2.808-3.048c-.656-1.312-.984-2.824-.984-4.536 0-1.712.328-3.224.984-4.536.656-1.312 1.592-2.336 2.808-3.072 1.216-.736 2.672-1.104 4.368-1.104 2.016 0 3.664.504 4.944 1.512 1.296.992 2.104 2.392 2.424 4.2h-3.384c-.208-.912-.656-1.624-1.344-2.136-.672-.528-1.568-.792-2.688-.792-1.552 0-2.768.528-3.648 1.584-.88 1.056-1.32 2.504-1.32 4.344 0 1.84.44 3.288 1.32 4.344.88 1.04 2.096 1.56 3.648 1.56 1.12 0 2.016-.24 2.688-.72.688-.496 1.136-1.176 1.344-2.04h3.384c-.32 1.728-1.128 3.08-2.424 4.056-1.28.976-2.928 1.464-4.944 1.464zm14.287 0c-1.152 0-2.192-.264-3.12-.792a5.957 5.957 0 01-2.184-2.184c-.528-.944-.792-2.032-.792-3.264 0-1.232.272-2.312.816-3.24a5.905 5.905 0 012.184-2.208c.928-.528 1.968-.792 3.12-.792 1.136 0 2.16.264 3.072.792a5.68 5.68 0 012.184 2.208c.544.928.816 2.008.816 3.24 0 1.232-.272 2.32-.816 3.264a5.727 5.727 0 01-2.184 2.184c-.928.528-1.96.792-3.096.792zm0-2.664c.8 0 1.496-.296 2.088-.888.592-.608.888-1.504.888-2.688 0-1.184-.296-2.072-.888-2.664-.592-.608-1.28-.912-2.064-.912-.816 0-1.52.304-2.112.912-.576.592-.864 1.48-.864 2.664 0 1.184.288 2.08.864 2.688.592.592 1.288.888 2.088.888zM163.046 32V20.096h2.712l.24 2.016a4.21 4.21 0 011.584-1.68c.704-.416 1.528-.624 2.472-.624 1.472 0 2.616.464 3.432 1.392.816.928 1.224 2.288 1.224 4.08V32h-3.072v-6.432c0-1.024-.208-1.808-.624-2.352-.416-.544-1.064-.816-1.944-.816-.864 0-1.576.304-2.136.912-.544.608-.816 1.456-.816 2.544V32h-3.072zm13.714 0v-9.336h-1.632v-2.568h1.632v-1.392c0-1.44.36-2.464 1.08-3.072.736-.608 1.728-.912 2.976-.912h1.32v2.616h-.84c-.528 0-.904.104-1.128.312-.224.208-.336.56-.336 1.056v1.392h2.568v2.568h-2.568V32h-3.072z"
    //   />
    // </svg>
    <svg width="100" height="100" viewBox="0 0 243 243" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M155 7.864C155 26.574 150.676 34.715 131.747 51.638C127.705 55.252 126 57.505 126 59.233C126 62.158 128.833 65 131.749 65C136.037 65 154.038 47.065 159.365 37.486C160.278 35.844 161.459 33.825 161.988 33C165.583 27.399 168.251 19.786 168.731 13.757C169.206 7.794 168.992 6.61 166.884 3.514C165.172 1 163.5 0.0070038 159.75 0.0070038C158 0.00699914 155 3.8147e-06 155 7.864ZM175.223 5.557C171.193 8.379 172.383 11.246 181.081 19.672C195.444 33.585 203.233 47.594 207.119 66.5C210.41 82.517 208.617 92.198 202.243 92.813C197.907 93.232 198.211 94.863 203.326 98.621C212.462 105.333 220.762 107.838 223.8 104.8C225.409 103.191 225.315 98.999 223.577 94.839C222.795 92.967 220.755 85.824 219.043 78.967C209.717 41.6 195.058 11.853 182.8 5.418C179.353 3.608 177.968 3.634 175.223 5.557ZM160 60.957C152.608 62.536 142.586 66.004 133.937 69.974C132.527 70.621 130.518 72.74 129.472 74.682C127.603 78.153 127.603 78.236 129.476 79.606C132.247 81.633 133.555 81.393 141.692 77.373C154.144 71.22 164.829 69.737 175.434 72.688C180.627 74.133 182.478 75.356 188.298 81.188C192.037 84.935 195.905 88 196.893 88C202.144 88 203.693 78.77 199.75 70.975C194.223 60.047 180.475 56.582 160 60.957Z" fill="#FBBD17"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M103.588 67.563C92.974 71.271 74.577 80.432 65.156 86.7C33.367 107.852 17.265 139.027 21.018 172.155C23.134 190.838 30.169 205.395 43.414 218.5C55.222 230.183 67.118 236.562 82.796 239.619C87.033 240.445 91.625 241.455 93 241.864C96.692 242.961 132.728 242.377 138.257 241.13C166.071 234.86 187.4 213.201 196.203 182.289C199.4 171.06 199.378 153.469 196.154 143C192.12 129.901 182.406 114.766 173.49 107.685C163.443 99.708 152.042 96.449 137.332 97.349C113.013 98.837 93.376 106.29 79.33 119.364C74.457 123.9 73.777 124.975 74.345 127.238C75.111 130.291 74.344 130.439 91.5 123.938C115.255 114.937 132.396 112.283 147 115.346C151.559 116.303 153 116.5 153 116.5L160.5 119L163 120.5L164 121.5L167.43 126.633C177.389 137.504 181.379 157.559 177.409 176.792C176.534 181.031 175.47 185.122 175.045 185.882C174.621 186.642 174 188.5 174 188.5C174 188.5 171.81 191.774 170 195.5C168.155 199.296 167 201 167 201C167 201 165.503 202.899 164.405 204.122C158.585 210.603 137.641 221.583 124.354 225.118C113.166 228.095 98.39 228.049 86.597 224.999C78.067 222.793 76.5 222 76.5 222L74.5 221L72.5 220L71 219L67.5 216.5C67.5 216.5 53.172 204.028 48.326 196.738C45.705 192.795 41.982 185.504 40.054 180.535C36.671 171.815 36.548 171.027 36.524 157.951C37 145.5 37.261 142.858 40.425 136.451C43.589 130.044 46.307 126.541 54.425 118.409C69.192 103.618 85.975 93.196 116.2 80.046C121.534 77.725 126.409 75.212 127.032 74.461C128.817 72.311 127.774 69.764 124.095 67.285C119.632 64.277 112.727 64.371 103.588 67.563Z" fill="#FC0101"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M154.432 118.335C152.744 119.515 149.761 122.51 147.802 124.99C142.103 132.207 127.951 148.001 127.193 147.99C126.812 147.985 124.628 144.026 122.34 139.193C116.987 127.884 113.458 124 108.533 124C106.518 124 103.997 124.466 102.933 125.036C99.674 126.78 96.182 134.703 93.581 146.25C93.241 147.762 92.617 149 92.197 149C91.776 149 90.699 147.762 89.803 146.25C88.908 144.738 85.061 140.086 81.255 135.914C74.335 128.328 74.335 128.328 70.086 129.582C60.805 132.323 58.493 137.843 58.604 157C58.73 179.01 67.321 218.009 73.551 224.857C74.58 225.988 75.152 225.848 76.979 224.021C79.173 221.827 79.173 221.827 75.612 197.163C70.661 162.877 70.324 159 72.303 159C74.081 159 80.297 166.806 87.432 178C90.062 182.125 93.144 186.513 94.281 187.75C96.843 190.538 101.32 190.68 103.944 188.056C106.288 185.712 106.737 183.064 107.429 167.5C108.02 154.228 108.62 151 110.493 151C112.852 151 117.736 165.162 126.059 196.131C128.719 206.03 129.555 207.932 131.673 208.897C133.574 209.763 134.794 209.73 136.831 208.758C139.028 207.71 139.556 206.711 139.814 203.111C140.087 199.3 138.419 188.756 136.316 181.006C135.689 178.696 136.004 178.813 140.569 182.583C143.281 184.822 150.091 190.107 155.702 194.327C168.066 203.626 170.842 204.19 173.98 198.04C177.733 190.683 176.856 189.265 162.5 179.473C157 175.721 147.381 169.054 141.124 164.657L129.747 156.663L139.124 148.161C155.232 133.556 164 124.21 164 121.647C164 119.069 161.144 115.947 158.921 116.094C158.14 116.146 156.119 117.154 154.432 118.335Z" fill="#060505"/>
    </svg>

  )
}