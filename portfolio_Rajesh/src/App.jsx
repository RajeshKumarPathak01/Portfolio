import profile_photo from "./assets/IMG_20250513_070744.jpg";
import gitHubIcon from "./assets/GitHubIcon.png";
import linkdeinIcon from "./assets/linkdeinIcon.png"
import movieWorld from "./assets/MovieWorld.png";
import mail from "./assets/GitHubIcon1.png";
import weatherApi from "./assets/weatherApiIcon.png";
import currencyConverter from "./assets/currencyConverter.png";
import gameNumber from "./assets/gameNumber.png";
import "tailwindcss";
import "./App.css";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import ProjectCard from "./ProjectCard";
import {
  Mail,
  Github,
  Linkedin,
  Home,
  User,
  Code,
  Briefcase,
  MessageSquare,
  Award,
  Monitor,
  Globe,
} from "lucide-react";

// Resume Data (from your resume PDF)
const resumeData = {
  name: "Rajesh Kumar Pathak",
  shortName: "Rajesh Kumar", // Changed to a shorter name for nav bar
  summary:
    "I'm a Full Stack developer with nearly 3 years of experience specializing in developing responsive and visually appealing web applications using ReactJS ⚛️, Redux, JavaScript, and related technologies.", // Updated summary with emoji
  phone: "+91 7870012723",
  email: "rajeshkumar9852143626@gmail.com",
  linkedin: "www.linkedin.com/in/rajesh-kumar-pathak",
  github: "https://github.com/RajeshKumarPathak01",
  resumePdfUrl:
    "https://drive.google.com/file/d/1RLFM1JxQeLdRvjAaplHYL_cOoz_YE9Sk/view?usp=drive_link", // Placeholder URL for resume PDF
  technicalSkills: [
    { icon: "📜", title: "JavaScript" },
    { icon: "⚛️", title: "ReactJS" },
    { icon: "🧮", title: "Redux" },
    { icon: "🎨", title: "Tailwind CSS" },
    { icon: "☕", title: "Java" },
    { icon: "🍃", title: "Spring Boot" },
    { icon: "✉️", title: "Postman" },
    { icon: "📊", title: "MySQL" },
    { icon: "🟢", title: "NodeJS" },
    { icon: "🐙", title: "Git / GitHub" },
    { icon: "🚀", title: "AWS" },
    { icon: " scrum", title: "Agile/Scrum" },
    { icon: "🛠️", title: "VSCode / Eclipse" },
    { icon: "📈", title: "Spring MVC" },
  ],
  experienceHighlights: [
    "Partnered with project managers to define and achieve coding milestones, accelerating pre-release software development.",
    "Diagnosed and resolved intricate JavaScript and UI/CSS challenges, achieving a 50% reduction in page load time, significantly enhancing user experience.",
    "Led Agile development through all phases of the SDLC, ensuring a 98% on-time delivery rate for production releases.",
    "Optimized state management with React Hooks, reducing boilerplate code by 30% and improving component logic, enhancing maintainability by 25%.",
    "Designed and implemented computations using SpringBoot and Firebase Cloud Messaging (FCM), increasing user engagement by 70% through targeted notifications.",
  ],
  projects: [
    {
      title: "Movie World – Movie Search App",
      description:
        "Movie World is a modern movie search app built using ReactJS that lets users explore films and view key details like release date, box office collection, ratings, genres, and cast. It features a clean, responsive UI, supports dark/light mode, and fetches real-time movie data through an external API.",
      imageSrc: movieWorld,
      link: "https://rajeshkumarpathak01.github.io/project51",
    },
    {
      title: "🌤️ WeatherWise – A Real-Time Weather App",
      description:
        "WeatherWise is a responsive ReactJS app that provides real-time weather updates based on user search. It displays temperature, humidity, wind speed, and conditions using live weather APIs. Built with a clean UI, it supports fast performance and seamless UX across all devices.",
      imageSrc: weatherApi,
      link: "https://rajeshkumarpathak01.github.io/weatherDetails",
    },
    {
      title: "💱 GlobeRate – Real-Time Currency Converter API",
      description:
        "GlobeRate is a real-time currency converter API that supports global currency conversion with up-to-date exchange rates. Designed for speed and accuracy, it allows users to convert between any world currency instantly. Built with a focus on performance, reliability, and scalability.",
      imageSrc: currencyConverter,
      link: "https://rajeshkumarpathak01.github.io/currencyConverter",
    },
    {
      title: "🎯 NumberGuess – Number Fun Game",
      description:
        "NumberGuess is a fun and interactive number guessing game built with pure JavaScript, HTML, and CSS. Users try to guess the randomly generated number with hints provided after each attempt. Clean UI, simple logic, and fully responsive – perfect for casual play and JavaScript practice.",
      imageSrc: gameNumber,
      link: "https://rajeshkumarpathak01.github.io/GuessGame",
    },
  ],
};

// NavItem Component for individual navigation links
function NavItem({
  sectionId,
  label,
  activeSection,
  onClick,
  icon: IconComponent,
}) {
  const isActive = activeSection === sectionId;
  return (
    <a
      href={`#${sectionId}`}
      onClick={(e) => onClick(e, sectionId)}
      className={`
                text-gray-200 hover:text-lime-400 font-semibold text-base transition duration-300 px-2 py-1 rounded-md
                ${
                  isActive
                    ? "text-lime-400 scale-105 border-b-2 border-lime-400"
                    : ""
                }
                flex items-center space-x-1 sm:space-x-2 
                text-sm sm:text-base 
            `}
    >
      {IconComponent && <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />}{" "}

      <span>{label}</span> 
    </a>
  );
}

function App() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("about");

  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);


  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0, //
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = [
      aboutRef,
      skillsRef,
      experienceRef,
      projectsRef,
      contactRef,
    ];
    sections.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

 
    return () => {
      sections.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []); // Run once on mount


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  const handleNavLinkClick = (e, sectionId) => {
    e.preventDefault();
    setActiveSection(sectionId); 
    setIsMobileMenuOpen(false); 

    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const [llmContent, setLlmContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const fetchDynamicContent = useCallback(async (prompt) => {
    setIsLoading(true);
    setLlmContent("");
    try {
      const apiKey = "AIzaSyBrUefCbo4tfcdM91pxaWuY0SJHDYcyCGA";
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
      const chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
      const payload = { contents: chatHistory };

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (
        result.candidates &&
        result.candidates.length > 0 &&
        result.candidates[0].content &&
        result.candidates[0].content.parts &&
        result.candidates[0].content.parts.length > 0
      ) {
        setLlmContent(result.candidates[0].content.parts[0].text);
      } else {
        console.error("LLM response structure unexpected:", result);
        setLlmContent("Failed to load dynamic content. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching dynamic content:", error);
      setLlmContent("Error fetching content.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Effect to fetch some initial dynamic content for About section
  useEffect(() => {
    fetchDynamicContent(
      "Elaborate on Rajesh Kumar Pathak's professional summary focusing on his drive for clean code, performance, and user experience, in an inspiring tone for a portfolio's 'About Me' section. Keep it concise, around 3-4 sentences."
    );
  }, [fetchDynamicContent]);

  return (
    <div
      style={{ backgroundColor: "rgb(16, 24, 40)" }}
      id="3dObject"
      className="min-h-screen font-sans text-gray-100 flex flex-col relative overflow-hidden"
    >
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-gray-900/60 shadow-2xl hover:shadow-lg p-4 z-50 rounded-b-xl border-b border-gray-700  animate-fade-in-down animate-fade-in-up-stagger card-3d-hover group">
        <div className="container mx-auto flex justify-between items-center flex-wrap">
          <div className="text-3xl font-bold text-lime-400 flex-shrink-0 ">
            {" "}
            {/* flex-shrink-0 to prevent shrinking */}
            {resumeData.shortName} 🚀
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex flex-grow justify-end items-center space-x-2 lg:space-x-4 ">
            {" "}
            {/* Adjusted space-x */}
            <NavItem
              sectionId="about"
              label="About"
              icon={Home}
              activeSection={activeSection}
              onClick={handleNavLinkClick}
            />
            <NavItem
              sectionId="skills"
              label="Skills"
              icon={Code}
              activeSection={activeSection}
              onClick={handleNavLinkClick}
            />
            <NavItem
              sectionId="experience"
              label="Experience"
              icon={Briefcase}
              activeSection={activeSection}
              onClick={handleNavLinkClick}
            />
            <NavItem
              sectionId="projects"
              label="Projects"
              icon={Monitor}
              activeSection={activeSection}
              onClick={handleNavLinkClick}
            />
            <NavItem
              sectionId="contact"
              label="Contact"
              icon={MessageSquare}
              activeSection={activeSection}
              onClick={handleNavLinkClick}
            />
            <a
              href={resumeData.resumePdfUrl}
              download={`${resumeData.name.replace(/\s/g, "_")}_Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="
      bg-gradient-to-r from-purple-600 to-pink-700 text-white font-bold py-2 px-4 rounded-full 
      shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 
      text-sm sm:text-base flex items-center space-x-2 ml-4
    "
              style={{
                whiteSpace: "nowrap",
              }} /* Prevents text from wrapping on smaller desktop sizes */
            >
              <span>Resume</span> <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>

          {/* Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-200 focus:outline-none"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-4 items-center bg-gray-800 bg-opacity-90 p-4 rounded-lg animate-fade-in-down">
            <NavItem
              sectionId="about"
              label="About"
              icon={Home}
              activeSection={activeSection}
              onClick={handleNavLinkClick}
            />
            <NavItem
              sectionId="skills"
              label="Skills"
              icon={Code}
              activeSection={activeSection}
              onClick={handleNavLinkClick}
            />
            <NavItem
              sectionId="experience"
              label="Experience"
              icon={Briefcase}
              activeSection={activeSection}
              onClick={handleNavLinkClick}
            />
            <NavItem
              sectionId="projects"
              label="Projects"
              icon={Monitor}
              activeSection={activeSection}
              onClick={handleNavLinkClick}
            />
            <NavItem
              sectionId="contact"
              label="Contact"
              icon={MessageSquare}
              activeSection={activeSection}
              onClick={handleNavLinkClick}
            />
            <a
              href={resumeData.resumePdfUrl}
              download={`${resumeData.name.replace(/\s/g, "_")}_Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="
        bg-gradient-to-r from-purple-600 to-pink-700 text-white font-bold py-1 px-2 rounded-xl 
        shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 
        text-md flex items-center justify-center space-x-2
      "
            >
              <span>Download Resume</span> <Globe className="w-5 h-5" />
            </a>
          </div>
        )}
      </nav>

      {/* About (Hero) Section */}
      <section
        id="about"
        ref={aboutRef} // Attach ref here
        className="text-white pt-32 pb-16 md:py-24 px-4 flex items-center  justify-center rounded-b-3xl shadow-2xl relative mb-8 scroll-mt-24 min-h-[70vh] md:min-h-[80vh]"
      >
        {/* 3D Canvas for animation */}
        <ThreeDBackground />
        {/* Hero Content */}
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <img
            src={profile_photo} // Placeholder with name
            alt="Rajesh Kumar Pathak Professional Photo"
            className="rounded-full w-40 h-40 md:w-52 md:h-52 mx-auto mb-10 border-4 border-lime-500 shadow-lg shadow-lime-500/50 animate-fade-in-up transition-all duration-300 hover:animate-pulse"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/180x180/FFD700/000000?text=Error+Loading";
            }}
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg animate-slide-in-left">
            Hi, I'm{" "}
            <span className="text-lime-300">{resumeData.shortName}</span>! 👋
          </h1>
          {/* Updated: Frosted glass effect with a darker, purplish background and enhanced shadow */}
          <p className="text-md md:text-xl lg:text-xl mb-8 border-0 bg-opacity-40 p- rounded-xl shadow-xl backdrop-filter backdrop-blur-sm animate-fade-in-right border border-blue-700">
            ⚡ {resumeData.summary}
          </p>
          <a
            href="#contact"
            onClick={(e) => handleNavLinkClick(e, "contact")} // Link to contact section
            className="bg-gradient-to-r from-lime-500 to-green-600 text-white font-extrabold py-4 px-10 sm:py-5 sm:px-14 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition duration-300 inline-block text-xl animate-bounce-once relative animate-glow-pulse-lime"
          >
            Connect with Me! ✉️
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        ref={skillsRef} // Attach ref here
        className="py-20 px-4 bg-gray-900 bg-opacity-80 rounded-3xl shadow-2xl mt-2 relative z-10 border border-gray-800 animate-fade-in-up-section scroll-mt-24"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-lime-400 mb-16 animate-fade-in">
            My Expertise & Technologies ✨
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 perspective-1000">
            {resumeData.technicalSkills.map((skill, index) => (
              <SkillCard
                key={index}
                icon={skill.icon}
                title={skill.title}
                delay={`${index * 0.1}s`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        ref={experienceRef} // Attach ref here
        className="py-20 px-4 bg-gray-900 bg-opacity-80 rounded-3xl shadow-2xl mt-8 relative z-10 border border-gray-800 animate-fade-in-up-section scroll-mt-24"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-lime-400 mb-16 animate-fade-in">
            Professional Experience 💼
          </h2>
          <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border backdrop-blur-md bg-gray-900/60 border-gray-700 text-left animate-fade-in-up-stagger card-3d-hover group backdrop-filter">
            <h3 className="text-3xl font-bold text-lime-300 mb-4">
              Infosys Limited - Senior System Engineer
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Oct 2022 - Present | Bangalore, Karnataka
            </p>
            <ul className=" list-inside space-y-3 text-md text-gray-200  ">
              {resumeData.experienceHighlights.map((highlight, index) => (
                <li
                  key={index}
                  className="animate-slide-in-from-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Award className="inline-block w-5 h-5 text-lime-400 mr-2" />{" "}
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        ref={projectsRef} // Attach ref here
        className="py-20 px-4 bg-gray-900 bg-opacity-80 rounded-3xl shadow-2xl mt-8 border border-gray-800 animate-fade-in-up-section scroll-mt-24"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-lime-400 mb-16 animate-fade-in">
            Key Projects & Accomplishments 💼
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12 perspective-1000">
            {resumeData.projects.map((project, index) => (
              <ProjectCard
                key={index}
                imageSrc={project.imageSrc}
                title={project.title}
                description={project.description}
                link={project.link}
                delay={`${index * 0.1}s`} // Staggered animation
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={contactRef} // Attach ref here
        className="py-28 px-4 bg-gray-900 bg-opacity-80 rounded-3xl shadow-2xl mt-8 border border-gray-800 transition-all duration-300 hover:shadow-[0_0_60px_20px_rgba(59,130,246,0.5)] scroll-mt-24"
      >
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-lime-400 mb-14 animate-fade-in">
            Let's Connect! 👋
          </h2>
          <p className="text-lg text-gray-300 mb-14">
            I'm keen to explore new challenges and contribute my extensive
            experience to innovative projects. Reach out to discuss how I can
            add value to your team or initiative.
          </p>
          <div className="flex flex-col space-y-7 ">
            <a
              href={`tel:${resumeData.phone.replace(/\s/g, "")}`} // Your contact number link
              className="hover:shadow-[0_0_60px_20px_rgba(59,130,246,0.5)] bg-gradient-to-r from-lime-500 to-green-600 text-white font-bold py-5 px-12 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 text-xl flex items-center justify-center space-x-3 group relative overflow-hidden"
            >
              <span>Call Me: {resumeData.phone}</span> 📞
            </a>
            <a
              href={`mailto:${resumeData.email}`} // Your professional email
              className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold py-5 px-12 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 text-xl flex items-center justify-center space-x-3 group relative overflow-hidden"
            >
              <span>Email Me Directly</span> 📧
            </a>
            <a
              href={`https://${resumeData.linkedin}`} // Replace with your LinkedIn profile
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:shadow-[0_0_60px_20px_rgba(59,130,246,0.5)] bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold py-5 px-12 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 text-xl flex items-center justify-center space-x-3 group"
            >
              <span>Connect on LinkedIn</span> 🔗
            </a>
            <a
              href={resumeData.github} // Replace with your GitHub profile
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:shadow-[0_0_60px_20px_rgba(59,130,246,0.5)] bg-gray-700 text-white font-bold py-5 px-12 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 text-xl flex items-center justify-center space-x-3 group"
            >
              <span>Explore My GitHub</span> 🐙
            </a>
            <a
              href={resumeData.resumePdfUrl}
              download={`${resumeData.name.replace(/\s/g, "_")}_Resume.pdf`}
              target="_blank" // Opens in a new tab
              rel="noopener noreferrer"
              className=" bg-gradient-to-r from-purple-600 to-pink-700 text-white font-bold py-5 px-12 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 text-xl flex items-center justify-center space-x-3 group relative overflow-hidden animate-glow-pulse-purple"
            >
              <span>Download Resume</span> ⬇️
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-12 px-4 text-center mt-auto rounded-t-3xl shadow-inner border-t border-gray-800 animate-fade-in-up">
        <div className="container mx-auto">
          <p className="text-lg">
            &copy; {new Date().getFullYear()} {resumeData.name}. All rights
            reserved.
          </p>
          <div className="flex flex-row justify-center space-x-6 text-2xl mt-6">
            <a
              href="mailto:rajeshkumar9852143626@gmail.com"
              className="hover:text-lime-400 transition"
              aria-label="Email"
              title="Email"
            >
              <img
                style={{ height: "30px", width: "30px", display: "flex" }}
                src={mail}
              />
            </a>
            <a
              href="https://github.com/RajeshKumarPathak01/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime-400 transition"
              aria-label="GitHub"
              title="GitHub"
            >
              <img
                style={{ height: "30px", width: "30px", display: "flex" }}
                src={gitHubIcon}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/rajesh-kumar-pathak-"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime-400 transition"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <img
                style={{ height: "30px", width: "30px" }}
                src={linkdeinIcon}
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Three.js Background Component (Used in Hero Section)
const ThreeDBackground = () => {
  const mountRef = useRef(null);
  const cubesRef = useRef([]); // To store references to individual cube meshes
  const groupRef = useRef(new THREE.Group()); // To hold all cubes for group rotation

  const initThreeScene = useCallback(() => {
    const currentMount = mountRef.current;
    if (!currentMount) {
      console.warn(
        "Three.js: Mount element not found, skipping initialization."
      );
      return;
    }

    // Scene
    const scene = new THREE.Scene();

    
    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5; 

 
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); 
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    console.log("Three.js scene initialized!"); 


    groupRef.current.clear();
    cubesRef.current = [];

    
    const cubeGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.1); // Small cubes
    const cubeMaterial = new THREE.MeshBasicMaterial({
      color: 0x6ee7b7, 
      transparent: true,
      opacity: 0.5, 
    });

    
    const numberOfCubes = 200;
    for (let i = 0; i < numberOfCubes; i++) {
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
     
      cube.position.x = (Math.random() - 0.5) * 10;
      cube.position.y = (Math.random() - 0.5) * 10;
      cube.position.z = (Math.random() - 0.5) * 10;

      
      cube.userData.rotationSpeedX = Math.random() * 0.005 - 0.0025;
      cube.userData.rotationSpeedY = Math.random() * 0.005 - 0.0025;
      cube.userData.rotationSpeedZ = Math.random() * 0.005 - 0.0025;

      groupRef.current.add(cube);
      cubesRef.current.push(cube);
    }

    scene.add(groupRef.current);

    
    const animate = () => {
      requestAnimationFrame(animate);

    
      cubesRef.current.forEach((cube) => {
        cube.rotation.x += cube.userData.rotationSpeedX;
        cube.rotation.y += cube.userData.rotationSpeedY;
        cube.rotation.z += cube.userData.rotationSpeedZ;
      });

   
      groupRef.current.rotation.x += 0.0005;
      groupRef.current.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();

 
    const handleResize = () => {
      const width = currentMount.clientWidth;
      const height = currentMount.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);


    return () => {
      window.removeEventListener("resize", handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
   
      cubeGeometry.dispose();
      cubeMaterial.dispose();
      renderer.dispose();

 
      scene.remove(groupRef.current);
      groupRef.current.children.forEach((child) => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) child.material.dispose();
      });
      groupRef.current.clear();
      cubesRef.current = []; 
    };
  }, []); 

  useEffect(() => {
    initThreeScene();
  }, [initThreeScene]);


  return (
    <div
      ref={mountRef}
      className="three-canvas"
      id="3dObject"
      style={{
        width: "100%",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    />
  );
};


function SkillCard({ icon, title, delay }) {
  return (
    <div
      className="bg-gray-900 p-8 rounded-2xl shadow-xl border-l-4 border-lime-500 cursor-pointer flex flex-col items-center justify-center text-center animate-fade-in-up-stagger card-3d-hover group" // Added 'group' class
      style={{ animationDelay: delay }}
    >
    
      <div className="text-5xl mb-4 text-lime-400 card-icon-animate">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-100">{title}</h3>
    </div>
  );
}



export default App;
