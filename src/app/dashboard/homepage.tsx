import { filterLines, search, switchVertical } from "../../libs/icons";
import Button from "../components/Button";
import Card from "../components/Card";
import Divider from "../components/Divider";
import AddSubscription from "./promotions/components/AddSubscription";
import PromotionList from "./promotions/components/PromotionList";

function Breadcrumbs() {
	return (
		<ul className='flex items-center gap-2 font-light text-xs'>
			<li className='flex items-center gap-2'>
				<span>Home</span>
			</li>
			<li className='flex items-center gap-2'>
				<span>/</span>
				<span>App Settings</span>
			</li>
			<li className='flex items-center gap-2'>
				<span>/</span>
				<span>Promotions</span>
			</li>
		</ul>
	);
}

export default function HomePage() {
	return (
		<section className='space-y-8'>
			<div className='flex items-center gap-8'>
				<Button>
					<span>Web app</span>
					<svg
						width='19'
						height='20'
						viewBox='0 0 19 20'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<title>web icon</title>
						<g clipPath='url(#clip0_1_193)'>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M9.42858 18.6428C14.2019 18.6428 18.0714 14.7733 18.0714 9.99997C18.0714 5.22666 14.2019 1.35712 9.42858 1.35712C4.65526 1.35712 0.785721 5.22666 0.785721 9.99997C0.785721 14.7733 4.65526 18.6428 9.42858 18.6428ZM7.64163 3.15627C4.84693 3.88395 2.72487 6.27823 2.40031 9.21426H5.53936C5.71552 7.04318 6.44216 4.95916 7.64163 3.15627ZM11.2155 3.15627C12.415 4.95916 13.1416 7.04318 13.3178 9.21426H16.4568C16.1323 6.27823 14.0102 3.88395 11.2155 3.15627ZM11.7405 9.21426C11.5431 7.08248 10.7405 5.05149 9.42858 3.36131C8.11669 5.05149 7.31405 7.08248 7.11668 9.21426H11.7405ZM7.11668 10.7857H11.7405C11.5431 12.9175 10.7405 14.9485 9.42858 16.6386C8.11669 14.9485 7.31405 12.9175 7.11668 10.7857ZM5.53936 10.7857H2.40031C2.72487 13.7217 4.84693 16.116 7.64163 16.8437C6.44216 15.0408 5.71552 12.9568 5.53936 10.7857ZM11.2155 16.8437C12.415 15.0408 13.1416 12.9568 13.3178 10.7857H16.4568C16.1323 13.7217 14.0102 16.116 11.2155 16.8437Z'
								fill='white'
							/>
						</g>
						<defs>
							<clipPath id='clip0_1_193'>
								<rect
									width='18.8571'
									height='18.8571'
									fill='white'
									transform='translate(0 0.571411)'
								/>
							</clipPath>
						</defs>
					</svg>
				</Button>

				<Button variant='bordered'>
					<span>Application Validation</span>
					<svg
						width='25'
						height='24'
						viewBox='0 0 25 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<title>arrow down icon</title>
						<path
							d='M6.85718 9L12.8572 15L18.8572 9'
							stroke='#181A1D'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</Button>
			</div>

			{/* page heading */}
			<div className='pt-6 space-y-2'>
				<h1 className='text-2xl font-semibold'>Promotions</h1>
				<Breadcrumbs />
			</div>

			<Card className='min-h-[500px] h-px'>
				<div className='flex items-center justify-end gap-4'>
					<Button variant='grey' className='rounded-full'>
						<img alt='src icon' src={search} width={16} height={16} />
						<img alt='src icon' src={filterLines} width={16} height={16} />
					</Button>
					<Button variant='grey' size='icon' className='rounded-[10px]'>
						<img alt='src icon' src={switchVertical} width={16} height={16} />
					</Button>
				</div>

				<Divider />

				<PromotionList />
			</Card>

			<AddSubscription />
		</section>
	);
}
