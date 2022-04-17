import styled from "styled-components"


const Container = styled.div`
height: 100 px;
padding: 30px;
background-color: #ffffff;
color: #000000;
display: flex;
align-items: center;
justify-content: center;
font-size: 70px;
font-weight: 600;
flex-direction: column;
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`

const Button = styled.button`
padding: 4.5px 18.5px;
border: 1.5px solid transparent;
background-color: #000000;
color: white;
border-radius:30px;
justify-content: center;
align-items: center;
cursor: pointer;`


const Announcement2 = () => {
  return (
    <Container>
      CHECK OUR CATEGORIES !
      <Button>
        HERE
      </Button>

    </Container>
  )
}

export default Announcement2;