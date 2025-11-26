import React, { useEffect, useState } from "react";

export default function WhatWeOffer() {
  const [whoNews, setWhoNews] = useState([]);

  useEffect(() => {
    const WHO_FEED = "https://www.who.int/feeds/entity/csr/don/en/rss.xml";
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=${WHO_FEED}`)
      .then(res => res.json())
      .then(data => {
        setWhoNews(data.items.slice(0, 3)); 
      })
      .catch(err => console.error("WHO News Error:", err));
  }, []);
  return (
    <section className="w-full bg-white py-10 px-5">
      <div className="max-w-6xl mx-auto"> 
        {/*HEADER*/}
        <div className="text-center mb-16">
          <p className="text-lg text-teal-600 font-bold">From WHO</p> 
          <h2 className="text-2xl md:text-5xl font-extrabold text-teal-700 gap-y-6">
            Latest Health News <br/> from WHO
          </h2>
        </div>  
        {/*NEWS GRID*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whoNews.map((news, index) => ( 
            <div key={index} className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
              <p className="text-sm text-gray-600 mb-4"> 
                {new Date(news.pubDate).toLocaleDateString()}
              </p>
              <p className="text-gray-700 mb-4">    
                {news.description.replace(/<[^>]+>/g, "").slice(0, 150)}...
              </p>
              <a  
                href={news.link}
                target="_blank"
                className="text-teal-600 hover:text-teal-800 font-semibold transition"  
              >
                Read Full Article →
              </a>  
            </div>
          ))} 
        </div>
      </div>
    </section>
  );
}