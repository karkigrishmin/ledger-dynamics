import {
	fontWeights,
	letterSpacings,
	tags,
	textColors,
	textSizes,
} from "@/theme/theme";
import clsx from "clsx";
import { ReactNode } from "react";

export interface ITypographyProps {
	tag?: keyof typeof tags;
	children: ReactNode;
	className?: string;
	size?: keyof typeof textSizes;
	color?: keyof typeof textColors;
	weight?: keyof typeof fontWeights;
	letterSpacing?: keyof typeof letterSpacings;
}

const Typography = ({
	tag: as = "p",
	children,
	className,
	size,
	color,
	weight,
}: ITypographyProps) => {
	const Tag = as;

	return (
		<>
			<Tag
				className={clsx(
					[
						size && textSizes[size],
						color && textColors[color],
						weight && fontWeights[weight],
					],
					className
				)}
			>
				{children}
			</Tag>
		</>
	);
};

export default Typography;
