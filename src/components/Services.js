import React from "react";
import Icon1 from "../assets/images/svg-04.svg";
import Icon2 from "../assets/images/svg-05.svg";
import Icon3 from "../assets/images/svg-01.svg";
import styled from "styled-components";

// ---- Component ----

const Services = () => {
	return (
		<ServicesContainer id="services">
			<ServicesH1>Our Services</ServicesH1>
			<ServicesWrapper>
				<ServicesCard>
					<ServicesIcon src={Icon1} />
					<ServicesH2>Flights planning</ServicesH2>
					<ServicesP>
						We help you plan your flights and reduce your costs.
					</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon2} />
					<ServicesH2>Hotel booking</ServicesH2>
					<ServicesP>We book the hotels for you, easily.</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon3} />
					<ServicesH2>Transfer planning</ServicesH2>
					<ServicesP>
						We help you plan your transfers so you can relax.
					</ServicesP>
				</ServicesCard>
			</ServicesWrapper>
		</ServicesContainer>
	);
};

export default Services;

// ---- Style ----

const ServicesContainer = styled.div`
	height: 760px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #010606;

	@media screen and (max-width: 768px) {
		height: 1200px;
		padding-top: 4rem;
	}

	@media screen and (max-width: 480px) {
		height: 1300px;
	}
`;

const ServicesWrapper = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	align-items: center;
	grid-gap: 16px;
	padding: 0 50px;

	@media screen and (max-width: 1000px) {
		grid-template-columns: 1fr 1fr;
	}

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		padding: 0 20px;
	}
`;

const ServicesCard = styled.div`
	background: #fff;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	border-radius: 10px;
	height: 320px;
	max-height: 440px;
	padding: 30px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.02);
		transition: all 0.2s ease-in-out;
		cursor: pointer;
	}
`;

const ServicesIcon = styled.img`
	height: 160px;
	width: 160px;
	margin-bottom: 10px;
`;

const ServicesH1 = styled.h1`
	font-size: 2.5rem;
	color: #fff;
	margin-bottom: 64px;

	@media screen and (max-width: 480px) {
		font-size: 2rem;
	}
`;

const ServicesH2 = styled.h2`
	font-size: 1rem;
	margin-bottom: 10px;
`;

const ServicesP = styled.p`
	font-size: 1rem;
	text-align: center;
`;
