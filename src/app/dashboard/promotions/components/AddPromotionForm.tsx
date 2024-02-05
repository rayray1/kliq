import Button from "../../../components/Button";

export default function AddPromotionForm() {
	return (
		<form className='flex flex-col gap-6'>
			<div className='flex flex-col gap-2'>
				<label>Promotion Name</label>
				<input
					className='focus:outline-gray-800 border border-gray-600 rounded-xl px-4 py-3'
					type='name'
				/>
			</div>
			<div className='flex flex-col gap-2'>
				<label>Discount Type</label>
				<input
					className='focus:outline-gray-800 border border-gray-600 rounded-xl px-4 py-3'
					type='name'
				/>
			</div>
			<div className='flex flex-col gap-2'>
				<label>Discount</label>
				<input
					className='focus:outline-gray-800 border border-gray-600 rounded-xl px-4 py-3'
					type='name'
				/>
			</div>
			<div className='flex items-center justify-end gap-4'>
				<Button variant='bordered' className='ml-auto'>
					Cancel
				</Button>
				<Button>Submit</Button>
			</div>
		</form>
	);
}
