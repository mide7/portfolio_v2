import Hero from "./components/hero";
import WorkHistory from "./components/work-history";
import TechToolbox from "./components/tech-toolbox";
import RecentWorks from "./components/recent-works";

const Page = () => {
	return (
		<>
			<Hero />
			<WorkHistory />
			<TechToolbox />
			<RecentWorks />
		</>
	);
};

export default Page;
