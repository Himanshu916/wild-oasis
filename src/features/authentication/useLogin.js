import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/authApi";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (data) => {
      console.log(data);
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return { isLoading, login };
}
