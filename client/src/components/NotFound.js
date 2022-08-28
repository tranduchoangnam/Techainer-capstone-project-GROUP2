import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Countdown from "react-countdown";
function NotFound() {
	const navigate = useNavigate();
	const timeout = 10000;

	useEffect(() => {
		let timer = setTimeout(() => {
			navigate("/");
		}, timeout);
		return () => clearTimeout(timer);
	},[navigate]);

	return (
		<div
			className="bg-blue-50/95 pt-20 
						items-center justify-center flex flex-col gap-20
						min-h-screen h-fit w-screen min-w-fit 
                        text-3xl text-main-blue-dark font-semibold
						scrollbar-hide overflow-auto mt-1/6"
		>
			<div className="text-main-orange font-bold text-9xl">404</div>
			Hmmmmmm... Can't seem to find the page you are looking for
			<div className="flex flex-row gap-3">
				Going back to homepage in:
				<Countdown 
				date={Date.now() + timeout}
				renderer={({seconds})=>{
					return <div>
						{`${seconds}s`}
					</div>
				}} 
				/>
			</div>
		</div>
	);
}

export default NotFound;
