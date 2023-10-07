import clsx from "clsx";
import { ReactNode } from "react";

export const textSizes = {
	14: "text-[14px]",
	48: "text-[48px]",
	20: "text-[20px]",
	24: "text-[24px] ",
	16: "text-[16px]",
};

export const fontWeights = {
	400: "font-[400]",
	500: "font-[500]",
	600: "font-[600]",
	700: "font-[700]",
};

export const textColors = {
	red: "text-[#EF3C3D]",
	black: "text-black",
	gray: "text-[#6D747D]",
};

export const letterSpacings = {
	"-0.28": "tracking-[-0.28px]",
	"-0.96": "tracking-[-0.96px]",
	"-0.48": "tracking-[-0.48px]",
	"-0.32": "tracking-[-0.32px]",
};

export const tags = {
	h1: "h1",
	h2: "h2",
	h3: "h3",
	h4: "h4",
	h5: "h5",
	h6: "h6",
	p: "p",
};

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
