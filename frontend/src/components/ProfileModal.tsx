"use client"

import Profile from "@/types/profile";
import Link from "next/link";
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm";

interface Props {
	profile: Profile
}

export default function ProfileModal({profile}: Props) {
	return (
	<div>
		<input type="checkbox" id="my_modal_7" className="modal-toggle" />
			<div className="modal">
				<div className="modal-box">
					<ReactMarkdown 
						remarkPlugins={[remarkGfm]}
						// These props are here to address the issue of modal is breaking the markdown
						components={{
							h1: props => <h1 {...props} className="text-2xl font-bold mt-4 mb-2" />,
							h2: props => <h2 {...props} className="text-xl font-semibold mt-3 mb-1" />,
							h3: props => <h3 {...props} className="text-lg font-semibold mt-3 mb-1" />,
							a: props => <a {...props} className="link link-info"/>
						}}
					>
						{profile.content}
					</ReactMarkdown>
				</div>
				{/* This is required for closing the modal */}
				<label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
			</div>
	</div>
	)
}
