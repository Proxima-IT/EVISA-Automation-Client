import React from "react";
import Marquee from "react-fast-marquee";

const countries = [
  { name: "United States", flag: "https://flagcdn.com/us.svg" },
  { name: "UK", flag: "https://flagcdn.com/gb.svg" },
  { name: "Canada", flag: "https://flagcdn.com/ca.svg" },
  { name: "Germany", flag: "https://flagcdn.com/de.svg" },
  { name: "France", flag: "https://flagcdn.com/fr.svg" },
  { name: "Japan", flag: "https://flagcdn.com/jp.svg" },
  { name: "India", flag: "https://flagcdn.com/in.svg" },
  { name: "Brazil", flag: "https://flagcdn.com/br.svg" },
  { name: "Australia", flag: "https://flagcdn.com/au.svg" },
  { name: "Italy", flag: "https://flagcdn.com/it.svg" },
];

const Countries = () => {
  return (
    <div className="mt-20 w-full py-10 bg-white p-5 rounded-2xl max-w-[1450px] mx-auto">
      <h2 className='text-4xl font-bold text-gray-700 text-center mb-12'>
        🌍 Explore Countries
      </h2>
      <div>
      <Marquee gradient={false} speed={60} pauseOnHover={true} direction="left">
        {countries.splice(0,5).map((country, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center mx-6 bg-white shadow-md rounded-2xl p-4 w-40 hover:shadow-lg transition"
          >
            <img
              src={country.flag}
              alt={country.name}
              className="w-20 h-14 object-cover rounded-md mb-3"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {country.name}
            </h3>
          </div>
        ))}
      </Marquee>
      </div>
      <div className="mt-10">
      <Marquee gradient={false} speed={60} pauseOnHover={true} direction="right">
        {countries.splice(0,5).map((country, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center mx-6 bg-white shadow-md rounded-2xl p-4 w-40 hover:shadow-lg transition"
          >
            <img
              src={country.flag}
              alt={country.name}
              className="w-20 h-14 object-cover rounded-md mb-3"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {country.name}
            </h3>
          </div>
        ))}
      </Marquee>
      </div>
    </div>
  );
};

export default Countries;
