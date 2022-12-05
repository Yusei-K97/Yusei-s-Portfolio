import "./Three.css";
import { useRef, Suspense } from "react";
import { useThree, useFrame, Canvas } from "@react-three/fiber";
import { useScroll, Image, ScrollControls, Scroll } from "@react-three/drei";

function Images() {
  const { height } = useThree((state) => state.viewport);
  const data = useScroll();
  const group = useRef();
  useFrame(() => {
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[2].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 3;
    group.current.children[3].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 3;
  });

  return (
    <group ref={group}>
      <Image url="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" scale={[4, height, 1]} position={[-1, 0, 1]} />
      <Image url="https://cdn.pixabay.com/photo/2015/04/23/22/01/mountains-736886__480.jpg" scale={3} position={[2, 0, 1]} />
      <Image
        url="https://cdn.pixabay.com/photo/2016/11/19/18/57/godafoss-1840758__480.jpg"
        scale={[1, 3.5, 1]}
        position={[-2.3, -height, 2]}
      />
      <Image
        url="https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__480.jpg"
        scale={[1, 2.7, 1]}
        position={[-1.4, -height - 0.7, 1]}
      />
      <Image
        url="https://cdn.pixabay.com/photo/2015/02/24/15/41/wolf-647528__480.jpg"
        scale={[1.4, 2, 1]}
        position={[1.3, -height - 0.3, 3.2]}
      />
    </group>
  );
}

function Three() {
  return (
    <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
      <Suspense fallback={null}>
        <ScrollControls
          damping={3}
          pages={2}
          horizontal={false}
          infinite={false}
        >
          <Scroll>
            <Images />
          </Scroll>
          <Scroll html>
          </Scroll>
        </ScrollControls>
      </Suspense>
    </Canvas>
  );
}

export default Three;

