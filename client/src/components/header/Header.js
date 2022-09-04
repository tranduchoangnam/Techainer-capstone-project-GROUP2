import React from "react";
import Logo from './Logo';
import NavOption from './NavOption';
function Header() {
	return (
		<div className="bg-main-blue absolute top-0 left-0 right-0 flex flex-auto shadow-lg items-center select-none h-fit">
			<Logo/>
			<nav className="fixed right-10">
				<ul className="flex flex-row text-2xl font-bold text-main-blue-ice">
					<NavOption path={"/"} name={"Home"}/>
					<NavOption path={"/about"} name={"About us"}/>
					<NavOption path={"/notexist"} name={"A not-exist-page"}/>
				</ul>
			</nav>
		</div>
	);
}

export default Header;
