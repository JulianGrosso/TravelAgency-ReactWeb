import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

// ---- Component ----

const Navbar = ({ toggle }) => {
	const [scrollNav, setScrollNav] = useState(false);

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", changeNav);
	}, []);

	const toggleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<>
			<Nav scrollNav={scrollNav}>
				<NavbarConteiner>
					<NavLogo to="/" onClick={toggleHome}>
						TRVL
					</NavLogo>
					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks
								to="about"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-80}
							>
								About
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								to="discover"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-80}
							>
								Discover
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								to="services"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-80}
							>
								Services
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								to="signup"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-80}
							>
								Sign Up
							</NavLinks>
						</NavItem>
					</NavMenu>
					<NavBtn>
						<NavBtnLink to="/signin">Sign In</NavBtnLink>
					</NavBtn>
				</NavbarConteiner>
			</Nav>
		</>
	);
};

export default Navbar;

// ---- Style ----

const Nav = styled.nav`
	background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};

	height: 80px;
	margin-top: -80px;

	position: sticky;
	top: 0;
	z-index: 10;

	display: flex;
	justify-content: center;
	align-items: center;

	font-size: 1rem;

	@media screen and (max-width: 960px) {
		transition: 0.8s all ease;
	}
`;

const NavbarConteiner = styled.div`
	height: 80px;
	width: 100%;
	max-width: 1100px;

	display: flex;
	justify-content: space-between;

	z-index: 1;

	padding: 0 24px;
`;

const NavLogo = styled(LinkRouter)`
	font-size: 2rem;
	font-weight: bold;
	text-decoration: none;

	color: white;
	justify-self: flex-start;
	cursor: pointer;

	display: flex;
	align-items: center;

	margin-left: 24px;
`;

const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 768px) {
		color: white;
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: -22px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const NavItem = styled.li`
	height: 80px;
`;

const NavLinks = styled(LinkScroll)`
	color: white;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;

	&.active {
		border-bottom: 3px solid #01bf71;
	}
`;

const NavBtn = styled.nav`
	display: flex;
	align-items: center;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const NavBtnLink = styled(LinkRouter)`
	border-radius: 50px;
	background: #01bf71;
	white-space: nowrap;
	padding: 10px 22px;
	color: #010606;
	font-size: 1rem;
	outline: none;
	border: none;
	cursor: pointer;
	text-decoration: none;
	transition: all 0.2s ease-in-out;

	&:hover {
		transition: all 0.2 ease-in-out;
		background: white;
		color: #010606;
	}
`;
