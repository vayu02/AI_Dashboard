import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function ArticleCard({ image, title, description, link }) {
  return (
    <div className="bg-white rounded-md shadow-md overflow-hidden transition-transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-md font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <a
          href={link}
          className="text-blue-500 hover:text-blue-700 font-medium flex items-center justify-end"
        >
          Read Article <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </a>
      </div>
    </div>
  );
}

export default ArticleCard;
