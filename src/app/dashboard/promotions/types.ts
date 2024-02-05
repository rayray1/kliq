type ProductType = "meal plan" | "course";
type Status = "active" | "inactive";

export type Promotion = {
	id: string;
	name: string;
	discountType: string;
	discount: number;
	endDate: string;
	productType: ProductType;
	status: Status;
};
