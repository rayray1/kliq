import { Promotion } from "./types";

const PromotionApi = {
	async get(): Promise<Promotion[]> {
		const response = await fetch("http://localhost:3001/promotions", {
			method: "GET"
		});
		const json = await response.json();
		return json as Promotion[];
	},

	async delete(id: string): Promise<{ message: string; ok: boolean }> {
		const response = await fetch(`http://localhost:3001/promotions/${id}`, {
			method: "DELETE"
		});
		const json = await response.json();
		console.log({ json });
		return { message: "deleted", ok: true };
	},

	async toggleActive(
		promotion: Promotion
	): Promise<{ message: string; ok: boolean }> {
		const response = await fetch(
			`http://localhost:3001/promotions/${promotion.id}`,
			{
				method: "PATCH",
				body: JSON.stringify({
					status: promotion.status === "active" ? "inactive" : "active"
				})
			}
		);
		const json = await response.json();
		console.log({ update: json });
		return { message: "deleted", ok: true };
	},

	async add(): Promise<{ message: string; ok: boolean }> {
		const newPromotion: Promotion = {
			id: crypto.randomUUID(),
			name: "new promotion",
			discount: 100,
			discountType: "premium",
			productType: "meal plan",
			status: "active",
			endDate: "04/11/24"
		};
		const response = await fetch("http://localhost:3001/promotions", {
			method: "POST",
			body: JSON.stringify(newPromotion)
		});
		const json = await response.json();
		console.log({ json });
		return {
			ok: true,
			message: "ok"
		};
	}
};

export default PromotionApi;
