import React from 'react'
import { Link } from "react-router-dom";
export default function Service() {
  return (
    <div>
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-8 text-gray-900 text-center">our services</h1>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src="./img/social-media-marketing.jpg" />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">social media marketing</h2>
              <p className="text-base leading-relaxed mt-2">Effective social media marketing strategies that drive results. Amplify your brand, engage your audience, and achieve business success.</p>
              <Link className="text-indigo-500 inline-flex items-center mt-3 cursor-pointer" to='/service/social_media_marketing'>Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src="./img/web-development.jpg" />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">web development</h2>
              <p className="text-base leading-relaxed mt-2">Cutting-edge web development solutions that create stunning, user-friendly websites. Enhance your online presence and captivate your audience.</p>
              <Link className="text-indigo-500 inline-flex items-center mt-3 cursor-pointer" to='/service/web_development'>Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src="./img/business-analytics.jpg" />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">business analytics</h2>
              <p className="text-base leading-relaxed mt-2">Unleash the power of machine learning in business data analytics. Extract actionable insights, predict trends, and make informed decisions</p>
              <Link className="text-indigo-500 inline-flex items-center mt-3 cursor-pointer" to='/service/business_analytics'>Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
