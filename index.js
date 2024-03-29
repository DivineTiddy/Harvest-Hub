`use strict`;
const body = document.querySelector(`body`);

const html = `
<header id="Home">
<nav>
  <!--logo__and__category-->
  <div class="logo__and__category">
    <div class="logo">
      <svg
        width="37"
        height="36"
        viewBox="0 0 37 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.176 15.647C13.064 15.7157 12.9665 15.8057 12.8893 15.912C12.812 16.0183 12.7565 16.1388 12.7258 16.2666C12.6952 16.3944 12.69 16.527 12.7106 16.6568C12.7313 16.7866 12.7773 16.911 12.846 17.023C13.765 18.521 14.546 20.008 15.066 21.359C15.1612 21.6066 15.3509 21.8062 15.5933 21.914C15.8357 22.0217 16.1109 22.0288 16.3585 21.9335C16.6061 21.8383 16.8057 21.6487 16.9135 21.4063C17.0212 21.1639 17.0282 20.8886 16.933 20.641C16.355 19.137 15.507 17.536 14.551 15.977C14.4124 15.751 14.1897 15.5892 13.9319 15.5273C13.674 15.4654 13.4021 15.5085 13.176 15.647ZM23.59 14.693C23.804 14.8496 23.947 15.0847 23.9877 15.3466C24.0284 15.6086 23.9634 15.876 23.807 16.09C22.65 17.673 21.631 19.79 20.914 21.406C20.8607 21.5261 20.7843 21.6344 20.6891 21.7249C20.5939 21.8154 20.4818 21.8862 20.3592 21.9334C20.2367 21.9806 20.106 22.0032 19.9747 21.9998C19.8434 21.9965 19.7141 21.9674 19.594 21.914C19.474 21.8607 19.3656 21.7843 19.2752 21.6891C19.1847 21.5939 19.1138 21.4818 19.0666 21.3592C19.0195 21.2367 18.9969 21.106 19.0002 20.9747C19.0036 20.8434 19.0327 20.7141 19.086 20.594C19.81 18.964 20.9 16.678 22.193 14.91C22.3496 14.6961 22.5846 14.553 22.8466 14.5123C23.1086 14.4717 23.376 14.5366 23.59 14.693Z"
          fill="#00A205"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21.24 6.037C23.582 3.359 36.105 0 36.105 0C36.105 0 33.976 13.395 32.103 15.537C30.708 17.133 26.263 16.136 24.085 15.523C25.713 13.026 27.6 10.587 29.259 8.651C29.4283 8.44927 29.5111 8.18891 29.4896 7.92646C29.468 7.66401 29.3438 7.42064 29.144 7.2492C28.9441 7.07776 28.6846 6.99208 28.422 7.01077C28.1593 7.02945 27.9146 7.15099 27.741 7.349C26.068 9.301 24.129 11.799 22.431 14.396C21.477 12.62 19.388 8.155 21.24 6.037ZM5 24H0V36H5V33.957C6.02 33.915 7.526 33.861 8.047 33.882C9.834 33.955 11.167 34.381 12.517 34.812C13.775 35.213 15.046 35.619 16.709 35.746C17.127 35.778 17.534 35.819 17.929 35.858C19.352 36.002 20.615 36.13 21.659 35.746C22.991 35.256 30.605 31.529 31.557 30.548C32.509 29.568 32.033 26.92 29.082 27.41C27.626 27.652 25.939 28.348 24.408 28.979C22.837 29.626 21.431 30.206 20.611 30.156C18.993 30.058 14.711 29.274 14.711 29.274L19.628 29.334C19.628 29.334 20.323 29.37 21.278 28.685C22.233 28 23.086 26.037 21.658 26.037C20.231 26.037 18.708 25.547 18.708 25.547L12.616 24.174C12.616 24.174 10.522 23.782 9.666 24.174C8.96 24.497 6.018 25.551 5 25.914V24ZM2.878 3.67C2.878 3.67 13.213 6.442 15.145 8.651C16.638 10.358 15.029 13.913 14.219 15.443C13.1572 13.776 12.011 12.1642 10.785 10.614C10.7036 10.5109 10.6028 10.4249 10.4882 10.3608C10.3736 10.2966 10.2474 10.2557 10.117 10.2404C9.98661 10.225 9.85444 10.2355 9.72806 10.2712C9.60169 10.3069 9.48359 10.3671 9.3805 10.4485C9.27741 10.5299 9.19136 10.6307 9.12725 10.7453C9.06314 10.8599 9.02224 10.9861 9.00687 11.1165C8.9915 11.2469 9.00197 11.3791 9.03768 11.5054C9.07339 11.6318 9.13365 11.7499 9.215 11.853C10.4067 13.3598 11.5202 14.9269 12.551 16.548C10.683 17.054 7.281 17.751 6.181 16.492C4.635 14.724 2.878 3.669 2.878 3.669"
          fill="#00A205"
        />
      </svg>
      <p>HarvestHub</p>
    </div>
    <!--nav category-->

    <div class="category"></div>
    <!--menu bar icon-->
    <div class="menu__bar">
      <i class="bar__icon fa-solid fa-bars"></i>
    </div>
  </div>
  <button class="btn__contact">Contact</button>
  <!--menu bar icon-->
</nav>
<!--header text-->
<section class="header__text">
  <h2>Unlock the Future of Farming with HarvestHub</h2>
  <p>
    Explore a world where traditional farming meets cutting-edge
    solutions, creating a synergy that propels agriculture into a
    brighter, more efficient future.
  </p>
  <button>Learn More</button>
</section>
</header>
<main>
<section id="about" class="our__story__section"></section>
<section class="choose__section">
  <h3>Why Choose HarvestHub ?</h3>
  <div class="choose__category_container">
    <div class="first__row">
      <div class="choose__category">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1_155)">
            <path
              d="M16.1775 20.8125C14.8726 21.4334 13.4451 21.7538 12 21.75C6.62402 21.75 2.25002 17.376 2.25002 12C2.25002 9.69375 3.04277 7.51575 4.50002 5.769V7.5H6.00002V3H1.50002V4.5H3.63152C1.77202 6.55483 0.744713 9.22871 0.75002 12C0.75002 18.2032 5.79677 23.25 12 23.25C13.6683 23.2542 15.3163 22.8841 16.8225 22.167L16.1775 20.8125Z"
              fill="#00A205"
            />
            <path
              d="M15.75 6.75C13.38 6.75 11.4368 8.59275 11.2665 10.92C10.4419 10.1677 9.36617 9.75045 8.25 9.75H5.25V12.75C5.25 15.2318 7.269 17.25 9.75 17.25H11.25V20.25H12.75V14.25H14.25C16.731 14.25 18.75 12.2318 18.75 9.75V6.75H15.75ZM9.75 15.75C8.0955 15.75 6.75 14.4045 6.75 12.75V11.25H8.25C9.9045 11.25 11.25 12.5955 11.25 14.25V14.6895L9.53025 12.9697L8.46975 14.0303L10.1895 15.75H9.75ZM17.25 9.75C17.25 11.4045 15.9045 12.75 14.25 12.75H13.8105L15.5303 11.0302L14.4697 9.96975L12.75 11.6895V11.25C12.75 9.5955 14.0955 8.25 15.75 8.25H17.25V9.75Z"
              fill="#00A205"
            />
            <path
              d="M23.25 12C23.25 5.79679 18.2032 0.750036 12 0.750036C10.3317 0.745799 8.68376 1.11589 7.17749 1.83304L7.82249 3.18754C9.12738 2.56662 10.5549 2.24626 12 2.25004C17.376 2.25004 21.75 6.62404 21.75 12C21.75 14.3063 20.9572 16.4843 19.5 18.231V16.5H18V21H22.5V19.5H20.3685C22.228 17.4452 23.2553 14.7713 23.25 12Z"
              fill="#00A205"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_155">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <h4>Sustainable Solutions</h4>
        <p>
          Embrace eco-friendly practices with our range of sustainable
          farming solutions. From organic fertilizers to water
          conservation techniques, we empower farmers to cultivate
          responsibly.
        </p>
      </div>
      <div class="chick_for_mobile choose__category">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 18H14.82C14.6707 17.5806 14.4299 17.1997 14.1151 16.8849C13.8003 16.5701 13.4194 16.3293 13 16.18V13H20C20.2652 13 20.5196 12.8946 20.7071 12.7071C20.8946 12.5196 21 12.2652 21 12C21 11.7348 20.8946 11.4804 20.7071 11.2929C20.5196 11.1054 20.2652 11 20 11H19V5C19 4.20435 18.6839 3.44129 18.1213 2.87868C17.5587 2.31607 16.7956 2 16 2H8C7.20435 2 6.44129 2.31607 5.87868 2.87868C5.31607 3.44129 5 4.20435 5 5V11H4C3.73478 11 3.48043 11.1054 3.29289 11.2929C3.10536 11.4804 3 11.7348 3 12C3 12.2652 3.10536 12.5196 3.29289 12.7071C3.48043 12.8946 3.73478 13 4 13H11V16.18C10.5806 16.3293 10.1997 16.5701 9.8849 16.8849C9.57011 17.1997 9.32932 17.5806 9.18 18H3C2.73478 18 2.48043 18.1054 2.29289 18.2929C2.10536 18.4804 2 18.7348 2 19C2 19.2652 2.10536 19.5196 2.29289 19.7071C2.48043 19.8946 2.73478 20 3 20H9.18C9.3902 20.5792 9.77363 21.0795 10.2782 21.4332C10.7827 21.7868 11.3839 21.9765 12 21.9765C12.6161 21.9765 13.2173 21.7868 13.7218 21.4332C14.2264 21.0795 14.6098 20.5792 14.82 20H21C21.2652 20 21.5196 19.8946 21.7071 19.7071C21.8946 19.5196 22 19.2652 22 19C22 18.7348 21.8946 18.4804 21.7071 18.2929C21.5196 18.1054 21.2652 18 21 18ZM7 11V5C7 4.73478 7.10536 4.48043 7.29289 4.29289C7.48043 4.10536 7.73478 4 8 4H16C16.2652 4 16.5196 4.10536 16.7071 4.29289C16.8946 4.48043 17 4.73478 17 5V11H7ZM12 20C11.8022 20 11.6089 19.9414 11.4444 19.8315C11.28 19.7216 11.1518 19.5654 11.0761 19.3827C11.0004 19.2 10.9806 18.9989 11.0192 18.8049C11.0578 18.6109 11.153 18.4327 11.2929 18.2929C11.4327 18.153 11.6109 18.0578 11.8049 18.0192C11.9989 17.9806 12.2 18.0004 12.3827 18.0761C12.5654 18.1518 12.7216 18.28 12.8315 18.4444C12.9414 18.6089 13 18.8022 13 19C13 19.2652 12.8946 19.5196 12.7071 19.7071C12.5196 19.8946 12.2652 20 12 20Z"
            fill="#00A205"
          />
        </svg>
        <h4>Smart Farming Technologies</h4>
        <p>
          Discover the power of precision agriculture with our
          state-of-the-art technologies. Monitor crops in real-time,
          optimize resource usage, and make data-driven decisions to
          maximize yields..
        </p>
      </div>
    </div>
    <!--second__row-->
    <div class="chick first__row">
      <div class="choose__category">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.59 17.7408C14.9612 18.162 13.3126 19.0221 14.3167 20.0983C14.8072 20.624 15.3536 21 16.0404 21H18H19.9596C20.6464 21 21.1928 20.624 21.6833 20.0983C22.6874 19.0221 21.0388 18.162 20.41 17.7408C18.9355 16.7531 17.0645 16.7531 15.59 17.7408Z"
            stroke="#00A205"
            stroke-width="1.5"
          />
          <path
            d="M20 12.5C20 13.6046 19.1046 14.5 18 14.5C16.8954 14.5 16 13.6046 16 12.5C16 11.3954 16.8954 10.5 18 10.5C19.1046 10.5 20 11.3954 20 12.5Z"
            stroke="#00A205"
            stroke-width="1.5"
          />
          <path
            d="M10 6H15M10 3H18"
            stroke="#00A205"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7 9.5V14C7 14.9428 7 15.4142 6.70711 15.7071C6.41421 16 5.94281 16 5 16H4C3.05719 16 2.58579 16 2.29289 15.7071C2 15.4142 2 14.9428 2 14V11.5C2 10.5572 2 10.0858 2.29289 9.79289C2.58579 9.5 3.05719 9.5 4 9.5H7ZM7 9.5H12"
            stroke="#00A205"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.5 5C6.5 6.10457 5.60457 7 4.5 7C3.39543 7 2.5 6.10457 2.5 5C2.5 3.89543 3.39543 3 4.5 3C5.60457 3 6.5 3.89543 6.5 5Z"
            stroke="#00A205"
            stroke-width="1.5"
          />
        </svg>
        <h4>Expert Guidance</h4>
        <p>
          Access a wealth of knowledge from seasoned agronomists and
          industry experts. Our team is dedicated to providing
          personalized advice, ensuring your farm reaches its full
          potential.
        </p>
      </div>
      <div class="choose__category">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 5.25C6 4.85218 6.15804 4.47064 6.43934 4.18934C6.72064 3.90804 7.10218 3.75 7.5 3.75C7.89782 3.75 8.27936 3.90804 8.56066 4.18934C8.84196 4.47064 9 4.85218 9 5.25C9 5.64782 8.84196 6.02936 8.56066 6.31066C8.27936 6.59196 7.89782 6.75 7.5 6.75C7.10218 6.75 6.72064 6.59196 6.43934 6.31066C6.15804 6.02936 6 5.64782 6 5.25ZM7.5 2.25C6.70435 2.25 5.94129 2.56607 5.37868 3.12868C4.81607 3.69129 4.5 4.45435 4.5 5.25C4.5 6.04565 4.81607 6.80871 5.37868 7.37132C5.94129 7.93393 6.70435 8.25 7.5 8.25C8.29565 8.25 9.05871 7.93393 9.62132 7.37132C10.1839 6.80871 10.5 6.04565 10.5 5.25C10.5 4.45435 10.1839 3.69129 9.62132 3.12868C9.05871 2.56607 8.29565 2.25 7.5 2.25ZM3.375 9.75C2.87772 9.75 2.40081 9.94754 2.04917 10.2992C1.69754 10.6508 1.5 11.1277 1.5 11.625V11.8125C1.5 12.0188 1.5 13.1963 2.2905 14.3325C2.85825 15.1485 3.77775 15.8678 5.21475 16.2375C5.50446 15.6837 5.9592 15.2337 6.516 14.9498C4.7685 14.7615 3.93825 14.0745 3.522 13.476C3.18699 12.9855 3.0053 12.4065 3 11.8125V11.625C3 11.5255 3.03951 11.4302 3.10984 11.3598C3.18016 11.2895 3.27554 11.25 3.375 11.25H7.875C7.875 10.7205 7.97475 10.215 8.15625 9.75H3.375ZM21.7095 14.3325C21.1417 15.1485 20.2222 15.8678 18.7853 16.2375C18.4955 15.6837 18.0408 15.2337 17.484 14.9498C19.2315 14.7615 20.0618 14.0745 20.478 13.476C20.813 12.9855 20.9947 12.4065 21 11.8125V11.625C21 11.5255 20.9605 11.4302 20.8902 11.3598C20.8198 11.2895 20.7245 11.25 20.625 11.25H16.125C16.125 10.7205 16.0253 10.215 15.8438 9.75H20.625C21.1223 9.75 21.5992 9.94754 21.9508 10.2992C22.3025 10.6508 22.5 11.1277 22.5 11.625V11.8125C22.5 12.0188 22.5 13.1963 21.7095 14.3325ZM15 5.25C15 4.85218 15.158 4.47064 15.4393 4.18934C15.7206 3.90804 16.1022 3.75 16.5 3.75C16.8978 3.75 17.2794 3.90804 17.5607 4.18934C17.842 4.47064 18 4.85218 18 5.25C18 5.64782 17.842 6.02936 17.5607 6.31066C17.2794 6.59196 16.8978 6.75 16.5 6.75C16.1022 6.75 15.7206 6.59196 15.4393 6.31066C15.158 6.02936 15 5.64782 15 5.25ZM16.5 2.25C15.7044 2.25 14.9413 2.56607 14.3787 3.12868C13.8161 3.69129 13.5 4.45435 13.5 5.25C13.5 6.04565 13.8161 6.80871 14.3787 7.37132C14.9413 7.93393 15.7044 8.25 16.5 8.25C17.2956 8.25 18.0587 7.93393 18.6213 7.37132C19.1839 6.80871 19.5 6.04565 19.5 5.25C19.5 4.45435 19.1839 3.69129 18.6213 3.12868C18.0587 2.56607 17.2956 2.25 16.5 2.25ZM12 9.75C11.6022 9.75 11.2206 9.90804 10.9393 10.1893C10.658 10.4706 10.5 10.8522 10.5 11.25C10.5 11.6478 10.658 12.0294 10.9393 12.3107C11.2206 12.592 11.6022 12.75 12 12.75C12.3978 12.75 12.7794 12.592 13.0607 12.3107C13.342 12.0294 13.5 11.6478 13.5 11.25C13.5 10.8522 13.342 10.4706 13.0607 10.1893C12.7794 9.90804 12.3978 9.75 12 9.75ZM9 11.25C9 10.4544 9.31607 9.69129 9.87868 9.12868C10.4413 8.56607 11.2044 8.25 12 8.25C12.7956 8.25 13.5587 8.56607 14.1213 9.12868C14.6839 9.69129 15 10.4544 15 11.25C15 12.0456 14.6839 12.8087 14.1213 13.3713C13.5587 13.9339 12.7956 14.25 12 14.25C11.2044 14.25 10.4413 13.9339 9.87868 13.3713C9.31607 12.8087 9 12.0456 9 11.25ZM6 17.625C6 17.1277 6.19754 16.6508 6.54917 16.2992C6.90081 15.9475 7.37772 15.75 7.875 15.75H16.125C16.3712 15.75 16.615 15.7985 16.8425 15.8927C17.07 15.987 17.2767 16.1251 17.4508 16.2992C17.6249 16.4733 17.763 16.68 17.8573 16.9075C17.9515 17.135 18 17.3788 18 17.625V17.8125C18 18.0188 18 19.1963 17.2095 20.3325C16.3845 21.5182 14.817 22.5 12 22.5C9.18375 22.5 7.6155 21.5182 6.7905 20.3325C6 19.1963 6 18.0195 6 17.8125V17.625ZM7.875 17.25C7.77554 17.25 7.68016 17.2895 7.60983 17.3598C7.53951 17.4302 7.5 17.5255 7.5 17.625V17.8125C7.5 17.9362 7.50075 18.7275 8.022 19.476C8.5095 20.1772 9.567 21 12 21C14.4338 21 15.4905 20.1772 15.978 19.476C16.313 18.9855 16.4947 18.4065 16.5 17.8125V17.625C16.5 17.5255 16.4605 17.4302 16.3902 17.3598C16.3198 17.2895 16.2245 17.25 16.125 17.25H7.875Z"
            fill="#00A205"
          />
        </svg>
        <h4>Community Collaboration</h4>
        <p>
          Join a thriving community of farmers, researchers, and
          agri-enthusiasts. Share experiences, learn from others, and
          contribute to the collective growth of agriculture.
        </p>
      </div>
    </div>
  </div>
</section>
<!--background image-->
<section class="background_image_section">
  <div class="background_image"></div>
</section>
<!--Featured Services-->
<section id="services" class="Featured__Services"></section>
<!--What Our Customer say-->
<section class="Customer__say">
  <h3>What Our Customer say</h3>
  <div class="what__customer__say profile__one">
    <div class="profile__container">
      <p>
        "HarvestHub has truly transformed my farming experience. The
        sustainable practices and advanced technologies provided by the
        platform have significantly increased the efficiency of my
        operations."
      </p>
      <div class="img__profile">
        <img src="Avatar_1.jpg" alt="Avatar_1.jpg" />
        <div>
          <h4>Biola Fawaz</h4>
          <p>Farmer</p>
        </div>
      </div>
    </div>
    <div class="profile__container">
      <p>
        "I can't emphasize enough how HarvestHub has elevated my farming
        practices. The precision farming tools have streamlined my
        operations, and the sustainable solutions have allowed me to
        contribute to environmental conservation."
      </p>
      <div class="img__profile">
        <img src="Avatar2.jpg" alt="Avatar2.jpg" />

        <div>
          <h4>Biola Fawaz</h4>
          <p>Farmer</p>
        </div>
      </div>
    </div>
  </div>
  <div class="what__customer__say profile__two">
    <div class="profile__container">
      <p>
        "I can't emphasize enough how HarvestHub has elevated my farming
        practices. The precision farming tools have streamlined my
        operations, and the sustainable solutions have allowed me to
        contribute to environmental conservation."
      </p>
      <div class="img__profile">
        <img src="Avatar2.jpg" alt="Avatar2.jpg" />

        <div>
          <h4>Biola Fawaz</h4>
          <p>Farmer</p>
        </div>
      </div>
    </div>
    <div class="profile__container">
      <p>
        "I can't emphasize enough how HarvestHub has elevated my farming
        practices. The precision farming tools have streamlined my
        operations, and the sustainable solutions have allowed me to
        contribute to environmental conservation."
      </p>
      <div class="img__profile">
        <img src="Avatar2.jpg" alt="Avatar2.jpg" />

        <div>
          <h4>Biola Fawaz</h4>
          <p>Farmer</p>
        </div>
      </div>
    </div>
  </div>
  <div class="what__customer__say profile__three">
    <div class="profile__container">
      <p>
        "I can't emphasize enough how HarvestHub has elevated my farming
        practices. The precision farming tools have streamlined my
        operations, and the sustainable solutions have allowed me to
        contribute to environmental conservation."
      </p>
      <div class="img__profile">
        <img src="Avatar_1.jpg" alt="Avatar_1.jpg" />
        <div>
          <h4>Biola Fawaz</h4>
          <p>Farmer</p>
        </div>
      </div>
    </div>
    <div class="profile__container">
      <p>
        "HarvestHub has truly transformed my farming experience. The
        sustainable practices and advanced technologies provided by the
        platform have significantly increased the efficiency of my
        operations."
      </p>
      <div class="img__profile">
        <img src="Avatar_1.jpg" alt="Avatar_1.jpg" />
        <div>
          <h4>Biola Fawaz</h4>
          <p>Farmer</p>
        </div>
      </div>
    </div>
  </div>
</section>
<div class="slider_conteiner">
  <div class="slider">
    <div
      class="slider__indecate_1 slider__indecate indecate_active slider__indecate_1_active"
    ></div>
    <div class="slider__indecate_2 slider__indecate"></div>
    <div class="slider__indecate_3 slider__indecate"></div>
  </div>
  <div class="slider btn">
    <button class="slider__btn slider__right">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
          fill="#00A205"
        />
      </svg>
    </button>
    <button class="slider__btn slider__left">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
          fill="#00A205"
        />
      </svg>
    </button>
  </div>
</div>
<!--Blog section-->
<section id="blog" class="Blog">
  <h2>Blog</h2>
  <div class="Blog__profile__container">
    <div class="Blog__profile">
      <img src="profile_1.jpg" alt="Blog__profile__1" />
      <p>5 min read</p>
      <h3>Sustainable Practices Workshop Recap</h3>
      <p>
        Recap the highlights from our recent workshop on sustainable
        farming practices. Gain insights into eco-friendly fertilizers,
        water conservation techniques, and holistic approaches to farm
        management
      </p>
      <button class="Read__more__btn">
        Read more&nbsp;<svg
          width="8"
          height="13"
          viewBox="0 0 8 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.96028 6.14234C7.17996 6.36202 7.17996 6.71812 6.96028 6.93779L1.22541 12.6727C1.00573 12.8923 0.649631 12.8923 0.429956 12.6727L0.164756 12.4075C-0.0549187 12.1878 -0.0549187 11.8317 0.164756 11.612L5.23671 6.54007L0.164756 1.46812C-0.0549186 1.24844 -0.0549186 0.892341 0.164756 0.672667L0.429956 0.407467C0.649631 0.187792 1.00573 0.187792 1.22541 0.407467L6.96028 6.14234Z"
            fill="#1E1E1E"
          />
        </svg>
      </button>
    </div>
    <div class="Blog__profile Blog__profile__2">
      <img src="profile_2.jpg" alt="Blog__profile__2" />
      <p>5 min read</p>
      <h3>Unlocking the Power of Precision Agriculture</h3>
      <p>
        Discover how precision agriculture is reshaping the farming
        landscape. From GPS-guided tractors to real-time data analytics,
        learn how these technologies are revolutionizing crop management
        and increasing yields.
      </p>
      <button class="Read__more__btn">
        Read more&nbsp;<svg
          width="8"
          height="13"
          viewBox="0 0 8 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.96028 6.14234C7.17996 6.36202 7.17996 6.71812 6.96028 6.93779L1.22541 12.6727C1.00573 12.8923 0.649631 12.8923 0.429956 12.6727L0.164756 12.4075C-0.0549187 12.1878 -0.0549187 11.8317 0.164756 11.612L5.23671 6.54007L0.164756 1.46812C-0.0549186 1.24844 -0.0549186 0.892341 0.164756 0.672667L0.429956 0.407467C0.649631 0.187792 1.00573 0.187792 1.22541 0.407467L6.96028 6.14234Z"
            fill="#1E1E1E"
          />
        </svg>
      </button>
    </div>
  </div>

  <!------------------------->
  <div
    class="Blog__profile__container Blog__profile__container__section__two"
  >
    <div class="Blog__profile">
      <img src="photo3.jpg" alt="Blog__profile__1" />
      <p>5 min read</p>
      <h3>Sustainable Practices Workshop Recap</h3>
      <p>
        Recap the highlights from our recent workshop on sustainable
        farming practices. Gain insights into eco-friendly fertilizers,
        water conservation techniques, and holistic approaches to farm
        management
      </p>
      <button class="Read__more__btn">
        Read more&nbsp;<svg
          width="8"
          height="13"
          viewBox="0 0 8 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.96028 6.14234C7.17996 6.36202 7.17996 6.71812 6.96028 6.93779L1.22541 12.6727C1.00573 12.8923 0.649631 12.8923 0.429956 12.6727L0.164756 12.4075C-0.0549187 12.1878 -0.0549187 11.8317 0.164756 11.612L5.23671 6.54007L0.164756 1.46812C-0.0549186 1.24844 -0.0549186 0.892341 0.164756 0.672667L0.429956 0.407467C0.649631 0.187792 1.00573 0.187792 1.22541 0.407467L6.96028 6.14234Z"
            fill="#1E1E1E"
          />
        </svg>
      </button>
    </div>
    <div class="Blog__profile Blog__profile__2">
      <img src="photo2.jpg" alt="Blog__profile__2" />
      <p>5 min read</p>
      <h3>Unlocking the Power of Precision Agriculture</h3>
      <p>
        Discover how precision agriculture is reshaping the farming
        landscape. From GPS-guided tractors to real-time data analytics,
        learn how these technologies are revolutionizing crop management
        and increasing yields.
      </p>
      <button class="Read__more__btn">
        Read more&nbsp;<svg
          width="8"
          height="13"
          viewBox="0 0 8 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.96028 6.14234C7.17996 6.36202 7.17996 6.71812 6.96028 6.93779L1.22541 12.6727C1.00573 12.8923 0.649631 12.8923 0.429956 12.6727L0.164756 12.4075C-0.0549187 12.1878 -0.0549187 11.8317 0.164756 11.612L5.23671 6.54007L0.164756 1.46812C-0.0549186 1.24844 -0.0549186 0.892341 0.164756 0.672667L0.429956 0.407467C0.649631 0.187792 1.00573 0.187792 1.22541 0.407467L6.96028 6.14234Z"
            fill="#1E1E1E"
          />
        </svg>
      </button>
    </div>
  </div>

  <div class="view__more">
    <button class="view__more__btn">
      <span class="view__more__text">view more</span
      ><span class="view__less">view less</span>
    </button>
  </div>
</section>
<section class="agrc__section">
  <h2>Driving Positive Change in Agriculture</h2>
  <button>Contact Us</button>
</section>
</main>
<footer>
<section class="social__media check"></section>
</footer>


`
body.insertAdjacentHTML(`afterbegin`,html)



//bar__icon
const nav = document.querySelector(`nav`);
const bar__icon = document.querySelector(`.bar__icon`);
const category = document.querySelector(`.category`);
bar__icon.addEventListener(`click`, function () {
  category.classList.toggle(`category__hidden`);
  // nav.classList.toggle(`nav_bg_color`);
  //bar__icon.classList.toggle(`bar__icon_hidden_color`);
});
//nav bar

const nav_bar = `
<ul>
<li ><a class="link Home_btn" href="#Home">Home</a></li>
<li ><a class="link about_btn" href="">About</a></li>
<li ><a class="link services_btn" href="">Services</a></li>
<li ><a class="link blog_btn" href="">Blog</a></li>
</ul>
  
    `;
category.insertAdjacentHTML(`afterbegin`, nav_bar);
// scrol behaviour
//Home_btn
const homeBtn = document.querySelector(`.Home_btn`);
const Home = document.querySelector(`#Home`);
homeBtn.addEventListener(`click`,function (e) {
  e.preventDefault();
 // const tagget = Home.getBoundingClientRect();
 Home.scrollIntoView({behavior:`smooth`})
  

  
})
//blog
const blog_btn = document.querySelector(`.blog_btn`);
const blog = document.querySelector(`#blog`);
blog_btn.addEventListener(`click`,function (e) {
  e.preventDefault();
  blog.scrollIntoView({behavior:`smooth`})

  
})
//services
const servicesBtn = document.querySelector(`.services_btn`);
const services = document.querySelector(`#services`);
servicesBtn.addEventListener(`click`,function (e) {
  e.preventDefault();
  services.scrollIntoView({behavior:`smooth`})


})

//about_btn
const about_btn = document.querySelector(`.about_btn`);
const about = document.querySelector(`#about`);
about_btn.addEventListener(`click`,function (e) {
  e.preventDefault()
  about.scrollIntoView({behavior:`smooth`})


})


// animate nav color
const link = document.querySelectorAll(`.link`);
const chick = document.querySelector(`.chick`);
window.addEventListener(`scroll`, animateNav);
//
//chick_for_mobile
const chick_for_mobile = document.querySelector(`.chick_for_mobile`);
window.addEventListener(`scroll`, animateNav);
function animateNav() {
  const x = (window.innerHeight / 4) * 7;
  const triggleheight = chick.getBoundingClientRect().top;
  if (x > triggleheight) {
    nav.classList.add(`nav_bg_color`);
    link.forEach((links) => {
      links.classList.add(`link__color`);
      bar__icon.classList.add(`bar__icon_hidden_color`);
      bar__icon.classList.add(`bar__icon_active`);
    });
  } else {
    nav.classList.remove(`nav_bg_color`);
    link.forEach((links) => {
      links.classList.remove(`link__color`);
      bar__icon.classList.remove(`bar__icon_hidden_color`);
      bar__icon.classList.remove(`bar__icon_active`);
      category.classList.remove(`category__hidden`);
    });
  }
}

//background image
let x = 0;
const background_image = document.querySelector(`.background_image`);

const show = function () {
  if (x === 0) {
    background_image.classList.add(`background_image_second`);
    x++;
  } else {
    background_image.classList.remove(`background_image_second`);

    background_image.classList.add(`background_image_first`);
    x--;
  }
};
setInterval(show, 7000);

//slider__left and Customer__say_content__container
const profile__three = document.querySelector(`.profile__three`);
const profile__one = document.querySelector(`.profile__one`);
const profile__two = document.querySelector(`.profile__two`);
const Customer__say_content__container = document.querySelector(
  `.Customer__say_content__container`
);
const slider__indecate_1 = document.querySelector(`.slider__indecate_1`);
const slider__indecate_2 = document.querySelector(`.slider__indecate_2`);
const slider__indecate_3 = document.querySelector(`.slider__indecate_3`);
const slider__left = document.querySelector(`.slider__left`);
const slider__right = document.querySelector(`.slider__right`);
const slider__indecate = document.querySelector(`.slider__indecate`);
/// right
let count = 0;

slider__right.addEventListener(`click`, function () {
  count--;
  if (count < 0) {
    count = displayLogic.length - 1;
  }
  forLeft();
  console.log(count);
});
/// left
slider__left.addEventListener(`click`, function () {
  count++;

  if (count > displayLogic.length - 1) {
    count = 0;
  }
  forLeft();
  console.log(count);
});

const displayLogic = [0, 1, 2];
//
function forLeft() {
  const show = displayLogic[count];
  if (show === displayLogic[0]) {
    slider__indecate_1.classList.add(`slider__indecate_1_active`);
    slider__indecate_3.classList.remove(`slider__indecate_3_active`);
    slider__indecate_2.classList.remove(`slider__indecate_2_active`);
    profile__three.classList.remove(`profile__three__active`);
    profile__one.classList.remove(`profile__one__active`);
    profile__two.classList.remove(`profile__two__active`);
  } else if (show === displayLogic[1]) {
    slider__indecate_3.classList.remove(`slider__indecate_3_active`);
    slider__indecate_1.classList.remove(`slider__indecate_1_active`);
    slider__indecate_2.classList.add(`slider__indecate_2_active`);
    profile__two.classList.add(`profile__two__active`);
    profile__one.classList.add(`profile__one__active`);
    profile__three.classList.remove(`profile__three__active`);
  } else if (show === displayLogic[2]) {
    slider__indecate_1.classList.remove(`slider__indecate_1_active`);
    slider__indecate_2.classList.remove(`slider__indecate_2_active`);
    slider__indecate_3.classList.add(`slider__indecate_3_active`);
    profile__two.classList.remove(`profile__two__active`);
    profile__three.classList.add(`profile__three__active`);
    profile__one.classList.add(`profile__one__active`);
  } else {
    count === 2;
  }
}
///view__more__btn
const view__more__text = document.querySelector(`.view__more__text`);
const view__less = document.querySelector(`.view__less`);
const Blog__profile__container__section__two = document.querySelector(
  `.Blog__profile__container__section__two`
);
const view__more__btn = document.querySelector(`.view__more__btn`);
view__more__btn.addEventListener(`click`, () => {
  Blog__profile__container__section__two.classList.toggle(
    `Blog__profile__container__section__two`
  );
  //view__more__btn.textContent = `view less`
  view__less.classList.toggle(`view__less`);
  view__more__text.classList.toggle(`view__more__text__active`);
});

// footer
const social__media = document.querySelector(`.social__media`);
const forSocial__media = `
<h1>
          HarvestHub
        </h1>
        <div class="social__media__category">
          <div>
            <h3>Company</h3>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Blog</a>

          </div>
          <div>
            <h3>Socials</h3>
            <a href="">Facebook</a>
            <a href="">Twitter</a>
            <a href="">Instagram</a>
            <a href="">Linkedin</a>
          </div>
          <div>
            <h3>Contact</h3>
            <a href="">Hello<br>@<br>Harvesthub</a>
            <a href="">21, Kofo Abayomi , Victoria Island, Lagos.</a>
          </div>

        </div>
        <p>All rights reserved ©2023 HarverstHub</p>


`;
social__media.insertAdjacentHTML(`afterbegin`, forSocial__media);
////////////////////////////////////////////////////////////////////////////////////////////

//choose__section
const our__story__section = document.querySelector(`.our__story__section`);
const forour__story__section = `
<h3>Our Story</h3>
<p>
  HarvestHub was born out of a passion for sustainable agriculture and a
  deep appreciation for the traditional practices that have sustained
  communities for generations. We recognized the need for a platform
  that seamlessly integrates time-tested farming wisdom with the latest
  advancements in technology.
</p>



`;
our__story__section.insertAdjacentHTML(`afterbegin`, forour__story__section);
//////////////////////////////////////////////////////////////////////////////////////////////
const Featured__Services = document.querySelector(`.Featured__Services`);
const forFeatured__Services = `
<h2>Featured Services</h2>
        <div class="Services__container">
          <div class="Services">
            <img class = "services__img"
              src="photo1.png"
              width="100%"
              height="60%"
              alt="photo_1"
              loading="lazy"
            />
            <h3>Precision Farming Tools</h3>
            <p class = "service__text">
              Enhance productivity and reduce waste with our precision farming
              tools. From GPS-guided tractors to sensor-based irrigation
              systems, we have the tools you need for efficient farming.
            </p>
          </div>
          <div class="Services">
            <img class = "services__img"
              src="photo2.jpg"
              width="100%"
              height="60%"
              alt="photo_1"
              loading="lazy"
            />
            <h3>Sustainable Practices Workshops</h3>
            <p class = "service__text">
              Participate in workshops and webinars to learn about the latest
              sustainable farming practices. Stay ahead of the curve and make a
              positive impact on the environment.
            </p>
          </div>
          <div class="Services">
            <img class = "services__img"
              src="photo3.jpg"
              width="100%"
              height="60%"
              alt="photo_1"
              loading="lazy"
            />
            <h3>Crop Monitoring and Analysis</h3>
            <p class = "service__text">
              Utilize cutting-edge technology to monitor crop health, detect
              diseases early, and optimize irrigation schedules. Our advanced
              analytics ensure you stay one step ahead in crop management.
            </p>
          </div>
        </div>

`;
Featured__Services.insertAdjacentHTML(`afterbegin`, forFeatured__Services);
///////////////////////////////////////////////////////////////////////////////////////
//Blog__profile__container
const Blog__profile__container = document.querySelector(
  `.Blog__profile__container`
);
const forBlog__profile__container = `



`;
Blog__profile__container.insertAdjacentHTML(
  `afterbegin`,
  forBlog__profile__container
);

//choose__category
const choose__category = document.querySelectorAll(`.choose__category`);
window.addEventListener(`scroll`, function () {
  const x = (window.innerHeight / 4) * 4;
  choose__category.forEach((choos) => {
    const tagget = choos.getBoundingClientRect().top;
    if (tagget < x) {
      choos.classList.add(`choose__category_active`);
    }
  });
});

// our__story__section

window.addEventListener(`scroll`,function () {
  const x = (window.innerHeight / 4) * 4;
  const tagget = our__story__section.getBoundingClientRect().top;
  if (tagget < x) {
    our__story__section.classList.add(`choose__category_active`)
  }


  
})

//services__img

const service__text = document.querySelectorAll(`.service__text`)
const services__img = document.querySelectorAll(`.services__img`)
window.addEventListener(`scroll`,function () {
  const x = (window.innerHeight / 4) * 4;
  services__img.forEach(img => {
    const tagget = img.getBoundingClientRect().top;
    if (tagget < x) {
      img.classList.add(`services__img__active`)
     
    }
    
  });
})
//service__text
window.addEventListener(`scroll`,function () {
  const x = (window.innerHeight / 4) * 4;
  service__text.forEach(serviceText => {
    const tagget = serviceText.getBoundingClientRect().top;
    if (tagget < x) {
      serviceText.classList.add(`service__text__active`)
     
    }
    
  });
})

//Blog__profile





