import { cn } from "../../utils";

type Props = React.ComponentProps<"article">;
export default function Card({ className, ...props }: Props) {
	return (
		<article
			className={cn(
				"bg-primary border border-primary rounded-xl p-6",
				className
			)}
			{...props}
		/>
	);
}
