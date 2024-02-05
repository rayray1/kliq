import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
	announcement,
	announcement2,
	bookOpen,
	file,
	folderPlus,
	grid,
	heartHand,
	medicalCross,
	search,
	server,
	settings,
	sidebar,
	userCircle
} from "../../libs/icons";
import { cn } from "../../utils";

const navItems = [
	{
		icon: grid,
		label: "Dashboard",
		link: "/"
	},
	{
		icon: bookOpen,
		label: "Sessions",
		link: "sessions/"
	},
	{
		icon: announcement,
		label: "Programs",
		link: "programs/"
	},
	{
		icon: server,
		label: "Content Library",
		link: "content-library/"
	},
	{
		icon: folderPlus,
		label: "Collections",
		link: "collections/"
	},
	{
		icon: announcement2,
		label: "Community",
		link: "community/"
	},
	{
		icon: heartHand,
		label: "Nutrition",
		link: "nutrition/"
	},
	{
		icon: file,
		label: "Blog",
		link: "blog/"
	},
	{
		icon: medicalCross,
		label: "Help Center",
		link: "help-center/"
	}
];

function NavItem({
	navItem,
	smallView
}: {
	navItem: { icon: string; label: string; link: string };
	smallView: boolean;
}) {
	return (
		<NavLink
			to={navItem.link}
			className={({ isActive }) =>
				cn("px-12 py-4 flex items-center gap-4 hover:bg-bg-100 text-gray-800", {
					"bg-bg-200": isActive,
					"p-3 justify-center": smallView
				})
			}
		>
			<img alt={navItem.label} src={navItem.icon} width={24} height={24} />
			{!smallView && <span className='text-sm'>{navItem.label}</span>}
		</NavLink>
	);
}

export function Sidebar() {
	const [smallView, setSmallView] = React.useState(false);
	const handleSmallView = () => {
		setSmallView(s => !s);
	};

	return (
		<aside
			className={cn(
				"flex flex-col gap-6 h-full bg-secondary overflow-auto",
				smallView ? "w-[50px]" : "min-w-[336px]"
			)}
		>
			{smallView ? (
				<header className='flex flex-col items-center gap-6 pt-2'>
					<button type='button' className='p-2' onClick={handleSmallView}>
						<img
							alt='toggle sidebar'
							src={sidebar}
							width={24}
							height={24}
							className=''
						/>
					</button>
				</header>
			) : (
				<header className='p-8 flex flex-col items-center gap-6'>
					<div className='w-full flex items-start justify-between'>
						<Link to='/'>
							<img
								alt='kliq logo'
								src={logo}
								className='object-cover w-[143px] h-full'
							/>
						</Link>
						<button type='button' className='p-2' onClick={handleSmallView}>
							<img
								alt='toggle sidebar'
								src={sidebar}
								width={24}
								height={24}
								className=''
							/>
						</button>
					</div>
					<div className='bg-primary w-full rounded-full flex gap-4 p-4 focus-within:border-grey-80 border'>
						<img alt='search icon' src={search} width={24} height={24} />
						<input
							placeholder='Search'
							type='text'
							className='focus:outline-none placeholder:text-grey-80'
						/>
					</div>
				</header>
			)}

			<nav className='space-y-1'>
				{navItems.map(navItem => (
					<NavItem
						smallView={smallView}
						navItem={navItem}
						key={navItem.label}
					/>
				))}
			</nav>

			<footer
				className={cn("pt-8 border-t border-primary", {
					"flex flex-col h-full justify-end": smallView
				})}
			>
				<nav className='space-y-1'>
					{!smallView && (
						<div className='p-8 pt-0'>
							<div className='bg-primary h-[240px] rounded-2xl grid place-items-center'>
								featured card
							</div>
						</div>
					)}

					<NavItem
						navItem={{
							link: "/settings",
							icon: settings,
							label: "Settings"
						}}
						smallView={smallView}
					/>
					<NavItem
						navItem={{
							link: "/users",
							icon: userCircle,
							label: "User Name"
						}}
						smallView={smallView}
					/>
				</nav>
			</footer>
		</aside>
	);
}
