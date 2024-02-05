import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "./components/Loading";
import DashboardTemplate from "./dashboard/template";
export { RouterProvider } from "react-router-dom";

function PageWrapper({ children }: { children: React.ReactNode }) {
	return <React.Suspense fallback={<Loading />}>{children}</React.Suspense>;
}

// pages
const HomePage = React.lazy(() => import("./dashboard/homepage"));
const ProgramsPage = React.lazy(() => import("./dashboard/programs/programs"));
const SessionPage = React.lazy(() => import("./dashboard/sessions/sessions"));
const ContentLibraryPage = React.lazy(
	() => import("./dashboard/content-library/content")
);
const CollectionsPage = React.lazy(
	() => import("./dashboard/collections/collections")
);
const CommunityPage = React.lazy(
	() => import("./dashboard/community/community")
);
const NutritionPage = React.lazy(
	() => import("./dashboard/nutrition/nutrition")
);
const BlogPage = React.lazy(() => import("./dashboard/blog/blog"));
const HelpCenterPage = React.lazy(() => import("./dashboard/help-center/help"));
const SettingsPage = React.lazy(() => import("./dashboard/settings/settings"));
const UsersPage = React.lazy(() => import("./dashboard/users/users"));

export const router = createBrowserRouter([
	{
		path: "/",
		element: <DashboardTemplate />,
		children: [
			{
				path: "",
				element: (
					<PageWrapper>
						<HomePage />
					</PageWrapper>
				)
			},
			{
				path: "programs/",
				element: (
					<PageWrapper>
						<ProgramsPage />
					</PageWrapper>
				)
			},
			{
				path: "sessions/",
				element: (
					<PageWrapper>
						<SessionPage />
					</PageWrapper>
				)
			},
			{
				path: "content-library/",
				element: (
					<PageWrapper>
						<ContentLibraryPage />
					</PageWrapper>
				)
			},
			{
				path: "collections/",
				element: (
					<PageWrapper>
						<CollectionsPage />
					</PageWrapper>
				)
			},
			{
				path: "community/",
				element: (
					<PageWrapper>
						<CommunityPage />
					</PageWrapper>
				)
			},
			{
				path: "nutrition/",
				element: (
					<PageWrapper>
						<NutritionPage />
					</PageWrapper>
				)
			},
			{
				path: "blog/",
				element: (
					<PageWrapper>
						<BlogPage />
					</PageWrapper>
				)
			},
			{
				path: "help-center/",
				element: (
					<PageWrapper>
						<HelpCenterPage />
					</PageWrapper>
				)
			},
			{
				path: "settings/",
				element: (
					<PageWrapper>
						<SettingsPage />
					</PageWrapper>
				)
			},
			{
				path: "users/",
				element: (
					<PageWrapper>
						<UsersPage />
					</PageWrapper>
				)
			}
		]
	}
]);
