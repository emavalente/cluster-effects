import styled from "styled-components";
import image from "../assets/logo.jpg";
import tapis from "../assets/poster_chico.png";
import Footer from "../components/Footer";
import ShopBtn from "../components/ui/ShopBtn";
import Socials from "../components/ui/Socials";

const Background = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-image: linear-gradient(
      to right,
      rgb(20, 20, 20),
      rgba(39, 38, 38, 0.74)
    ),
    url(${tapis});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Container = styled.div`
  width: 135px;
  margin-top: 270px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 100px;
  border-radius: 50%;
`;

const Message = styled.h1`
  text-align: center;
  color: white;
  text-transform: uppercase;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: 900;
`;

const BuildingPage = () => {
  return (
    <Background>
      <Container id="container">
        <Logo src={image} alt="cluster logo"></Logo>
        <Message>building new sounds</Message>
        <p>Coming Soon!</p>
        <ShopBtn />
        <Socials />
      </Container>
      <Footer />
    </Background>
  );
};

export default BuildingPage;
