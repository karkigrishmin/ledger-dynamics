import { ReactNode } from "react";

const ResponsiveContainer = ({ children }: { children: ReactNode }) => {
	return <div className='wrapper'>{children}</div>;
};

export default ResponsiveContainer;
