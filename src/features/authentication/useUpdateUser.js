import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/authApi";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      toast.success("User is successfully updated");
    },
    onError: () => {
      toast.error("Coud not update user");
    },
  });

  return { updateUser, isUpdating };
}
