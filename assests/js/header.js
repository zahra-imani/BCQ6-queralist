header.innerHTML =`
<header id="header">
    <div class="nav__right" id="navbar">
      <nav class="nav__list">
        <ul id="mylist">
          <li><a href="#" class="nav__items">کوئرا لیست </a></li>
          <li><a href="#" class="nav__items active">صفحه اصلی</a></li>
          <li><a href="about.html" class="nav__items">درباره ما</a></li>
          <li><a href="contact.html" class="nav__items">تماس با ما</a></li>
        </ul>
      </nav>
      <div class="nav__left">
        <button class="nav__btn"><a href="#">ورود به اپلیکیشن</a></button>
        <div class="nav__dropdown">
          <button onclick="myFunction()" class="nav__dropdown-btn">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5856 17.1379V6.93105C12.5856 6.79312 12.5166 6.72415 12.3787 6.72415C9.41319 6.72415 7.06836 9.06898 7.06836 12.0345C7.06836 15 9.41319 17.3448 12.3787 17.3448C12.4477 17.4138 12.5856 17.2759 12.5856 17.1379Z"
                fill="#5C5F61"
              />
              <path
                d="M17.9653 11.8965C17.8274 9.34482 16.0343 7.27585 13.5515 6.86206C13.4136 6.86206 13.3446 6.93103 13.2756 7.06896C13.2756 7.13792 13.2756 7.20689 13.3446 7.27585C14.7929 8.3793 15.6894 10.1034 15.6894 11.9655C15.8963 13.9655 14.9998 15.8965 13.3446 17.069C13.2756 17.1379 13.2067 17.2759 13.2756 17.3448C13.3446 17.4138 13.4136 17.4138 13.4825 17.4138C13.4825 17.4138 13.4825 17.4138 13.5515 17.4138C16.1722 16.931 18.0343 14.5862 17.9653 11.8965Z"
                fill="#5C5F61"
              />
              <path
                d="M12.3105 5.55172C12.6553 5.55172 12.8622 5.27586 12.8622 5V1.55172C12.8622 1.2069 12.5864 1 12.3105 1C11.9657 1 11.7588 1.27586 11.7588 1.55172V4.93103C11.7588 5.27586 12.0347 5.55172 12.3105 5.55172Z"
                fill="#5C5F61"
              />
              <path
                d="M6.93066 7.4138C7.13756 7.62069 7.48239 7.62069 7.75825 7.4138C7.96515 7.2069 7.96515 6.86207 7.75825 6.58621L5.41342 4.24138C5.20653 4.03449 4.8617 4.03449 4.58584 4.24138C4.37894 4.44828 4.37894 4.79311 4.58584 5.06897L6.93066 7.4138Z"
                fill="#5C5F61"
              />
              <path
                d="M12.3105 18.5172C11.9657 18.5172 11.7588 18.7931 11.7588 19.069V22.4483C11.7588 22.7931 12.0347 23 12.3105 23C12.5864 23 12.8622 22.7241 12.8622 22.4483V19.069C12.9312 18.7931 12.6553 18.5172 12.3105 18.5172Z"
                fill="#5C5F61"
              />
              <path
                d="M7.34446 16.4483C7.20653 16.4483 7.06859 16.5172 6.93066 16.5862L4.58584 18.931C4.37894 19.1379 4.37894 19.4828 4.58584 19.7586C4.79273 19.9655 5.13756 19.9655 5.41342 19.7586L7.75825 17.4138C7.96515 17.2069 7.96515 16.8621 7.75825 16.5862C7.62032 16.5172 7.48239 16.4483 7.34446 16.4483Z"
                fill="#5C5F61"
              />
              <path
                d="M5.82759 12.0345C5.82759 11.6897 5.55172 11.4828 5.27586 11.4828H1.55172C1.2069 11.4828 1 11.7586 1 12.1034C1 12.3793 1.27586 12.6552 1.55172 12.6552H5.2069C5.55172 12.5862 5.82759 12.3793 5.82759 12.0345Z"
                fill="#5C5F61"
              />
              <path
                d="M19.2755 5.55173C18.5858 5.34484 18.4479 5.20691 18.31 4.31036C18.31 4.24139 18.241 4.17242 18.172 4.17242C18.1031 4.17242 18.0341 4.24139 18.0341 4.31036C17.8962 5.20691 17.7582 5.34484 17.0686 5.55173C16.9996 5.55173 16.9307 5.68967 16.9307 5.75863C16.9307 5.8276 16.9996 5.8276 17.0686 5.89656C17.7582 6.10346 17.8962 6.24139 18.0341 7.13794C18.0341 7.20691 18.1031 7.27587 18.172 7.27587C18.241 7.27587 18.31 7.20691 18.31 7.13794C18.4479 6.24139 18.5858 6.10346 19.2755 5.89656C19.3445 5.89656 19.4134 5.75863 19.4134 5.68967C19.3445 5.55173 19.3445 5.55173 19.2755 5.55173Z"
                fill="#5C5F61"
              />
              <path
                d="M19.2755 18.5172C18.5858 18.3104 18.4479 18.1724 18.31 17.2759C18.31 17.2069 18.241 17.1379 18.172 17.1379C18.1031 17.1379 18.0341 17.2069 18.0341 17.2759C17.8962 18.1724 17.7582 18.3104 17.0686 18.5172C16.9996 18.5172 16.9307 18.6552 16.9307 18.7241C16.9307 18.7931 16.9996 18.7931 17.0686 18.8621C17.7582 19.069 17.8962 19.2069 18.0341 20.1035C18.0341 20.1724 18.1031 20.2414 18.172 20.2414C18.241 20.2414 18.31 20.1724 18.31 20.1035C18.4479 19.2069 18.5858 19.069 19.2755 18.8621C19.3445 18.8621 19.4134 18.7931 19.4134 18.7241C19.4134 18.5862 19.3445 18.5172 19.2755 18.5172Z"
                fill="#5C5F61"
              />
              <path
                d="M22.5175 11.8276C21.552 11.5517 21.4141 11.2759 21.2072 10.1034C21.2072 10.0345 21.1382 9.96552 21.0692 9.96552C21.0003 9.96552 20.9313 10.0345 20.9313 10.1034C20.7244 11.2759 20.5175 11.4828 19.552 11.7586C19.483 11.7586 19.4141 11.8276 19.4141 11.9655C19.4141 12.0345 19.483 12.0345 19.483 12.1034C20.4485 12.3793 20.5865 12.6552 20.7934 13.8276C20.7934 13.8965 20.8623 13.9655 20.9313 13.9655C21.0003 13.9655 21.0692 13.8965 21.0692 13.8276C21.2761 12.6552 21.483 12.4483 22.4485 12.1724C22.5175 12.1724 22.5865 12.1034 22.5865 11.9655C22.5865 11.8965 22.5865 11.8276 22.5175 11.8276Z"
                fill="#5C5F61"
              />
            </svg>
          </button>
          <div id="myDropdown" class="nav__dropdown-content">
            <a href="#">
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
                  d="M11.9999 6.8555C9.1668 6.8555 6.87012 9.15218 6.87012 11.9853C6.87012 14.8184 9.1668 17.1151 11.9999 17.1151C14.833 17.1151 17.1297 14.8184 17.1297 11.9853C17.1297 9.15218 14.833 6.8555 11.9999 6.8555ZM5.37012 11.9853C5.37012 8.32375 8.33837 5.3555 11.9999 5.3555C15.6614 5.3555 18.6297 8.32375 18.6297 11.9853C18.6297 15.6468 15.6614 18.6151 11.9999 18.6151C8.33837 18.6151 5.37012 15.6468 5.37012 11.9853Z"
                  fill="#5C5F61"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.9999 1.93948C12.5522 1.93948 12.9999 2.3872 12.9999 2.93948V3.01185C12.9999 3.56413 12.5522 4.01185 11.9999 4.01185C11.4476 4.01185 10.9999 3.56413 10.9999 3.01185V2.93948C10.9999 2.3872 11.4476 1.93948 11.9999 1.93948ZM4.8341 4.81948C5.22462 4.42896 5.85779 4.42896 6.24831 4.81948L6.36591 4.93708C6.75643 5.3276 6.75643 5.96076 6.36591 6.35129C5.97538 6.74181 5.34222 6.74181 4.95169 6.35129L4.8341 6.23369C4.44357 5.84317 4.44357 5.21 4.8341 4.81948ZM19.1657 4.81948C19.5563 5.21001 19.5563 5.84318 19.1657 6.2337L19.0481 6.35129C18.6576 6.74181 18.0244 6.74181 17.6339 6.35128C17.2434 5.96076 17.2434 5.32759 17.6339 4.93707L17.7515 4.81948C18.1421 4.42895 18.7752 4.42896 19.1657 4.81948ZM1.9541 11.9853C1.9541 11.433 2.40182 10.9853 2.9541 10.9853H3.02647C3.57875 10.9853 4.02647 11.433 4.02647 11.9853C4.02647 12.5376 3.57875 12.9853 3.02647 12.9853H2.9541C2.40182 12.9853 1.9541 12.5376 1.9541 11.9853ZM19.9734 11.9853C19.9734 11.433 20.4211 10.9853 20.9734 10.9853H21.0457C21.598 10.9853 22.0457 11.433 22.0457 11.9853C22.0457 12.5376 21.598 12.9853 21.0457 12.9853H20.9734C20.4211 12.9853 19.9734 12.5376 19.9734 11.9853ZM6.3659 17.6193C6.75643 18.0098 6.75643 18.643 6.36591 19.0335L6.24832 19.1511C5.85779 19.5416 5.22463 19.5416 4.8341 19.1511C4.44358 18.7606 4.44357 18.1274 4.83409 17.7369L4.95169 17.6193C5.34221 17.2288 5.97538 17.2288 6.3659 17.6193ZM17.6339 17.6193C18.0244 17.2288 18.6576 17.2288 19.0481 17.6193L19.1657 17.7369C19.5563 18.1274 19.5563 18.7606 19.1657 19.1511C18.7752 19.5416 18.142 19.5416 17.7515 19.1511L17.6339 19.0335C17.2434 18.643 17.2434 18.0098 17.6339 17.6193ZM11.9999 19.9587C12.5522 19.9587 12.9999 20.4065 12.9999 20.9587V21.0311C12.9999 21.5834 12.5522 22.0311 11.9999 22.0311C11.4476 22.0311 10.9999 21.5834 10.9999 21.0311V20.9587C10.9999 20.4065 11.4476 19.9587 11.9999 19.9587Z"
                  fill="#5C5F61"
                />
              </svg>
              حالت روشن
            </a>
            <a href="#">
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
                  d="M10.4531 2.35651C11.0567 2.92408 10.9112 3.78313 10.6351 4.41723L10.6346 4.4184C10.2222 5.36102 9.99546 6.39431 10.0039 7.48732L10.0039 7.48998C10.0207 11.5459 13.3932 15.0084 17.524 15.1774L17.5246 15.1774C18.1346 15.2028 18.7176 15.1605 19.2836 15.0592C19.6627 14.9902 20.0353 14.9778 20.3713 15.0562C20.7141 15.1361 21.0594 15.3233 21.274 15.6744C21.4876 16.0239 21.4975 16.4148 21.417 16.7535C21.3378 17.087 21.1636 17.4135 20.9367 17.7209C18.9616 20.4231 15.6737 22.1339 12.0049 21.9748L12.0044 21.9748C6.7973 21.7458 2.43944 17.5811 2.07882 12.4289C1.74942 7.86208 4.45997 3.88545 8.39837 2.22456C9.03118 1.95654 9.8729 1.81093 10.4531 2.35651ZM9.36518 3.49126C9.27774 3.50302 9.15075 3.5348 8.98257 3.60611L8.98123 3.60668C5.59592 5.03433 3.29446 8.43675 3.57499 12.3217L3.57511 12.3234C3.88073 16.6955 7.60466 20.2796 12.0699 20.4762C15.2249 20.613 18.0397 19.1433 19.7267 16.8344L19.7291 16.8312C19.8307 16.6936 19.8907 16.5838 19.9246 16.5035C19.8393 16.4992 19.7168 16.5049 19.5514 16.5351L19.549 16.5355C18.8764 16.656 18.1838 16.7061 17.4627 16.6761C12.5499 16.4752 8.52483 12.374 8.50391 7.49753C8.49401 6.1869 8.76657 4.94596 9.26011 3.81768C9.32211 3.67519 9.352 3.56714 9.36518 3.49126ZM9.48777 3.48881C9.48775 3.48883 9.48728 3.48872 9.48639 3.48846L9.48777 3.48881Z"
                  fill="#5C5F61"
                />
              </svg>
              حالت تاریک</a
            >
            <a href="#">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5856 17.1379V6.93105C12.5856 6.79312 12.5166 6.72415 12.3787 6.72415C9.41319 6.72415 7.06836 9.06898 7.06836 12.0345C7.06836 15 9.41319 17.3448 12.3787 17.3448C12.4477 17.4138 12.5856 17.2759 12.5856 17.1379Z"
                  fill="#5C5F61"
                />
                <path
                  d="M17.9653 11.8965C17.8274 9.34482 16.0343 7.27585 13.5515 6.86206C13.4136 6.86206 13.3446 6.93103 13.2756 7.06896C13.2756 7.13792 13.2756 7.20689 13.3446 7.27585C14.7929 8.3793 15.6894 10.1034 15.6894 11.9655C15.8963 13.9655 14.9998 15.8965 13.3446 17.069C13.2756 17.1379 13.2067 17.2759 13.2756 17.3448C13.3446 17.4138 13.4136 17.4138 13.4825 17.4138C13.4825 17.4138 13.4825 17.4138 13.5515 17.4138C16.1722 16.931 18.0343 14.5862 17.9653 11.8965Z"
                  fill="#5C5F61"
                />
                <path
                  d="M12.3105 5.55172C12.6553 5.55172 12.8622 5.27586 12.8622 5V1.55172C12.8622 1.2069 12.5864 1 12.3105 1C11.9657 1 11.7588 1.27586 11.7588 1.55172V4.93103C11.7588 5.27586 12.0347 5.55172 12.3105 5.55172Z"
                  fill="#5C5F61"
                />
                <path
                  d="M6.93066 7.4138C7.13756 7.62069 7.48239 7.62069 7.75825 7.4138C7.96515 7.2069 7.96515 6.86207 7.75825 6.58621L5.41342 4.24138C5.20653 4.03449 4.8617 4.03449 4.58584 4.24138C4.37894 4.44828 4.37894 4.79311 4.58584 5.06897L6.93066 7.4138Z"
                  fill="#5C5F61"
                />
                <path
                  d="M12.3105 18.5172C11.9657 18.5172 11.7588 18.7931 11.7588 19.069V22.4483C11.7588 22.7931 12.0347 23 12.3105 23C12.5864 23 12.8622 22.7241 12.8622 22.4483V19.069C12.9312 18.7931 12.6553 18.5172 12.3105 18.5172Z"
                  fill="#5C5F61"
                />
                <path
                  d="M7.34446 16.4483C7.20653 16.4483 7.06859 16.5172 6.93066 16.5862L4.58584 18.931C4.37894 19.1379 4.37894 19.4828 4.58584 19.7586C4.79273 19.9655 5.13756 19.9655 5.41342 19.7586L7.75825 17.4138C7.96515 17.2069 7.96515 16.8621 7.75825 16.5862C7.62032 16.5172 7.48239 16.4483 7.34446 16.4483Z"
                  fill="#5C5F61"
                />
                <path
                  d="M5.82759 12.0345C5.82759 11.6897 5.55172 11.4828 5.27586 11.4828H1.55172C1.2069 11.4828 1 11.7586 1 12.1034C1 12.3793 1.27586 12.6552 1.55172 12.6552H5.2069C5.55172 12.5862 5.82759 12.3793 5.82759 12.0345Z"
                  fill="#5C5F61"
                />
                <path
                  d="M19.2755 5.55173C18.5858 5.34484 18.4479 5.20691 18.31 4.31036C18.31 4.24139 18.241 4.17242 18.172 4.17242C18.1031 4.17242 18.0341 4.24139 18.0341 4.31036C17.8962 5.20691 17.7582 5.34484 17.0686 5.55173C16.9996 5.55173 16.9307 5.68967 16.9307 5.75863C16.9307 5.8276 16.9996 5.8276 17.0686 5.89656C17.7582 6.10346 17.8962 6.24139 18.0341 7.13794C18.0341 7.20691 18.1031 7.27587 18.172 7.27587C18.241 7.27587 18.31 7.20691 18.31 7.13794C18.4479 6.24139 18.5858 6.10346 19.2755 5.89656C19.3445 5.89656 19.4134 5.75863 19.4134 5.68967C19.3445 5.55173 19.3445 5.55173 19.2755 5.55173Z"
                  fill="#5C5F61"
                />
                <path
                  d="M19.2755 18.5172C18.5858 18.3104 18.4479 18.1724 18.31 17.2759C18.31 17.2069 18.241 17.1379 18.172 17.1379C18.1031 17.1379 18.0341 17.2069 18.0341 17.2759C17.8962 18.1724 17.7582 18.3104 17.0686 18.5172C16.9996 18.5172 16.9307 18.6552 16.9307 18.7241C16.9307 18.7931 16.9996 18.7931 17.0686 18.8621C17.7582 19.069 17.8962 19.2069 18.0341 20.1035C18.0341 20.1724 18.1031 20.2414 18.172 20.2414C18.241 20.2414 18.31 20.1724 18.31 20.1035C18.4479 19.2069 18.5858 19.069 19.2755 18.8621C19.3445 18.8621 19.4134 18.7931 19.4134 18.7241C19.4134 18.5862 19.3445 18.5172 19.2755 18.5172Z"
                  fill="#5C5F61"
                />
                <path
                  d="M22.5175 11.8276C21.552 11.5517 21.4141 11.2759 21.2072 10.1034C21.2072 10.0345 21.1382 9.96552 21.0692 9.96552C21.0003 9.96552 20.9313 10.0345 20.9313 10.1034C20.7244 11.2759 20.5175 11.4828 19.552 11.7586C19.483 11.7586 19.4141 11.8276 19.4141 11.9655C19.4141 12.0345 19.483 12.0345 19.483 12.1034C20.4485 12.3793 20.5865 12.6552 20.7934 13.8276C20.7934 13.8965 20.8623 13.9655 20.9313 13.9655C21.0003 13.9655 21.0692 13.8965 21.0692 13.8276C21.2761 12.6552 21.483 12.4483 22.4485 12.1724C22.5175 12.1724 22.5865 12.1034 22.5865 11.9655C22.5865 11.8965 22.5865 11.8276 22.5175 11.8276Z"
                  fill="#5C5F61"
                />
              </svg>
              پیروی از دستگاه</a
            >
          </div>
        </div>
      </div>
    </div>
  </header>
  `