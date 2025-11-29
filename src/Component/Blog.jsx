import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaRegClock } from "react-icons/fa";

export default function LatestNews() {
  const [apiNews, setApiNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fallbackNews = [
    {
      id: 1,
      img: "/Drug2.jpg",
      date: "October 30, 2025",
      title: "2025 Best Nigeria Hospitals",
      text: "Explore the leading hospitals recognized for outstanding medical service and patient care.",
    },
    {
      id: 2,
      img: "/Drug1.jpg",
      date: "November 18, 2025",
      title: "Are Drugs the Best Treatment?",
      text: "A detailed insight into whether medications remain the most effective treatment method.",
    },
    {
      id: 3,
      img: "/Stet.jpg",
      date: "November 28, 2025",
      title: "New Heart Monitoring Methods",
      text: "Innovative technologies offering patients improved heart monitoring accuracy.",
    },
  ];

  // Fetching Health News
  useEffect(() => {
    async function loadNews() {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?category=health&language=en&apiKey=${import.meta.env.VITE_NEWS_API}`
        );

        const data = await res.json();
      if (data.articles && data.articles.length > 0) {
          const mapped = data.articles.slice(0, 6).map((item, index) => ({
            id: index + 1,
            img: item.urlToImage || "/news1.jpg",
            date: new Date(item.publishedAt).toDateString(),
            title: item.title,
            text: item.description || "Click to read the full health article.",
            link: item.url,
          }));

          setApiNews(mapped);
        } else {
          setError(true);
        }
      } catch (err) {
        console.log("News API error:", err);
        setError(true);
      }

      setLoading(false);
    }

    loadNews();
  }, []);

  const newsToShow = !loading && !error && apiNews.length > 0 ? apiNews : fallbackNews;

  return (
    <section className="w-full py-20 bg-gradient-to-b from-white via-[#f5fffd] to-[#e7fffb]">

      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-[#053f3a] tracking-tight">
          LATEST NEWS
        </h2>
        <div className="w-20 h-1 bg-[#0fada0] mx-auto my-3 rounded-full"></div>
        <p className="text-[#0a726a]/80 max-w-3xl mx-auto text-lg leading-relaxed">
          Stay informed with the latest developments in healthcare,  
          maternal wellness, and medical advancements curated by LeemahCare.
        </p>

        {loading && (
          <p className="text-[#0a726a]/70 mt-4 animate-pulse">
          </p>
        )}

        {error && (
          <p className="text-red-500 mt-4">.</p>
        )}
      </div>

      {/* News Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-20">
        {newsToShow.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="bg-white border border-[#0fada0]/10 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-72 object-cover group-hover:scale-105 transition duration-700"
              />

          {/* Content */}
            <div className="p-6">
              {/* Date */}
              <div className="flex items-center gap-2 text-[#0a726a]/70 text-sm">
                <FaRegClock className="text-[#0fada0]" />
                <span>{item.date}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-black mt-3">
                {item.title}
              </h3>

              {/* Paragraph */}
              <p className="text-black mt-2 leading-relaxed">
                {item.text}
              </p>

              {/* READ MORE */}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  className="mt-4 inline-block text-[#0fada0] hover:text-[#0a726a] font-semibold transition"
                >
                  Read Full Article →
                </a>
              )}
            </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Button */}
      <div className="text-center mt-16">
        <button className="px-10 py-4 bg-[#0fada0] hover:bg-[#0a726a] text-white font-semibold rounded-2xl shadow-lg transition-all duration-300">
          Read More News
        </button>
      </div>
    </section>
  );
}
