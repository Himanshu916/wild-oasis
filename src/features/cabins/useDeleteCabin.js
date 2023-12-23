import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/cabinsApi";
import toast from "react-hot-toast";

export function useDeleteCabin() {
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate: deletingCabin } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      toast.success("Cabin is successfully deleted");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isDeleting, deletingCabin };
}
