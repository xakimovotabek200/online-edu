import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../assets/Logo.png";
import { ObjectContext } from '../../pages/shop/Context'

function Navabar() {
  const navigate = useNavigate();
  const { cart } = useContext(ObjectContext);
  return (
    <div className="container mx-auto w-[95%]">
      <div className="">
        <nav className="flex justify-around text-[#0A033C] text-lg">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
          <Link to="/shop">Shop</Link>
          <Link to="/" className="flex items-center">
            <select className="text-center bg-transparent flex" name="" id="">
              <option value="" className="">
                For Kindergarten
              </option>
            </select>
          </Link>

          <Link to="/" className="flex items-center">
            <select className="text-center bg-transparent flex" name="" id="">
              <option value=""> For Collage</option>
            </select>
          </Link>
          <select
            className="text-center bg-transparent flex"
            name=""
            id=""
            onChange={(e) => navigate(e.target.value)}
          >
            <option value={"/courses"}>Courses</option>
            <option value="/courses-details">Courses Details</option>
            <option value="/pricing">Pricing</option>
            <option value="/become">Become An Instructor</option>
            <option value="/our-mentors"> Our Mentors</option>
          </select>
          <Link to="/cart" className="flex items-center">
            Cart<p color="#fff">({cart.length})</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M23.75 8.75H20V7.5C20 6.17392 19.4732 4.90215 18.5355 3.96447C17.5979 3.02678 16.3261 2.5 15 2.5C13.6739 2.5 12.4021 3.02678 11.4645 3.96447C10.5268 4.90215 10 6.17392 10 7.5V8.75H6.25C5.91848 8.75 5.60054 8.8817 5.36612 9.11612C5.1317 9.35054 5 9.66848 5 10V23.75C5 24.7446 5.39509 25.6984 6.09835 26.4017C6.80161 27.1049 7.75544 27.5 8.75 27.5H21.25C22.2446 27.5 23.1984 27.1049 23.9017 26.4017C24.6049 25.6984 25 24.7446 25 23.75V10C25 9.66848 24.8683 9.35054 24.6339 9.11612C24.3995 8.8817 24.0815 8.75 23.75 8.75ZM12.5 7.5C12.5 6.83696 12.7634 6.20107 13.2322 5.73223C13.7011 5.26339 14.337 5 15 5C15.663 5 16.2989 5.26339 16.7678 5.73223C17.2366 6.20107 17.5 6.83696 17.5 7.5V8.75H12.5V7.5ZM22.5 23.75C22.5 24.0815 22.3683 24.3995 22.1339 24.6339C21.8995 24.8683 21.5815 25 21.25 25H8.75C8.41848 25 8.10054 24.8683 7.86612 24.6339C7.6317 24.3995 7.5 24.0815 7.5 23.75V11.25H10V12.5C10 12.8315 10.1317 13.1495 10.3661 13.3839C10.6005 13.6183 10.9185 13.75 11.25 13.75C11.5815 13.75 11.8995 13.6183 12.1339 13.3839C12.3683 13.1495 12.5 12.8315 12.5 12.5V11.25H17.5V12.5C17.5 12.8315 17.6317 13.1495 17.8661 13.3839C18.1005 13.6183 18.4185 13.75 18.75 13.75C19.0815 13.75 19.3995 13.6183 19.6339 13.3839C19.8683 13.1495 20 12.8315 20 12.5V11.25H22.5V23.75Z"
                fill="#FF6652"
              />
            </svg>
          </Link>
          <Link to="/" className="flex items-center">
            My Account
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M15.0002 2.5C12.5758 2.50461 10.205 3.21414 8.17672 4.54217C6.1484 5.87021 4.55005 7.75943 3.57636 9.97971C2.60267 12.2 2.29565 14.6555 2.69272 17.0472C3.08978 19.4389 4.17378 21.6635 5.81268 23.45C6.98321 24.7188 8.40386 25.7314 9.98511 26.424C11.5663 27.1166 13.2739 27.4742 15.0002 27.4742C16.7265 27.4742 18.434 27.1166 20.0153 26.424C21.5965 25.7314 23.0172 24.7188 24.1877 23.45C25.8266 21.6635 26.9106 19.4389 27.3077 17.0472C27.7047 14.6555 27.3977 12.2 26.424 9.97971C25.4503 7.75943 23.852 5.87021 21.8236 4.54217C19.7953 3.21414 17.4246 2.50461 15.0002 2.5ZM15.0002 25C12.4108 24.9961 9.92383 23.9878 8.06268 22.1875C8.62774 20.8119 9.58897 19.6354 10.8243 18.8074C12.0595 17.9793 13.5131 17.5373 15.0002 17.5373C16.4873 17.5373 17.9408 17.9793 19.1761 18.8074C20.4114 19.6354 21.3726 20.8119 21.9377 22.1875C20.0765 23.9878 17.5896 24.9961 15.0002 25ZM12.5002 12.5C12.5002 12.0055 12.6468 11.5222 12.9215 11.1111C13.1962 10.7 13.5867 10.3795 14.0435 10.1903C14.5003 10.0011 15.003 9.95157 15.4879 10.048C15.9729 10.1445 16.4183 10.3826 16.7679 10.7322C17.1176 11.0819 17.3557 11.5273 17.4521 12.0123C17.5486 12.4972 17.4991 12.9999 17.3099 13.4567C17.1207 13.9135 16.8002 14.304 16.3891 14.5787C15.978 14.8534 15.4946 15 15.0002 15C14.3371 15 13.7013 14.7366 13.2324 14.2678C12.7636 13.7989 12.5002 13.163 12.5002 12.5ZM23.6377 20C22.5208 18.0897 20.8019 16.6038 18.7502 15.775C19.3866 15.0533 19.8013 14.1633 19.9445 13.2118C20.0877 12.2603 19.9533 11.2876 19.5574 10.4106C19.1615 9.5336 18.5209 8.78945 17.7126 8.26746C16.9042 7.74547 15.9624 7.46781 15.0002 7.46781C14.0379 7.46781 13.0961 7.74547 12.2878 8.26746C11.4795 8.78945 10.8389 9.5336 10.443 10.4106C10.0471 11.2876 9.91267 12.2603 10.0558 13.2118C10.199 14.1633 10.6137 15.0533 11.2502 15.775C9.19843 16.6038 7.47952 18.0897 6.36268 20C5.47261 18.4839 5.00233 16.7581 5.00018 15C5.00018 12.3478 6.05375 9.8043 7.92912 7.92893C9.80448 6.05357 12.348 5 15.0002 5C17.6523 5 20.1959 6.05357 22.0713 7.92893C23.9466 9.8043 25.0002 12.3478 25.0002 15C24.998 16.7581 24.5278 18.4839 23.6377 20Z"
                fill="#9C4DF4"
              />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Navabar;
