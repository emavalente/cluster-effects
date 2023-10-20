import styled from "styled-components";

const Link = styled.a`
  width: 110%;
  margin-top: 24px;
  padding: 16px 24px;
  position: relative;
  background-color: #fed718;
  font-family: "Poppins", sans-serif;
  font-size: 1.1rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.5s ease;

  &::before {
    content: "";
    width: 100%;
    height: 54px;
    position: absolute;
    top: 0;
    left: -105%;
    transition: all 0.5s ease;
    background: linear-gradient(
      to right,
      rgba(252, 243, 200, 0.5),
      #f7e8a0,
      rgba(252, 243, 200, 0.5)
    );

    transform: skewX(-20deg);
  }
  &:hover {
    transform: translateY(-10px);
  }

  &:hover::before {
    transform: skewX(-20deg) translateX(210%);
  }
`;

const ShopBtn = () => {
  return (
    <>
      <Link
        href="https://reverb.com/item/71598528-cluster-jaminabox-18e-2023-dorado"
        target="_blank"
      >
        Shop in Reverb
      </Link>
    </>
  );
};

export default ShopBtn;
