"use client"
import React, { useState } from 'react';

const FAQModernLeftBorder = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "I am totally new to this \"website thing\". How does the whole process work?",
      answer: "Never fear, that's why we are here. You can learn about our time proven process in our process section."
    },
    {
      question: "How much does a website cost?",
      answer: "The cost of a website can vary depending on various factors, just like the cost of a house may vary."
    },
    {
      question: "How does the payment process work?",
      answer: "The project starts with a 50% deposit. After design sign off and before we move into programming, we collect 25%. Once we have completed and fulfilled our scope, the final 25% is collected and your website is scheduled for launch."
    },
    {
      question: "What kind of businesses do you work with?",
      answer: "We work with a broad range of company types [small start-ups, large corporations, nonprofits, B2B, B2C and more] across many business industries [technology, food, apparel, health + beauty, camps, travel, finance, arts, fair trade, and more.] Over the years, we've helped businesses improve customer service, market their products, and attract customers. Functionality requests range from basic to advanced. Our team takes the time to get to know your industry, organization, and competitors to ensure your site supports all of your goals."
    },
    {
      question: "Who will I work with during the project?",
      answer: "This is a great question to ask and you should ask it of any web design and development firm you are considering. Many firms will farm out work to freelancers or interns. Some firms give little or no access to client’s who want to speak directly with their designers or developers. Our clients work directly with our tight knit crew of 5. Who that will be depends on your project needs and what stage of the process you are in during the project."
    },
    {
      question: "What is a CMS?",
      answer: "CMS stands for Content Management System. Simply put, it is a web-based tool for you to manage the text, images, and other content within your website. All you need is access to the internet."
    },
    {
      question: "What is responsive web design?",
      answer: "Responsive web design (RWD) is a web design approach aimed at crafting sites to provide an optimal viewing experience —easy reading and simple, inuitive navigation with a minimum amount of resizing, panning, and scrolling by a site visitor — across a wide range of mobile devices, as well as traditional desktop computers."
    },
    {
      question: "What type of web development do you do?",
      answer: "The majority of our work is done in PHP in a Linux environment. Our Site OnCall system is built in PHP. However, we also have developers experience in .NET, ASP and JAVA. When building websites, it rarely matters whether it is developed using PHP or another programming language. To the person clicking through your website, the user experience is generally the same. However, we do work with some clients who have a specific development platform need based on their business structure or other systems they use. We will work with you to determine the best solutions for your project."
    },
    {
      question: "Do I own my website?",
      answer: "YES! Everything that we build will be 100% owned by you. Most of our clients stay with us for the life of the website. Our team is just irresistible that way. But if for any reason you decide you want to take your site to another hosting service and get another company to service the site, we will happily assist you in making the transition as effortlessly and efficiently as possible. The website is yours after all, and we want you to take it wherever you go."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 selection:bg-[#ae5c83] selection:text-white">

      {/* --- FIXED PINK BANNER --- */}
      <div className="fixed top-20 left-0 w-full bg-[#ae5c83] py-3 md:px-10 z-20 shadow-lg border-b border-[#924b6d]">
        <div className="max-w-[1280px] mx-auto w-full px-6">
          <h1 className="momo-font text-white text-lg sm:text-xl md:text-2xl font-semibold uppercase mb-1">
            FAQ
          </h1>
          <p className="text-white/70 text-[10px] sm:text-xs md:text-sm tracking-wide uppercase">
            Last Updated: November 30, 2025
          </p>
        </div>
      </div>

      {/* --- MAIN SPLIT LAYOUT --- */}
      <div className="max-w-7xl mx-auto px-6 pb-20 pt-[180px] md:pt-[220px]">
        
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* --- LEFT SIDE: STICKY HEADER --- */}
          <div className="lg:col-span-4 lg:sticky lg:top-48 space-y-6">
            <div className="hidden lg:block w-12 h-1 bg-[#ae5c83] mb-3"></div>
            
            <h2 className="momo-font text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight uppercase">
              Frequently <br />
              <span className="text-[#ae5c83] ">Asked</span> <br />
              Questions
            </h2>
            
            <p className="roboto-text text-gray-600 text-lg leading-relaxed">
              We crafted this page to answer the questions we get asked most along the way.
            </p>

            <div className="pt-4">
               <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-400">
                  <p className="text-sm text-gray-500 font-medium uppercase mb-2">Still have questions?</p>
                  <a href="/contact" className="text-[#ae5c83] font-bold text-lg hover:underline decoration-2 underline-offset-4">
                    Contact Support &rarr;
                  </a>
               </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: CARD GRID WITH LEFT BORDER --- */}
          <div className="lg:col-span-8 space-y-5">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              const number = index + 1 < 10 ? `0${index + 1}` : index + 1;

              return (
                <div 
                  key={index} 
                  className={`group relative bg-white rounded-r-lg transition-all duration-300 ease-in-out
                    ${isOpen 
                      ? 'shadow-lg translate-x-2' // Active State Layout
                      : 'shadow-sm hover:shadow-md border border-gray-400 rounded-3xl' // Inactive State Layout
                    }`}
                >
                  {/* THE LEFT BORDER STRIP */}
                  <div 
                    className={`absolute left-0 top-0 bottom-0 w-[6px] transition-all duration-300 rounded-l-md
                    ${isOpen 
                      ? 'bg-[#ae5c83]' // Pink when open
                      : 'bg-gray-100 group-hover:bg-[#ae5c83]' // Gray/Light Pink when closed
                    }`}
                  />

                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full text-left p-6 md:p-8 flex items-start gap-6 relative overflow-hidden pl-8" // Added pl-8 to offset styling
                  >
                    {/* Big Decorative Number */}
                    <span className={`text-3xl font-black momo-font transition-colors duration-300 hidden sm:block ${
                      isOpen ? 'text-[#ae5c83]' : 'text-gray-400 group-hover:text-[#ae5c83]'
                    }`}>
                      {number}
                    </span>

                    <div className="flex-1 pt-1 z-10">
                      <h3 className={`momo-font text-lg md:text-lg font-bold uppercase pr-8 transition-colors ${
                        isOpen ? 'text-[#ae5c83]' : 'text-gray-600 group-hover:text-[#ae5c83]'
                      }`}>
                        {item.question}
                      </h3>
                      
                      {/* Animated Content */}
                      <div 
                        className={`grid transition-all duration-500 ease-out ${
                          isOpen ? 'grid-rows-[1fr] opacity-100 pt-4' : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="roboto-text text-gray-600 leading-7 text-sm md:text-base border-t border-gray-400 pt-4">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Plus/Minus Icon */}
                    <div className={`absolute top-6 right-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                       {isOpen ? (
                          <svg className="w-6 h-6 text-[#ae5c83]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                       ) : (
                          <svg className="w-6 h-6 text-gray-600 group-hover:text-[#ae5c83]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                       )}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FAQModernLeftBorder;