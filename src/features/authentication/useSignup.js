import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/authApi";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: ({ email, password, fullName }) =>
      signupApi({ email, password, fullName }),
    onSuccess: (data) => {
      console.log(data, "user is registered");
    },
    onError: () => {
      console.log("something went wrong");
    },
  });

  return { signup, isLoading };
}
