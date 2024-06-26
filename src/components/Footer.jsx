import React from "react";
import { Link } from "react-router-dom";
import logoFooter from "../assets/Flavor Crave Footer.png";


const Footer = () => {
  return (
    <div>
      <div className="flex flex-col bg-richblue items-center pt-12 pb-2 gap-16">
        <div className="flex flex-col gap-5 items-center">
          {/* Footer Logo */}
            <div>
              <Link to='/'>
                <img src={logoFooter} alt={"Footer Logo"} className="w-[150px] md:w-[300px]" />
              </Link>
            </div>

          {/* Social Icons */}
          <div className="flex gap-4 md:gap-11 justify-between items-center">
            {/* Facebook */}
            <div className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="35"
                height="35"
                viewBox="0 0 48 48"
                className="hover:scale-95 transition-all duration-300"
              >
                <linearGradient
                  id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
                  x1="9.993"
                  x2="40.615"
                  y1="9.993"
                  y2="40.615"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#2aa4f4"></stop>
                  <stop offset="1" stop-color="#007ad9"></stop>
                </linearGradient>
                <path
                  fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
                  d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                ></path>
                <path
                  fill="#fff"
                  d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                ></path>
              </svg>
              {/* <p className="absolute text-sm text-white w-fit">
                Follow us
              </p> */}
            </div>

            {/* Instagram */}
            <div className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="35"
                height="35"
                viewBox="0 0 48 48"
                className="hover:scale-95 transition-all duration-300"
              >
                <radialGradient
                  id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                  cx="19.38"
                  cy="42.035"
                  r="44.899"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#fd5"></stop>
                  <stop offset=".328" stop-color="#ff543f"></stop>
                  <stop offset=".348" stop-color="#fc5245"></stop>
                  <stop offset=".504" stop-color="#e64771"></stop>
                  <stop offset=".643" stop-color="#d53e91"></stop>
                  <stop offset=".761" stop-color="#cc39a4"></stop>
                  <stop offset=".841" stop-color="#c837ab"></stop>
                </radialGradient>
                <path
                  fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                  d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                ></path>
                <radialGradient
                  id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                  cx="11.786"
                  cy="5.54"
                  r="29.813"
                  gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#4168c9"></stop>
                  <stop
                    offset=".999"
                    stop-color="#4168c9"
                    stop-opacity="0"
                  ></stop>
                </radialGradient>
                <path
                  fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                  d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                ></path>
                <path
                  fill="#fff"
                  d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                ></path>
                <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
                <path
                  fill="#fff"
                  d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                ></path>
              </svg>
            </div>

            {/* Thread */}
            <div className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                className="hover:scale-95 transition-all duration-300"
              >
                <path
                  d="M18.429 11.587C18.3213 11.5354 18.2119 11.4857 18.1011 11.4382C17.9081 7.88258 15.9653 5.847 12.703 5.82617C12.6883 5.82608 12.6736 5.82608 12.6588 5.82608C10.7075 5.82608 9.08471 6.65897 8.08587 8.17457L9.88001 9.40531C10.6262 8.27322 11.7972 8.03187 12.6596 8.03187C12.6696 8.03187 12.6796 8.03187 12.6895 8.03197C13.7636 8.03881 14.5742 8.35112 15.0988 8.96016C15.4805 9.40355 15.7359 10.0163 15.8623 10.7896C14.91 10.6277 13.88 10.5779 12.779 10.6411C9.67737 10.8197 7.68341 12.6286 7.81733 15.1422C7.88529 16.4172 8.52047 17.5141 9.60579 18.2306C10.5234 18.8363 11.7053 19.1326 12.9336 19.0655C14.5557 18.9766 15.8282 18.3577 16.7159 17.226C17.3902 16.3667 17.8166 15.253 18.0049 13.8497C18.7779 14.3163 19.3508 14.9302 19.6673 15.6682C20.2053 16.9228 20.2367 18.9844 18.5545 20.6651C17.0807 22.1375 15.309 22.7745 12.6316 22.7941C9.66168 22.7721 7.41553 21.8197 5.95516 19.9632C4.58763 18.2247 3.88089 15.7138 3.85452 12.5C3.88089 9.28617 4.58763 6.77521 5.95516 5.03681C7.41553 3.18033 9.66164 2.22786 12.6316 2.20579C15.6231 2.22803 17.9084 3.18508 19.4247 5.05052C20.1682 5.96531 20.7287 7.11573 21.0982 8.45707L23.2007 7.89612C22.7528 6.24508 22.048 4.82236 21.0889 3.64245C19.145 1.25087 16.302 0.0254099 12.6389 0H12.6243C8.96863 0.0253216 6.1575 1.25544 4.26898 3.65616C2.58846 5.7925 1.7216 8.76507 1.69247 12.4912L1.69238 12.5L1.69247 12.5088C1.7216 16.2349 2.58846 19.2076 4.26898 21.3439C6.1575 23.7445 8.96863 24.9747 12.6243 25H12.6389C15.889 24.9775 18.1799 24.1266 20.0671 22.241C22.5363 19.7742 22.4619 16.6822 21.6481 14.784C21.0643 13.4228 19.9511 12.3172 18.429 11.587ZM12.8174 16.8629C11.4581 16.9395 10.0458 16.3293 9.97618 15.0224C9.92457 14.0534 10.6658 12.9721 12.9009 12.8433C13.1568 12.8286 13.408 12.8214 13.6548 12.8214C14.4666 12.8214 15.2261 12.9002 15.9166 13.0512C15.659 16.2676 14.1484 16.7898 12.8174 16.8629Z"
                  fill="white"
                />
              </svg>
            </div>

            {/* Youtube  */}
            <div className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="35"
                height="35"
                viewBox="0 0 48 48"
                className="hover:scale-95 transition-all duration-300"
              >
                <path
                  fill="#FF3D00"
                  d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
                ></path>
                <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
              </svg>
            </div>

            {/* X  */}
            <div className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                className="hover:scale-95 transition-all duration-300"
              >
                <path
                  d="M19.0902 1.98328H22.6042L14.9271 10.7577L23.9587 22.6978H16.887L11.3483 15.4562L5.01069 22.6978H1.49453L9.70599 13.3125L1.04199 1.98328H8.29315L13.2997 8.60237L19.0902 1.98328ZM17.8569 20.5945H19.8041L7.23511 3.97612H5.1456L17.8569 20.5945Z"
                  fill="white"
                />
              </svg>
            </div>

            {/* WhatsApp  */}
            <div className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="35"
                height="35"
                viewBox="0 0 48 48"
                className="hover:scale-95"
              >
                <path
                  fill="#fff"
                  d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                ></path>
                <path
                  fill="#fff"
                  d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                ></path>
                <path
                  fill="#cfd8dc"
                  d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                ></path>
                <path
                  fill="#40c351"
                  d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                ></path>
                <path
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="font-noticia font-normal leading-normal text-sm md:text-base text-white flex gap-3">
            <p className="hover:underline cursor-pointer">Terms and Conditions</p>
            <p>|</p>
            <p className="hover:underline cursor-pointer">Privacy Policy</p>
          </div>
        </div>

        <div className="flex gap-2 font-nokora font-normal leading-normal text-xs md:text-sm text-grey-text2">
          <p>Copyright © 2023 Flavor Crave.</p>
          <p>|</p>
          <p>All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
