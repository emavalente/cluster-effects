import styled from "styled-components";
import SocialItem from "./SocialItem";

const List = styled.ul`
  width: 100%;
  margin-top: 48px;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const socialContent = [
  {
    id: 1,
    icon: "logo-instagram",
    url: "https://www.instagram.com/pedalcluster/",
    target: "_blank",
  },
  {
    id: 2,
    icon: "logo-youtube",
    url: "https://www.youtube.com/@pedalCluster",
    target: "_blank",
  },
  {
    id: 3,
    icon: "logo-whatsapp",
    url: "https://api.whatsapp.com/send?phone=34610031990&text=Hola!%21%20quiero%20hacerles%20una%20consulta,%20por%20favor.",
    target: "_blank",
  },
];

const Socials = () => {
  return (
    <List>
      {socialContent.map((social) => (
        <SocialItem
          key={social.id}
          url={social.url}
          name={social.icon}
          target={social.target}
        />
      ))}
    </List>
  );
};

export default Socials;
