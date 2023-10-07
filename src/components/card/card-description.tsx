import Typography, {
	ITypographyProps,
} from "@/components/typography/typography";

const CardDescription = ({ tag, children, ...rest }: ITypographyProps) => {
	return (
		<Typography tag={tag} {...rest}>
			{children}
		</Typography>
	);
};

export default CardDescription;
