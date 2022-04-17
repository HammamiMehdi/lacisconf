import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { footerSocialData } from "../data";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const LogImg = styled.img`
  width: 220px;
  height: 80px;
  padding: 0 10px;
  overflow: hidden;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  &:hover{
    color: #6d0600;
    font-weight: bold;
    
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
      <LogImg src="./logo.png" to="/home"></LogImg>
        <Desc>
          LACUS est une entreprise tunisienne de confection de textile général,
          spécialisée dans la confection et la commercialistation de types de vétements
          professionnels, Fondée en 2021 par une équipe créative et proactive ayant expérience
          dans le domaine de l'habillement professionnel.
        </Desc>
        <SocialContainer>
        {footerSocialData.map((social) => (
          <SocialIcon  
          color="3B5999" 
          href= {social.href}
          target="_blank"
          aria-label={social.name}>
            <Facebook />
          </SocialIcon> ))}
        {footerSocialData.map((social) => (
          <SocialIcon 
          color="E4405F"
          href= {social.href}
          target="_blank"
          aria-label={social.name}>
            <Instagram />
          </SocialIcon>))}
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 2032 L'aouina , Tunis, Tunisie
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +216 51 323 372
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> lacusconf@gmail.com
        </ContactItem>
        
      </Right>
    </Container>
  );
};

export default Footer;
