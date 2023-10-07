import clsx from "clsx";
import Typography, {
	ITypographyProps,
	fontWeights,
	letterSpacings,
	tags,
	textColors,
	textSizes,
} from "@/components/typography/typography";

export const spacings = {
	16: "gap-[16px]",
	7: "gap-[7px]",
	60: "gap-[60px]",
	24: "gap-[24px]",
	120: "gap-[120px]",
};

interface ISectionHeaderProps {
	// title?: string;
	title: ITypographyProps;
	label: ITypographyProps;
	// labelColor?: keyof typeof textColors;
	// labelTag: keyof typeof tags;
	// labelWeight?: keyof typeof fontWeights;
	// labelLetterSpacing?: keyof typeof letterSpacings;
	// labelSize?: keyof typeof textSizes;
	// labelClassName?: string;
	// titleClassName?: string;
	gap?: keyof typeof spacings;
	className?: string;
}

const SectionHeader = ({
	label,
	title,
	// labelClassName,
	// titleClassName,
	// labelColor,
	// titleColor,
	// labelLetterSpacing,
	// titleLetterSpacing,
	// labelSize,
	// titleSize,
	// titleTag,
	// labelTag,
	// labelWeight,
	// titleWeight,
	gap,
	className,
}: ISectionHeaderProps) => {
	return (
		<div className={clsx(["flex flex-col", gap && spacings[gap]], className)}>
			{/* label */}
			<Typography
				{...label}
				// size={labelSize}
				// weight={labelWeight}
				// tag={labelTag}
				// color={labelColor}
				// letterSpacing={labelLetterSpacing}
				// className={labelClassName}
			/>
			{/* title */}
			<Typography
				{...title}
				// tag={titleTag}
				// size={titleSize}
				// weight={titleWeight}
				// color={titleColor}
				// letterSpacing={titleLetterSpacing}
				// className={titleClassName}
			/>
		</div>
	);
};

export default SectionHeader;
