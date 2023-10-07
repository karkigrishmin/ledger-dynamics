import Card from "@/components/card/card";
import CardDescription from "@/components/card/card-description";
import CardTitle from "@/components/card/card-title";
import Grid from "@/components/grid/grid";
import ResponsiveContainer from "@/components/responsive-container/responsive-container";
import SectionHeader from "@/components/section-header";
import { productFeaturesData } from "@/data/product-features-data";
import { productOverviewData } from "@/data/product-overview-data";
import clsx from "clsx";

const ProductsSection = () => {
	const sectionData = [productOverviewData, productFeaturesData];

	return (
		<>
			{/* product overview and product features section */}
			{sectionData.map((eachSection, eachSectionIndex) => (
				<div
					key={eachSection.label}
					className={clsx({
						"bg-[#D9D9D9]": eachSectionIndex === 0,
						"bg-[#F6F5F3]": eachSectionIndex >= 1,
					})}
				>
					<ResponsiveContainer key={eachSection.label}>
						<div
							className={clsx("flex flex-col", {
								"gap-[120px]": eachSectionIndex === 0,
								"gap-[60px]": eachSectionIndex >= 1,
							})}
						>
							<SectionHeader
								label={{
									children: eachSection.label,
									className: "uppercase",
									size: 14,
									weight: 700,
									tag: "h5",
									color: "red",
									letterSpacing: "-0.28",
								}}
								title={{
									children: eachSection.title,
									color: "black",
									letterSpacing: "-0.96",
									size: 48,
									tag: "h1",
									weight: 500,
								}}
								gap={16}
							/>

							<Grid>
								{eachSection.contents.map(
									(eachSectionContent, index, array) => (
										<Card
											gap={eachSectionIndex === 0 ? 24 : 60}
											header={<span>{eachSectionContent.icon}</span>}
											footer={
												<div className='flex flex-col gap-2'>
													<CardTitle
														tag='h4'
														color='black'
														weight={700}
														size={20}
													>
														{eachSectionContent.label}
													</CardTitle>
													<CardDescription
														color='gray'
														size={16}
														weight={400}
														tag='p'
													>
														{eachSectionContent.description}
													</CardDescription>
												</div>
											}
											borderColor={
												eachSectionIndex === 1 ? "border-layout" : "transparent"
											}
											borderSize={eachSectionIndex === 1 ? "1" : undefined}
											padding={eachSectionIndex === 1 ? "24" : undefined}
											key={eachSectionContent.label}
											rounded='8'
											className={`${
												index === array.length - 2 && array.length % 3 === 2
													? "lg:col-span-2"
													: ""
											}`}
										/>
									)
								)}
							</Grid>
						</div>
					</ResponsiveContainer>
				</div>
			))}
		</>
	);
};

export default ProductsSection;
