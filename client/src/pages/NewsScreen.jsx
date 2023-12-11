import React from 'react'
import Layout from './layouts/Layout'
import Navbar from '../components/Navbar'
import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import CardOneImage from '../assets/act-image.png';
import CardTwoImage from '../assets/companion-image.png';
import CardThreeImage from '../assets/carlton-image.png';

const NewsScreen = () => {
  return (
    <div>
      <Layout>
        <Navbar/>
        <div className=' border-white flex justify-between text-white bg-subheaderBg py-3 uppercase'>
            <div className='flex justify-center items-center pl-6'>
                <Link to='/appointment'>
                  <IoChevronBackOutline />
                </Link>
            </div>
            <p className=' text-lg'>News</p>    
            <div></div>
        </div>

        {/* Container for the 3 cards */}

        <div className='grid grid-cols-3 text-white place-items-center gap-8 pt-10'>
          <div>
            <img src={CardOneImage} alt="ACT Image" className='w-2/4 grid-rows-1' />
            <a className=' text-customLinkColor underline' href='https://cmha.ca/news/looking-back-at-act-for-mental-health/'>https://cmha.ca/news/looking-back-at-act-for-mental-health/</a>
            <div className='bg-cardBg px-10 rounded-xl'>
              <p>Last November, CMHA launched the Act for Mental Health campaign in Ottawa, advocating for the Canada Mental Health Transfer. Despite its absence in April's budget, the campaign gained momentum, supported by national organizations and thousands of Canadians. Recent engagements with the new Minister of Mental Health signal hopeful progress.</p>
            </div>
          </div>
          <div>
            <img src={CardTwoImage} alt="Companion Image" className='w-2/4  grid-rows-1' />
            <a className=' text-customLinkColor underline' href='https://cmha.ca/news/beyond-man-up-talking-to-the-men-you-love-about-mental-health/'>https://cmha.ca/news/beyond-man-up-talking-to-the-men-you-love-about-mental-health/</a>
            <div className=' bg-cardBg px-10 rounded-xl'>
              <p>The Movember movement raises awareness for men's health, including mental health, challenging the stigma against emotional vulnerability in men. Men face higher suicide and substance abuse rates. Support involves creating a safe space for open conversations, validating experiences, and assisting in finding professional help. Resources are available through CMHA and Talk Suicide.</p>
            </div>
          </div>
          <div>
            <img src={CardThreeImage} alt="Carlton Image" className='w-2/4  grid-rows-1' />
            <a className=' text-customLinkColor underline' href='https://cmha.ca/news/carlton-cards-supports-mental-health-in-canada/'>https://cmha.ca/news/carlton-cards-supports-mental-health-in-canada/</a>
            <div className='bg-cardBg px-10 rounded-xl'>
              <p>Carlton Cards supports World Mental Health Month by donating a portion of October’s greeting card sales in Canada to CMHA. They offer a 31-day mental health Connection Calendar and a social media challenge to promote connectedness. The campaign, featuring gifts and awareness activities, runs in various Canadian retailers.</p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default NewsScreen
