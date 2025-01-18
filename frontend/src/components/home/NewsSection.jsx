import React from "react";

const NewsSection = () => {
  const newsData = [
    {
      id: 1,
      title: "Top Engineering Colleges Ranked for 2025 Admissions",
      description:
        "Discover the latest rankings of engineering colleges across the country to help you choose the best fit for your career goals.",
      image: "https://via.placeholder.com/300x200?text=Engineering+Colleges",
      link: "#",
    },
    {
      id: 2,
      title: "Scholarship Opportunities for Medical Students",
      description:
        "Explore the top scholarships available for aspiring medical students to ease the financial burden of education.",
      image: "https://via.placeholder.com/300x200?text=Medical+Scholarships",
      link: "#",
    },
    {
      id: 3,
      title: "Arts and Commerce Colleges with Highest Placement Rates",
      description:
        "Find out which Arts and Commerce colleges are achieving exceptional placement rates and why students prefer them.",
      image: "https://via.placeholder.com/300x200?text=Placements",
      link: "#",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900">
            Latest News & Updates
          </h2>
          <p className="text-gray-500 mt-2 text-lg">
            Stay updated with the latest happenings in the education world.
          </p>
        </div>

        {/* News Cards */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {newsData.map((news) => (
            <div
              key={news.id}
              className="bg-white rounded-xl hover:shadow-md overflow-hidden transition-transform transform  hover:shadow-purple-500 "
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {news.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {news.description}
                </p>
                <a
                  href={news.link}
                  className="inline-block text-indigo-600 font-medium hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
