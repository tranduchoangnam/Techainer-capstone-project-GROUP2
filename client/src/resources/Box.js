import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
function Box(props) {
	// This reference gives us direct access to the THREE.Mesh object
	const ref = useRef();
	// Hold state for hovered and clicked events
	const [hovered, hover] = useState(false);
	const [clicked, click] = useState(false);
	// Subscribe this component to the render-loop, rotate the mesh every frame
    let incr = 0.01;
	let count = 0;
    useFrame((state, delta) => {
        incr = (count >2400) ? -incr : incr;
        count = (count >2400) ? 0 : (count+1)
		ref.current.rotation.x += incr;
		ref.current.rotation.y += incr;
		ref.current.rotation.z += incr;
	});
	// Return the view, these are regular Threejs elements expressed in JSX
	return (
		<mesh
			{...props}
			ref={ref}
			scale={clicked ? 1.1 : 1}
			onClick={event => click(!clicked)}
			onPointerOver={event => hover(true)}
			onPointerOut={event => hover(false)}
		>
			<boxGeometry args={[3, 3, 3]} />
			<meshStandardMaterial
				color={hovered || clicked ? "#EE6C4D" : "#3D5A80"}
			/>
		</mesh>
	);
}
export default Box;
