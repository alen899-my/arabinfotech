import React from 'react';

// ==== IMAGE IMPORTS ====
import val1 from "../../../public/valets/val1.png";
import val2 from "../../../public/valets/val2.png";
import val3 from "../../../public/valets/val3.png";
import val4 from "../../../public/valets/val4.png";
import val5 from "../../../public/valets/val5.png";
import val6 from "../../../public/valets/val6.png";
import val7 from "../../../public/valets/val7.png";
import val8 from "../../../public/valets/val8.png";
import val9 from "../../../public/valets/val9.png";
import val10 from "../../../public/valets/val10.png";
import val11 from "../../../public/valets/val11.png";
import val12 from "../../../public/valets/val12.png";
// val13 was missing in your original list
import val14 from "../../../public/valets/val14.png";
import val15 from "../../../public/valets/val15.png";

const ProjectShowcase = () => {
  const data = {
    project: "Valet Parking Solution (aitEdge-VPS)",
    entries: [
      {
        image: val1,
        About_Client:
          "Prestige is provider of high class Valet, Parking, Golf Carts and Technology. Our roots are grounded in the rapid global growth associated with luxurious entertainment and events and we love delivering this to you. We service those who attend leisure events and pamper them by making a distinguished entrance – a Prestige entrance.",
        Client: "Prestige Valet Parking, KSA",
        Deployed_Locations: "King Abdullah Financial District",
      },
      {
        image: val2,
        About_Client:
          "Dahab is an online platform for jewellery shops heaquarted in Dubai, UAE. The company was founded by 5 partners in 2020. Dubai Opera passionately embraces its role as the creative heart of the city, producing and hosting the most beautiful, most authentic, and engaging performing arts experiences from Dubai and the world.",
        Client: "Emaar Dubai, UAE",
        Deployed_Locations: "Dubai Opera",
      },
      {
        image: val3,
        About_Client:
          "At Al Mumayaz Group, we dream big. And with that dream – the possibilities are infinite. Our aim is to provide only the best for our clients. Al Mumayaz meaning “EXCELLENCE” and what we aim, is to do a common thing in an uncommon way, we work hard, we take pride in adapting easily to any environment or situation, and we carefully consider strategies – all these to assist our clients in achieving the visions and goals of their businesses, bringing excellence in all we deliver.",
        Client: "Al Mumayaz Valet Parking, OMAN",
        Deployed_Locations: "Waterfront",
      },
      {
        image: val4,
        About_Client:
          "Established in 1996, KTC International Co. provides a wide variety of solutions and specialised services related to Parking, Traffic, and Security and Information Technology Systems. Backed by our strong technical and engineering workforce, we at KTC represent a wealth of experience garnered over the years, which has in turn enabled us to attain a leadership position across all our areas of expertise..",
        Client: "Quick Valet Parking, KTC International, UAE",
        Deployed_Locations: "Emirates NBD Head Office - Deira - Dubai",
      },
      {
        image: val5,
        About_Client:
          "Al Shamil Car Washing L.L.C”. Dedicated staff combined with their creative ideas we provide a new level of service that nobody could offer. We provide exceptional management, consultation, innovative solutions and develop outstanding plans and programs. We work closely with our customers and stakeholders to help achieve their aims.",
        Client: "Al Shamil Valet Parking, UAE",
        Deployed_Locations: "777 Center - Al Shaari Street - Jumeirah - Dubai",
      },
      {
        image: val6,
        About_Client:
          "Grand Millennium Business Bay Located in the city's vibrant heart in South Downtown Dubai, nestled along The Dubai Water Canal, and close to iconic attractions, Grand Millennium Business Bay is your optimum exquisite destination from where you can explore the city",
        Client: "Millennium Hotel, Business Bay, Dubai",
        Deployed_Locations: "Millennium Hotel, Business Bay, Dubai",
      },
      {
        image: val7,
        About_Client:
          "Luxury Plus Valet Parking was established in 2020, and has vision to be the largest and most recognized company of its kind in the entire Middle East. We have been, and remain to be, the one and only “professional valet parking only” company in the region.",
        Client: "Luxury Plus Valet Parking, UAE",
        Deployed_Locations: "Five-JVC & Fairmont The Palm",
      },
      {
        image: val8,
        About_Client:
          "GERMAN RENT A CAR is a new pinnacle in the luxury limousine and car rental sector in Abu Dhabi, Al-Ain and Dubai. Since inception in 2007; we have set a new definition for luxury and service",
        Client: "German Valet Parking, UAE",
        Deployed_Locations:
          "Fairmont Hotel - Dubai, Grand Millenium - Abudhabi & Rixos AUH hotel",
      },
      {
        image: val9,
        About_Client:
          "Matrix Valet Parking & Security is one of the UAE's leading service company established in 2006. We provide valet parking and security for individual clients and corporate events.",
        Client: "Matrix Valet Parking, KSA",
        Deployed_Locations:
          "Myazu-Jeddah, The Residences JLT, Radisson Blu Waterfront & Dubai Marina",
      },
      {
        image: val10,
        About_Client:
          "We provide parking management services under our brand – Valetti. This is one of our special service verticals as it was the first we provided when we first started a decade ago in Houston, USA.",
        Client: "Valetti Valet Parking, UAE",
        Deployed_Locations:
          "Dubai Festival City Mall & Metropolitan Hotel",
      },
      {
        image: val11,
        About_Client:
          "We are a world pioneer in valet parking services, offering a safe, seamless experience to our diverse clientele. Our guests can expect the same five-star service, whether they are visiting a luxury hotel, restaurant, shopping mall, international airport, or shopping mall. Our valet service is a great addition to any business, providing the best first impression and last contact for customers visiting your premises..",
        Client: "Moonlight Valet Parking, Dubai",
        Deployed_Locations:
          "Habtoor Grand Resort, Autograph Collection — Jumeirah Beach",
      },
      {
        image: val12,
        About_Client:
          "At VANTOM VALET, we provide total valet parking and transportation solutions. Our management has vast experience in the valet industry. As a team, our staff can accommodate and customize all of your individualized parking and transportation needs..",
        Client: "Vantom Valet Parking, UAE",
        Deployed_Locations: "Conrad Hotel Dubai & Media One Hotel",
      },
      {
        image: val14,
        About_Client:
          "Dunes Valet Parking Service is a high quality oriented company that was established in Dubai to offer a High-End service level that complies with the vision of His Highness Sheikh Mohamed Bin Rashid al Maktoum for achieving excellency",
        Client: "Dunes Valet Parking, Dubai",
        Deployed_Locations:
          "Global Village, Palazzo Versace, The Retreat, TRYP By Wyndham & Bvlgari Resorts",
      },
    ]
  };

  return (
    <div className="min-h-screen mt-35  bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-200 pb-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold momo-font text-[#ae5c83] leading-tight ">
         <span className="text-black">Our</span>  Valet Software Solutions
        </h2>
       <p className="roboto-text">
  Powerful valet automation tools built to optimize traffic flow, digitize
  operations, track workforce performance, and ensure seamless guest arrivals
  across high-demand venues.
</p>
      </div>
    </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {data.entries.map((entry, index) => (
          <article 
            key={index} 
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 flex flex-col"
          >
            {/* Image Container */}
            <div className="relative h-56 overflow-hidden bg-slate-200 group">
              <img 
                src={entry.image.src || entry.image} // Handles Next.js StaticImageData or standard string imports
                alt={entry.Client} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <span className="text-white text-sm font-medium p-4">
                  {entry.Client}
                </span>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-6 flex flex-col flex-grow">
              {/* Client Name */}
              <h3 className="text-xl font-bold text-slate-800 mb-3 leading-tight">
                {entry.Client}
              </h3>

              {/* Location Badge */}
              <div className="mb-4">
                <div className="inline-flex items-start gap-2 p-2 bg-indigo-50 rounded-lg text-indigo-700 text-xs font-semibold uppercase tracking-wide">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>{entry.Deployed_Locations}</span>
                </div>
              </div>

              {/* Description */}
              <div className="text-slate-600 text-sm leading-relaxed flex-grow">
                <p>{entry.About_Client}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default ProjectShowcase;