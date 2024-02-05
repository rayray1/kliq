import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils";

const buttonVariants = cva(
	"inline-flex items-center border border-transparent gap-2 font-semibold rounded-lg",
	{
		variants: {
			variant: {
				primary: "bg-brand-900 hover:bg-brand-700 text-white",
				grey: "bg-grey-10 border-grey-20 hover:bg-grey-60/15",
				bordered: "bg-white border-grey-80 hover:bg-grey-10"
			},
			size: {
				sm: "text-sm py-2.5 px-3",
				icon: "p-2"
			}
		},
		defaultVariants: {
			size: "sm",
			variant: "primary"
		}
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, type = "button", ...props }, ref) => {
		return (
			<button
				type={type}
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);
Button.displayName = "Button";

export default Button;
