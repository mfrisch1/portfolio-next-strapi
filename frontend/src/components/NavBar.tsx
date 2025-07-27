import Link from "next/link"
import ThemeButton from "@/components/ThemeButton"

export default function NavBar() {
	return (
		<div className="navbar bg-base-100 shadow-sm">
			<div className="flex-1">
				<Link className="btn btn-ghost text-xl width-auto" href="/">
					Mitchell Frisch
				</Link>
			</div>
			<div className="navbar-end">
				<ThemeButton />
			</div>
		</div>
	)
}
