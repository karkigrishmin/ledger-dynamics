import Typography, {
	ITypographyProps,
} from "@/components/typography/typography";

const CardTitle = ({ tag, children, ...rest }: ITypographyProps) => {
	return (
		<Typography tag={tag} {...rest}>
			{children}
		</Typography>
	);
};

export default CardTitle;
