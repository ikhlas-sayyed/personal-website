import React from 'react'

export default function Main() {
  return (
    <div>
      <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src="./img/homepage.jpg"/>
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Power Up Your Online Presence with
                        <br className="hidden lg:inline-block"/>Expert Web Development
                    </h2>
                    <p className="mb-8 leading-relaxed">Boost your business's digital impact with our top-notch web development and social media marketing services. Our skilled team crafts captivating websites and implements tailored strategies to maximize your online visibility. Drive growth, engage your audience, and thrive in the digital realm with us. Get started now!</p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
