
import React from "react";

export default function ProjectCard({ imageSrc, title, description, link, delay }) {
  return (
    <div
      className="bg-gray-900 p-8 rounded-2xl shadow-xl border-l-4 border-blue-500 flex flex-col animate-fade-in-up-stagger card-3d-hover group" // Added 'group' class
      style={{ animationDelay: delay }}
    >

      <div className="mb-4 overflow-hidden rounded-lg">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-40 object-cover rounded-lg project-image-animate" // project-image-animate class added
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/400x220/374151/FFFFFF?text=Image+Error";
          }}
        />
      </div>
      <h3 className="text-2xl font-bold text-lime-400 mb-4">{title}</h3>
      <p className="text-gray-300 mb-6 flex-grow">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block justify-center bg-gradient-to-r from-lime-500 to-green-600 text-white font-semibold py-3 px-6 rounded-full hover:shadow-lg hover:scale-105 transition duration-300 text-base self-center flex items-center space-x-2"
      >
        <span>Visit Website</span> ➡️
      </a>
    </div>
  );
}
