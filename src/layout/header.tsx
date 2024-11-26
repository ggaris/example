import avatar from "@/assets/avatar.jpg"
import { SearchSvg } from "@/assets/search";
import { Input } from "@/components/input/input";

export const Header = () => {
	return (
		<header className="flex items-center gap-4">
			<img
				src={avatar}
				alt="avatar"
				className="w-10 h-10 rounded-full bg-transparent"
			/>
			<p>
				<h1 className="text-xl font-bold">Hello, Admin</h1>
				<span className="text-sm text-gray-400">Ready to monitor?</span>
			</p>
			<Input beforeIcon={<SearchSvg className="w-4 h-4" />} placeholder="Search" />
		</header>
	);
};
