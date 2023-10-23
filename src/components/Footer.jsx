import styled from "styled-components";
import image from "../assets/paypal.svg";
import Socials from "./ui/Socials";

const Legals = styled.footer`
  width: 100%;
  padding: 8px 16px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  text-align: center;
  color: white;
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 1rem;
  margin-bottom: 24px;
`;

const Logo = styled.img`
  width: 90px;
  margin-left: 8px;
  background-color: white;
  border-radius: 8px;
`;

const Footer = () => {
  return (
    <Legals>
      <Title>
        we accept paypal payments
        <Logo src={image} alt="paypal logo" />
      </Title>
      <nav>
        <ul>
          <li>Refund Policy</li>
          <li>Privacy Policy</li>
          <li>Terms Of Service</li>
        </ul>
      </nav>

      <h5>
        &copy;2023 Pedal Cluster. All Rights Reserved -
        <a href="contacto@pedalcluster.com"> contacto@pedalcluster.com</a> /
        developed by{" "}
        <a href="https://www.linkedin.com/in/emanuel-valente/" target="_blank">
          Emanuel Valente
        </a>
      </h5>
    </Legals>
  );
};

export default Footer;
