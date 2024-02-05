import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils";

const variants = cva(
	"inline-flex items-center gap-1.5 rounded-md py-1 px-3 text-xs",
	{
		variants: {
			variant: {
				success: "bg-lime-200",
				default: "bg-primary",
				error: "bg-tangerine-300",
				info: "bg-alpine-200"
			}
		},
		defaultVariants: {
			variant: "default"
		}
	}
);

type Props = React.ComponentProps<"div"> & VariantProps<typeof variants>;
export function Badge({ className, variant, ...props }: Props) {
	return <div className={cn(variants({ variant }), className)} {...props} />;
}
