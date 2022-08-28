import React from "react";
import { Link } from "react-router-dom";
function Header() {
	return (
		<div className="bg-main-blue fixed top-0 left-0 right-0 p-2 flex flex-auto shadow-lg items-center select-none">
			<Link
				to="/"
				className="flex flex-row items-center uppercase
                              text-5xl text-main-orange font-bold gap-2"
			>
				<img
					src={require("../resources/logo.png")}
					alt="img"
					className="h-20"
				/>
			</Link>

			<nav className="fixed right-10">
				<ul className="flex flex-row gap-10 text-2xl font-bold text-main-blue-ice">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="about">About us</Link>
					</li>
          <li>
						<Link to="notexist">A not-exist-page</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Header;
