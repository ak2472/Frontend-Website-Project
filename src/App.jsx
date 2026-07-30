import React, { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Trustedby from "./components/Trustedby.jsx";
import Services from "./components/Services.jsx";
import Ourwork from "./components/Ourwork.jsx";
import Teams from "./components/Teams.jsx";
import ContactUs from "./components/ContactUs.jsx";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer.jsx";

const App = () => {
  const dotref = useRef(null);
  const outlineRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);
    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1;
      position.current.y += (mouse.current.y - position.current.y) * 0.1;
      if (dotref.current && outlineRef.current) {
        dotref.current.style.transform = `translate3d(${mouse.current.x - 6}px,${mouse.current.y - 6}px,0)`;
        outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px,${position.current.y - 20}px,0)`;
      }

      requestAnimationFrame(animate);
    };

    animate();
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  useEffect(() => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  localStorage.setItem("theme", theme);
  }, [theme]);


  return (
    <div className="dark:bg-black relative">
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme}></Navbar>
      <Hero></Hero>
      <Trustedby></Trustedby>
      <Services></Services>
      <Ourwork></Ourwork>
      <Teams></Teams>
      <ContactUs></ContactUs>
      <Footer theme={theme}></Footer>

      {/* Custom Cursor Ring */}
      <div
        ref={outlineRef}
        className="fixed top-0 left-0 h-10 w-10 rounded-full
         border border-primary pointer-events-none z-[9999]"
         style={{transition : 'transform 0.1s ease-out'}}
      ></div>

      {/* Custom Cursor Dot */}
      <div
        ref={dotref}
        className="fixed top-0 left-0 h-3 w-3 rounded-full
       bg-primary pointer-events-none z-[9999]"
      ></div>
    </div>
  );
};

export default App;
