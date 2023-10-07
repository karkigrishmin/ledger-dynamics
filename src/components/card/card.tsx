import clsx from "clsx";
import { ReactNode } from "react";
import {
	borderColors,
	borderSizes,
	roundness,
	sizes,
	spacings,
} from "@/theme/theme";

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
