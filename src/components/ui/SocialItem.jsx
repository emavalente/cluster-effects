import styled from "styled-components";

const Item = styled.li`
  margin: 0 16px;
`;

const SocialItem = ({ url, target, name }) => {
  return (
    <Item>
      <a href={url} target={target}>
        <ion-icon name={name}></ion-icon>
      </a>
    </Item>
  );
};

export default SocialItem;
