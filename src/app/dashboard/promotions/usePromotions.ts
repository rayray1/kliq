import { useQuery } from "@tanstack/react-query";
import PromotionApi from "./api";

const usePromotions = () => {
	return useQuery({
		queryKey: ["promotions"],
		queryFn: () => PromotionApi.get()
	});
};

export default usePromotions;
