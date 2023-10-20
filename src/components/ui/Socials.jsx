import styled from "styled-components";

const List = styled.ul`
  width: 100%;
  margin-top: 48px;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Item = styled.li`
  margin: 0 16px;
`;

const Socials = () => {
  return (
    <List>
      <Item>
        <a href="https://www.instagram.com/pedalcluster/" target="_blank">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
      </Item>
      <Item>
        <a href="https://www.youtube.com/@pedalCluster" target="_blank">
          <ion-icon name="logo-youtube"></ion-icon>
        </a>
      </Item>
    </List>
  );
};

export default Socials;
