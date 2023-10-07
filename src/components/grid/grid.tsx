import clsx from "clsx";
import { ReactNode } from "react";
import { spacings } from "@/components/section-header";

interface IGridProps {
	className?: string;
	children: ReactNode;
	columns?: keyof typeof gridCols;
	gapX?: keyof typeof xGaps;
	gapY?: keyof typeof yGaps;
	gap?: keyof typeof spacings;
}

const gridCols = {
	3: "lg:grid-cols-3",
};

const xGaps = {
	24: "gap-x-[24px]",
};

const yGaps = {
	60: "gap-y-[60px]",
};

const Grid = ({
	className,
	children,
	columns = 3,
	gapX = 24,
	gapY = 60,
	gap,
}: IGridProps) => {
	return (
		<div
			className={clsx(
				[
					"grid grid-cols-1  md:grid-cols-2 ",
					gridCols[columns],
					!gap && xGaps[gapX],
					!gap && yGaps[gapY],
					gap && spacings[gap],
				],

				className
			)}
		>
			{children}
		</div>
	);
};

export default Grid;
