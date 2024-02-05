import { useQueryClient } from "@tanstack/react-query";
import Button from "../../../components/Button";
import PromotionApi from "../api";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from "../../../components/Dialog";
import AddPromotionForm from "./AddPromotionForm";

export default function AddSubscription() {
	const queryClient = useQueryClient();

	const handleAdd = async () => {
		const result = await PromotionApi.add();
		if (result.ok) {
			queryClient.invalidateQueries({ queryKey: ["promotions"] });
			return;
		}
	};

	// return (
	//   <Button variant="primary" onClick={handleAdd}>
	//     Add a subscription
	//   </Button>
	// );

	return (
		<Dialog>
			<DialogTrigger>
				<Button variant='primary'>Add a subscription</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Add a new promotion</DialogTitle>
				</DialogHeader>

				<AddPromotionForm />
			</DialogContent>
		</Dialog>
	);
}
