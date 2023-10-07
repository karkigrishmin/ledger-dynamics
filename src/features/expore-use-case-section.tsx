import Card from "@/components/card/card";
import CardDescription from "@/components/card/card-description";
import CardTitle from "@/components/card/card-title";
import Grid from "@/components/grid/grid";
import ResponsiveContainer from "@/components/responsive-container/responsive-container";
import SectionHeader from "@/components/section-header";
import { exploreUseCasesData } from "@/data/use-cases-data";

const ExploreUseCaseSection = () => {
	return (
		<>
			<div className='bg-white'>
				<ResponsiveContainer>
					<div className='flex flex-col gap-[60px]'>
						<SectionHeader
							label={{
								children: exploreUseCasesData.label,
								size: 48,
								weight: 500,
								tag: "h1",
								color: "black",
								letterSpacing: "-0.96",
							}}
							title={{
								children: exploreUseCasesData.title,
								color: "black",
								letterSpacing: "-0.32",
								size: 16,
								tag: "h5",
								weight: 400,
							}}
							gap={7}
						/>

						<Grid gap={24}>
							{exploreUseCasesData.contents.map(
								(eachUseCaseContent, index, array) => (
									<Card
										gap={24}
										header={
											<div className='flex flex-col gap-[16px]'>
												<CardTitle
													tag='h4'
													color='black'
													weight={700}
													size={20}
												>
													<div className='flex gap-[15px] items-center '>
														<span>{eachUseCaseContent.icon}</span>
														{eachUseCaseContent.label}
													</div>
												</CardTitle>
												<CardDescription
													color='gray'
													size={16}
													weight={400}
													tag='p'
												>
													{eachUseCaseContent.description}
												</CardDescription>
											</div>
										}
										footer={<div className='flex flex-col gap-2'>footer</div>}
										borderColor={"border-layout"}
										borderSize={"1"}
										padding={"16"}
										key={index}
										className='bg-[#ffffff66]'
										rounded='8'
									/>
								)
							)}
						</Grid>
					</div>
				</ResponsiveContainer>
			</div>
		</>
	);
};

export default ExploreUseCaseSection;
