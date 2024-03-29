import Clients from "./components/Clients";
import Hero from "./components/Hero";
import RecentWorks from "./components/RecentWorks";
import Testimonials from "./components/Testimonials";

const Page = () => {
	return (
		<>
			<Hero />
			<RecentWorks />
			{/* <Clients /> */}
			<Testimonials />
		</>
	);
};

export default Page;
