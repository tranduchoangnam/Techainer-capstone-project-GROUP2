import React from 'react'
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
				to="/"
				className="flex flex-row items-center uppercase
                              text-5xl text-main-orange font-bold gap-2"
			>
				<img
					src={require("../../resources/logo.png")}
					alt="img"
					className="h-20"
				/>
			</Link>
  )
}

export default Logo
