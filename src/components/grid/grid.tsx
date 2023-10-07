import { gridCols, spacings, xGaps, yGaps } from "@/theme/theme";
import clsx from "clsx";
import { ReactNode } from "react";

interface IGridProps {
	className?: string;
	children: ReactNode;
	columns?: keyof typeof gridCols;
	gapX?: keyof typeof xGaps;
	gapY?: keyof typeof yGaps;
	gap?: keyof typeof spacings;
}

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
