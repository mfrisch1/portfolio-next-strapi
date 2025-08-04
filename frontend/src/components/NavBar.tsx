import Link from "next/link"
import ThemeButton from "@/components/ThemeButton"

export default function NavBar() {
	return (
		<div className="navbar bg-base-100 shadow-sm"> 
			<div className="navbar-start">
				<Link className="btn btn-ghost text-base sm:text-base md:text-lg width-auto" href="/">
					Mitchell Frisch
				</Link>
			</div>
			<div className="navbar-center hidden sm:block">
				<Link className="btn btn-ghost rounded-l-xl text-base width-auto" href="/blog">
					Blog
				</Link>
				<Link className="btn btn-ghost text-base width-auto" href="/projects">
					Projects
				</Link>
				{/* <Link className="btn btn-ghost rounded-r-xl text-base width-auto" href="/projects"> */}
				{/* 	Profile */}
				{/* </Link> */}
				{/* The button to open modal */}
				<label htmlFor="my_modal_7" className="btn btn-ghost rounded-r-xl text-base width-auto">
					Profile
				</label>
			</div>
			<div className="navbar-end mr-5">
				<ThemeButton />
			</div>
		</div>
	)
}
