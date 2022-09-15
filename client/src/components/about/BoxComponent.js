import React from "react";
import Box from "../../resources/Box";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
function BoxComponent() {
	return (
		<Canvas>
			<OrbitControls enableZoom={false}/>
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<Box position={[0, 0, 0]} />
		</Canvas>
	);
}

export default BoxComponent;
