import React, { useState, useContext } from 'react';
import bookcase from '../../../assets/bookscase.svg';
import { books } from '../../../data';
import { Link } from 'react-router-dom';
import './Shop.css';
import outline from '../../../assets/Outline.svg';
import { shopData } from './shopdata';
import Star1 from '../../../assets/star.svg';
import { ObjectContext } from './Context';


function Shop() {
  const [open, setOpen] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState('All', 'Kindergarten', 'High School', 'College')
  const { setCart } = useContext(ObjectContext);

  const toggleDropdown = () => {
    setOpen(!open)
  }
  const filterShopData = () => {
    if (selectedFilter === 'All') {
      return shopData;
    } else if (selectedFilter === 'Kindergarten') {
      return shopData.slice(1, 7);
    }
    else if (selectedFilter === 'High School') {
      return shopData.slice(1, 5);
    }
    else if (selectedFilter === 'College') {
      return shopData.slice(1, 3);
    }
    else {
      return shopData.filter((item) => item.category === selectedFilter);
    }
  };

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };
  const handleFilterClicks = (filter) => {
    setSelectedFilter(filter);
    console.log("Selected Filter:", filter);
    console.log("Filtered Shop Data:", filterShopData());
  };
  const handleFilterClickh = (filter) => {
    setSelectedFilter(filter);
    console.log("Selected Filter:", filter);
    console.log("Filtered Shop Data:", filterShopData());
  };
  const handleFilterClickc = (filter) => {
    setSelectedFilter(filter);
    console.log("Selected Filter:", filter);
    console.log("Filtered Shop Data:", filterShopData());
  };
  console.log(filterShopData, 'add');
  return (
    <div className='mx-auto container w-[95%]'>
      <div className='w-[1380px] h-[300px] rounded-[20px] bg-[#EFEBF5] mt-8 ml-10 flex'>
        <div className=' w-[50%]'>
          <h1 className=' text-6xl leading-[65px] font-semibold ml-[135px] mt-[85px] text-[#0A033C]'>Eduvi Online <br />
            Book Shop</h1>
        </div>
        <div className="w-[50%] flex items-center">
          <img className='w-[474px] h-[310px] mt-10' src={bookcase} alt="" />
        </div>
      </div>
      <div className=" w-[95%] h-[160vh] flex mt-[40px] ml-10">
        <div className='w-[30%]'>
          <h1 className=' text-4xl leading-normal font-semibold  text-[#0A033C]'>Popular Books</h1>
          {books.map((book) => (
            <div className="w-[400px] h-[140px] bg-white mt-5 rounded-xl flex" key={book.id}>
              <div className="w-[30%] h-[100%] flex items-center justify-center">
                <img src={book.image} alt="" />
              </div>
              <div className="w-[70%] h-[100%]">
                <div className="mt-[20px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="93" height="16" viewBox="0 0 93 16" fill="none">
                    <path d="M16.6399 6.04621C16.5352 5.70813 16.2478 5.46802 15.9078 5.43605L11.2898 4.99849L9.46371 0.538446C9.32906 0.211582 9.02241 0 8.68171 0C8.341 0 8.03435 0.211582 7.8997 0.53921L6.07361 4.99849L1.45485 5.43605C1.11549 5.46878 0.828859 5.70813 0.72351 6.04621C0.618161 6.38428 0.715453 6.75509 0.972173 6.98884L4.46286 10.1833L3.43353 14.9147C3.35822 15.2626 3.48761 15.6222 3.76423 15.8308C3.91292 15.9429 4.08687 16 4.26229 16C4.41354 16 4.56357 15.9575 4.69821 15.8734L8.68171 13.389L12.6637 15.8734C12.9551 16.0563 13.3224 16.0396 13.5984 15.8308C13.8752 15.6215 14.0045 15.2618 13.9291 14.9147L12.8998 10.1833L16.3905 6.98947C16.6472 6.75509 16.7453 6.38492 16.6399 6.04621Z" fill="#FFC107" />
                    <path d="M35.6399 6.04621C35.5352 5.70813 35.2478 5.46802 34.9078 5.43605L30.2898 4.99849L28.4637 0.538446C28.3291 0.211582 28.0224 0 27.6817 0C27.341 0 27.0344 0.211582 26.8997 0.53921L25.0736 4.99849L20.4549 5.43605C20.1155 5.46878 19.8289 5.70813 19.7235 6.04621C19.6182 6.38428 19.7155 6.75509 19.9722 6.98884L23.4629 10.1833L22.4335 14.9147C22.3582 15.2626 22.4876 15.6222 22.7642 15.8308C22.9129 15.9429 23.0869 16 23.2623 16C23.4135 16 23.5636 15.9575 23.6982 15.8734L27.6817 13.389L31.6637 15.8734C31.9551 16.0563 32.3224 16.0396 32.5984 15.8308C32.8752 15.6215 33.0045 15.2618 32.9291 14.9147L31.8998 10.1833L35.3905 6.98947C35.6472 6.75509 35.7453 6.38492 35.6399 6.04621Z" fill="#FFC107" />
                    <path d="M54.6399 6.04621C54.5352 5.70813 54.2478 5.46802 53.9078 5.43605L49.2898 4.99849L47.4637 0.538446C47.3291 0.211582 47.0224 0 46.6817 0C46.341 0 46.0344 0.211582 45.8997 0.53921L44.0736 4.99849L39.4549 5.43605C39.1155 5.46878 38.8289 5.70813 38.7235 6.04621C38.6182 6.38428 38.7155 6.75509 38.9722 6.98884L42.4629 10.1833L41.4335 14.9147C41.3582 15.2626 41.4876 15.6222 41.7642 15.8308C41.9129 15.9429 42.0869 16 42.2623 16C42.4135 16 42.5636 15.9575 42.6982 15.8734L46.6817 13.389L50.6637 15.8734C50.9551 16.0563 51.3224 16.0396 51.5984 15.8308C51.8752 15.6215 52.0045 15.2618 51.9291 14.9147L50.8998 10.1833L54.3905 6.98947C54.6472 6.75509 54.7453 6.38492 54.6399 6.04621Z" fill="#FFC107" />
                    <path d="M73.6399 6.04621C73.5352 5.70813 73.2478 5.46802 72.9078 5.43605L68.2898 4.99849L66.4637 0.538446C66.3291 0.211582 66.0224 0 65.6817 0C65.341 0 65.0344 0.211582 64.8997 0.53921L63.0736 4.99849L58.4549 5.43605C58.1155 5.46878 57.8289 5.70813 57.7235 6.04621C57.6182 6.38428 57.7155 6.75509 57.9722 6.98884L61.4629 10.1833L60.4335 14.9147C60.3582 15.2626 60.4876 15.6222 60.7642 15.8308C60.9129 15.9429 61.0869 16 61.2623 16C61.4135 16 61.5636 15.9575 61.6982 15.8734L65.6817 13.389L69.6637 15.8734C69.9551 16.0563 70.3224 16.0396 70.5984 15.8308C70.8752 15.6215 71.0045 15.2618 70.9291 14.9147L69.8998 10.1833L73.3905 6.98947C73.6472 6.75509 73.7453 6.38492 73.6399 6.04621Z" fill="#FFC107" />
                    <path d="M92.6399 6.04621C92.5352 5.70813 92.2478 5.46802 91.9078 5.43605L87.2898 4.99849L85.4637 0.538446C85.3291 0.211582 85.0224 0 84.6817 0C84.341 0 84.0344 0.211582 83.8997 0.53921L82.0736 4.99849L77.4549 5.43605C77.1155 5.46878 76.8289 5.70813 76.7235 6.04621C76.6182 6.38428 76.7155 6.75509 76.9722 6.98884L80.4629 10.1833L79.4335 14.9147C79.3582 15.2626 79.4876 15.6222 79.7642 15.8308C79.9129 15.9429 80.0869 16 80.2623 16C80.4135 16 80.5636 15.9575 80.6982 15.8734L84.6817 13.389L88.6637 15.8734C88.9551 16.0563 89.3224 16.0396 89.5984 15.8308C89.8752 15.6215 90.0045 15.2618 89.9291 14.9147L88.8998 10.1833L92.3905 6.98947C92.6472 6.75509 92.7453 6.38492 92.6399 6.04621Z" fill="#FFC107" />
                  </svg>
                </div>
                <h1 className="text-lg leading-[20px] font-semibold text-[#0A033C] mt-3">
                  {book.title}
                </h1>
                <p className="text-lg leading-[20px] font-semibold text-[#FF6652] mt-2">
                  {book.price}
                </p>
              </div>
            </div>
          ))}
          <p className=' text-xl leading-5 text-[#9C4DF4] font-medium mt-5 cursor-pointer'><Link to="/popularbooks">See more</Link></p>
          <h1 className=' text-4xl leading-normal font-semibold mt-10  text-[#0A033C]'>New Arrivals</h1>
          {books.map((book) => (
            <div className="w-[400px] h-[140px] bg-white mt-5 rounded-xl flex" key={book.id}>
              <div className="w-[30%] h-[100%] flex items-center justify-center">
                <img src={book.image} alt="" />
              </div>
              <div className="w-[70%] h-[100%]">
                <div className="mt-[20px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="93" height="16" viewBox="0 0 93 16" fill="none">
                    <path d="M16.6399 6.04621C16.5352 5.70813 16.2478 5.46802 15.9078 5.43605L11.2898 4.99849L9.46371 0.538446C9.32906 0.211582 9.02241 0 8.68171 0C8.341 0 8.03435 0.211582 7.8997 0.53921L6.07361 4.99849L1.45485 5.43605C1.11549 5.46878 0.828859 5.70813 0.72351 6.04621C0.618161 6.38428 0.715453 6.75509 0.972173 6.98884L4.46286 10.1833L3.43353 14.9147C3.35822 15.2626 3.48761 15.6222 3.76423 15.8308C3.91292 15.9429 4.08687 16 4.26229 16C4.41354 16 4.56357 15.9575 4.69821 15.8734L8.68171 13.389L12.6637 15.8734C12.9551 16.0563 13.3224 16.0396 13.5984 15.8308C13.8752 15.6215 14.0045 15.2618 13.9291 14.9147L12.8998 10.1833L16.3905 6.98947C16.6472 6.75509 16.7453 6.38492 16.6399 6.04621Z" fill="#FFC107" />
                    <path d="M35.6399 6.04621C35.5352 5.70813 35.2478 5.46802 34.9078 5.43605L30.2898 4.99849L28.4637 0.538446C28.3291 0.211582 28.0224 0 27.6817 0C27.341 0 27.0344 0.211582 26.8997 0.53921L25.0736 4.99849L20.4549 5.43605C20.1155 5.46878 19.8289 5.70813 19.7235 6.04621C19.6182 6.38428 19.7155 6.75509 19.9722 6.98884L23.4629 10.1833L22.4335 14.9147C22.3582 15.2626 22.4876 15.6222 22.7642 15.8308C22.9129 15.9429 23.0869 16 23.2623 16C23.4135 16 23.5636 15.9575 23.6982 15.8734L27.6817 13.389L31.6637 15.8734C31.9551 16.0563 32.3224 16.0396 32.5984 15.8308C32.8752 15.6215 33.0045 15.2618 32.9291 14.9147L31.8998 10.1833L35.3905 6.98947C35.6472 6.75509 35.7453 6.38492 35.6399 6.04621Z" fill="#FFC107" />
                    <path d="M54.6399 6.04621C54.5352 5.70813 54.2478 5.46802 53.9078 5.43605L49.2898 4.99849L47.4637 0.538446C47.3291 0.211582 47.0224 0 46.6817 0C46.341 0 46.0344 0.211582 45.8997 0.53921L44.0736 4.99849L39.4549 5.43605C39.1155 5.46878 38.8289 5.70813 38.7235 6.04621C38.6182 6.38428 38.7155 6.75509 38.9722 6.98884L42.4629 10.1833L41.4335 14.9147C41.3582 15.2626 41.4876 15.6222 41.7642 15.8308C41.9129 15.9429 42.0869 16 42.2623 16C42.4135 16 42.5636 15.9575 42.6982 15.8734L46.6817 13.389L50.6637 15.8734C50.9551 16.0563 51.3224 16.0396 51.5984 15.8308C51.8752 15.6215 52.0045 15.2618 51.9291 14.9147L50.8998 10.1833L54.3905 6.98947C54.6472 6.75509 54.7453 6.38492 54.6399 6.04621Z" fill="#FFC107" />
                    <path d="M73.6399 6.04621C73.5352 5.70813 73.2478 5.46802 72.9078 5.43605L68.2898 4.99849L66.4637 0.538446C66.3291 0.211582 66.0224 0 65.6817 0C65.341 0 65.0344 0.211582 64.8997 0.53921L63.0736 4.99849L58.4549 5.43605C58.1155 5.46878 57.8289 5.70813 57.7235 6.04621C57.6182 6.38428 57.7155 6.75509 57.9722 6.98884L61.4629 10.1833L60.4335 14.9147C60.3582 15.2626 60.4876 15.6222 60.7642 15.8308C60.9129 15.9429 61.0869 16 61.2623 16C61.4135 16 61.5636 15.9575 61.6982 15.8734L65.6817 13.389L69.6637 15.8734C69.9551 16.0563 70.3224 16.0396 70.5984 15.8308C70.8752 15.6215 71.0045 15.2618 70.9291 14.9147L69.8998 10.1833L73.3905 6.98947C73.6472 6.75509 73.7453 6.38492 73.6399 6.04621Z" fill="#FFC107" />
                    <path d="M92.6399 6.04621C92.5352 5.70813 92.2478 5.46802 91.9078 5.43605L87.2898 4.99849L85.4637 0.538446C85.3291 0.211582 85.0224 0 84.6817 0C84.341 0 84.0344 0.211582 83.8997 0.53921L82.0736 4.99849L77.4549 5.43605C77.1155 5.46878 76.8289 5.70813 76.7235 6.04621C76.6182 6.38428 76.7155 6.75509 76.9722 6.98884L80.4629 10.1833L79.4335 14.9147C79.3582 15.2626 79.4876 15.6222 79.7642 15.8308C79.9129 15.9429 80.0869 16 80.2623 16C80.4135 16 80.5636 15.9575 80.6982 15.8734L84.6817 13.389L88.6637 15.8734C88.9551 16.0563 89.3224 16.0396 89.5984 15.8308C89.8752 15.6215 90.0045 15.2618 89.9291 14.9147L88.8998 10.1833L92.3905 6.98947C92.6472 6.75509 92.7453 6.38492 92.6399 6.04621Z" fill="#FFC107" />
                  </svg>
                </div>
                <h1 className="text-lg leading-[20px] font-semibold text-[#0A033C] mt-3">
                  {book.title}
                </h1>
                <p className="text-lg leading-[20px] font-semibold text-[#FF6652] mt-2">
                  {book.price}
                </p>
              </div>
            </div>
          ))}
          <p className=' text-xl leading-5 text-[#9C4DF4] font-medium mt-5 cursor-pointer'><Link to="/popularbooks">See more</Link></p>
        </div>
        <div className='w-[70%]'>
          <button className='shop_all_books' onClick={() => handleFilterClick('All')}>
            All Books
          </button>
          <button className='kindergarten' onClick={() => handleFilterClicks('Kindergarten')}>
            Kindergarten
          </button>
          <button className='high_school' onClick={() => handleFilterClickh('High School')}>
            High School
          </button>
          <button className='college' onClick={() => handleFilterClickc('College')}>
            College
          </button>
          <div className="shop_serch_input">
            <div className="input_and_button_around">
              <input className='input_around_button' type="text" placeholder='Serach Class, Course, Book Name' />
              <button className='input_in_button'><img src={outline} alt="" /></button>
            </div>
            <button className="button_item">
              <div className='onclick' onClick={toggleDropdown}>
                <span className=' text-[#5d5a6f99]'>Sort by:</span> Latest
              </div>
              <ul className={`dropdown_menu ${open ? 'open' : ''}`}>
                <li><a href="#">Item 1</a></li>
                <li><a href="#">Item 2</a></li>
                <li><a href="#">Item 3</a></li>
              </ul>
            </button>
          </div>
          <div className="shopping_in_the_category">
            {filterShopData().map((item) => (
              <div className='shopping_img_divs' key={item.id}>
                <div className='img_oradigan_div'>
                  <img src={item.image} alt='' />
                </div>
                <p className='map_item_name'>{item.name}</p>
                <div className='yonma_yon'>
                  <p className='item_price_shop'>{item.price}</p>
                  <img src={Star1} alt='' />
                </div>
                <button
                  className='custom-btn btn-12'
                  onClick={() =>
                    setCart((prevCart) => [...prevCart, item])
                  }
                >
                  <span>Click!</span>
                  <span>Read More</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop