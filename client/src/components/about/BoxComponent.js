import React from "react";
import Box from "../../resources/Box";
import { Canvas } from "@react-three/fiber";
function BoxComponent() {
	return (
		<Canvas>
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<Box position={[0, 0, 0]} />
		</Canvas>
	);
}

export default BoxComponent;
