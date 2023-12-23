import styled from "styled-components";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import { useState } from "react";
import Button from "../../ui/Button";
import { useLogin } from "./useLogin";
const Form = styled.form`
  padding: 2.4rem 4rem;

  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
`;
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();
  function submitHandler(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  function loginAsGuest(e) {
    e.preventDefault();
    // if (!email || !password) return;
    login(
      { email: "guest@gmail.com", password: "987654321" },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }
  return (
    <Form onSubmit={submitHandler}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" disabled={isLoading}>
          {/* {!isLoading ? "Log in" : <SpinnerMini />} */}
          Log In
        </Button>
        <Button
          type="button"
          onClick={loginAsGuest}
          size="large"
          disabled={isLoading}
        >
          {/* {!isLoading ? "Log in" : <SpinnerMini />} */}
          Log In As Guest
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
