'use client';
import Link from "next/link";
import ThemeButton from "@/components/ThemeButton";
import { useEffect, useState } from "react";

export default function NavBar() {
	// Navbar on Scroll
	const [show, setShow] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	useEffect(()=>{
		const controlNavbar = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY > lastScrollY && currentScrollY > 80) {
				setShow(false);
			} else {
				setShow(true);
			}

			setLastScrollY(currentScrollY)
		}

		window.addEventListener("scroll", controlNavbar)
		return () => window.removeEventListener("scroll", controlNavbar)
	},[lastScrollY])
	
	return (
		<div
      className={`fixed top-0 left-0 w-full h-16 z-50 navbar bg-base-100 shadow-sm transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
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
