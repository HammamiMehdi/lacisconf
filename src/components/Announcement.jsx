import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #6d0600;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container >Super Deal! Vestes Workfit professionnels a partir de 29DT </Container>;
};

export default Announcement;
