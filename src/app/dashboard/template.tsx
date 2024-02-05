import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export default function DashboardTemplate() {
	return (
		<div className='h-full flex'>
			<Sidebar />
			<main className='p-10 flex-1'>
				<Outlet />
			</main>
		</div>
	);
}
