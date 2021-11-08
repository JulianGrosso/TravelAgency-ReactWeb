import React, { useState } from "react";
import { homeObjOne, homeObjTwo, homeObjThree } from "../components/Data";
import Footer from "../components/Footer";
import HeroSection from "../components/Hero";
import InfoSection from "../components/InfoSection";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Sidebar from "../components/Sidebar";

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<HeroSection />
			<InfoSection {...homeObjOne} />
			<InfoSection {...homeObjTwo} />
			<Services />
			<InfoSection {...homeObjThree} />
			<Footer />
		</>
	);
};

export default Home;
