import clsx from "clsx";
import { ReactNode } from "react";
import { spacings } from "../section-header";

interface ICardProps {
	padding?: "24" | "16";
	rounded?: "8";
	borderSize?: "1";
	borderColor?: "border-layout" | "transparent";
	className?: string;
	children?: ReactNode;
	header: ReactNode;
	footer: ReactNode;
	gap: keyof typeof spacings;
}

const Card = ({
	padding,
	rounded,
	borderSize,
	borderColor,
	className,
	children,
	header,
	footer,
	gap,
}: ICardProps) => {
	const sizes = {
		24: "p-[24px]",
		16: "p-[16px]",
	};

	const borderColors = {
		"border-layout": "border-border-layout",
		transparent: "border-transparent",
	};

	const borderSizes = {
		1: "border-[1px]",
	};

	const roundness = {
		8: "rounded-[8px]",
	};

	return (
		<div
			className={clsx(
				"flex flex-col",
				[
					padding && sizes[padding],
					rounded && roundness[rounded],
					borderSize && borderSizes[borderSize],
					borderColor && borderColors[borderColor],
					gap && spacings[gap],
				],
				className
			)}
		>
			{header}
			{footer}
			{children}
		</div>
	);
};

export default Card;
