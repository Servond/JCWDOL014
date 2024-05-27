import styled from "styled-components";

interface props {
  name: string;
  email: string;
}

const Title = styled.h1`
  color: red;
  font-size: 80px;
`;

const Submit = styled.button`
  font-size: 24px;
`;

function Home({ name, email }: props) {
  return (
    <>
      <Title>Ini Halaman Home</Title>
      <h4>
        Hello {name}, {email}
      </h4>
      <Submit>Click Me</Submit>
    </>
  );
}

export default Home;
