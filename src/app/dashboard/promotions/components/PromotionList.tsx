import { useQueryClient } from "@tanstack/react-query";
import { dotsHorizontal } from "../../../../libs/icons";
import { Badge } from "../../../components/Badge";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger
} from "../../../components/DropdownMenu";
import PromotionApi from "../api";
import { Promotion } from "../types";
import usePromotions from "../usePromotions";

export default function PromotionList() {
	const { isLoading, data } = usePromotions();

	if (data?.length) {
		return (
			<table className='w-full'>
				<thead className='font-semibold'>
					<tr>
						<th className='bg-grey-60 text-grey-10 p-2 text-left first:rounded-tl-lg w-[24px]'>
							{""}
						</th>
						<th className='bg-grey-60 text-grey-10 p-2 text-left'>Name</th>
						<th className='bg-grey-60 text-grey-10 p-2 text-left'>
							Discount Type
						</th>
						<th className='bg-grey-60 text-grey-10 p-2 text-left'>
							Discount Off
						</th>
						<th className='bg-grey-60 text-grey-10 p-2 text-left'>End Date</th>
						<th className='bg-grey-60 text-grey-10 p-2 text-left'>Products</th>
						<th className='bg-grey-60 text-grey-10 p-2 text-left'>Status</th>
						<th className='bg-grey-60 text-grey-10 p-2 text-left rounded-tr-lg w-[72px]'>
							{""}
						</th>
					</tr>
				</thead>
				<tbody className='font-light'>
					{data.map(promotion => (
						<tr key={promotion.id}>
							<td className='p-2'>{""}</td>
							<td className='p-2'>{promotion.name}</td>
							<td className='p-2'>
								<span className='capitalize'>{promotion.discountType}</span>
							</td>
							<td className='p-2'>{promotion.discount} - £GDP</td>
							<td className='p-2'>{promotion.endDate}</td>
							<td className='p-2'>
								<Badge variant='error' className='capitalize'>
									{promotion.productType}
								</Badge>
							</td>
							<td className='p-2'>
								<Badge
									variant={promotion.status === "active" ? "success" : "error"}
									className='capitalize'
								>
									<svg
										width='11'
										height='10'
										viewBox='0 0 11 10'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<title>dot</title>
										<circle cx='5.33337' cy='5' r='5' fill='#1C3838' />
									</svg>
									{promotion.status}
								</Badge>
							</td>
							<td className='px-2 py-3'>
								<Actions promotion={promotion} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		);
	}

	if (isLoading) {
		return <Loading />;
	}

	if (!isLoading && data?.length === 0) {
		return <Empty />;
	}
}

function Empty() {
	return <div className='w-full h-full grid place-items-center'>No data.</div>;
}

function Loading() {
	return (
		<div className='w-full h-full grid place-items-center'>
			Loading promotions...
		</div>
	);
}

function Actions({ promotion }: { promotion: Promotion }) {
	const queryClient = useQueryClient();

	const handleView = () => {
		alert(JSON.stringify(promotion));
	};

	const handleToggleActive = async () => {
		const result = await PromotionApi.toggleActive(promotion);
		if (result.ok) {
			queryClient.invalidateQueries({ queryKey: ["promotions"] });
			return;
		}
	};

	const handleDelete = async () => {
		const result = await PromotionApi.delete(promotion.id);
		if (result.ok) {
			queryClient.invalidateQueries({ queryKey: ["promotions"] });
			return;
		}
		alert("failed");
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<button type='button' className='p-2'>
					<img src={dotsHorizontal} alt='more' width={24} height={24} />
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuGroup>
					<DropdownMenuItem onClick={handleView}>View</DropdownMenuItem>
					<DropdownMenuItem onClick={handleToggleActive}>
						Set {promotion.status === "active" ? "Inactive" : "Active"}
					</DropdownMenuItem>
					<DropdownMenuItem onClick={handleDelete}>
						<span className='text-red-500'>Delete</span>
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
