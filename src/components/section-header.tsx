import clsx from "clsx";
import Typography, {
	ITypographyProps,
} from "@/components/typography/typography";
import { spacings } from "@/theme/theme";

interface ISectionHeaderProps {
	title: ITypographyProps;
	label: ITypographyProps;
	gap?: keyof typeof spacings;
	className?: string;
}

const SectionHeader = ({
	label,
	title,
	gap,
	className,
}: ISectionHeaderProps) => {
	return (
		<div className={clsx(["flex flex-col", gap && spacings[gap]], className)}>
			{/* label */}
			<Typography {...label} />
			{/* title */}
			<Typography {...title} />
		</div>
	);
};

export default SectionHeader;
