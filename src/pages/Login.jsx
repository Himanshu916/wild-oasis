import styled from "styled-components";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import LoginForm from "../features/authentication/LoginForm";

const LoginLayout = styled.main`
  display: grid;
  grid-template-columns: 48rem;
  justify-content: center;
  align-content: center;
  min-height: 100vh;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4">Login in to your account</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
