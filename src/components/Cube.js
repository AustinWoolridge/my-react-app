import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Cube3D = () => {
  const containerRef = useRef(null);
  let scene, camera, renderer, cube, isDragging = false, previousMousePosition;

  useEffect(() => {
    const createCube = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 3;

      // Use face normals to remove extra lines
      const geometry = new THREE.BoxGeometry(1, 1, 1, 1, 1, 1);
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

      cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current.appendChild(renderer.domElement);
    };

    createCube();

    const handleMouseDown = (event) => {
      isDragging = true;
      previousMousePosition = {
        x: event.clientX,
        y: event.clientY,
      };
    };

    const handleMouseMove = (event) => {
      if (!isDragging) return;

      const deltaMove = {
        x: event.clientX - previousMousePosition.x,
        y: event.clientY - previousMousePosition.y,
      };

      const deltaRotationQuaternion = new THREE.Quaternion()
        .setFromEuler(
          new THREE.Euler(
            (deltaMove.y * Math.PI) / 180,
            (deltaMove.x * Math.PI) / 180,
            0,
            'XYZ'
          )
        );

      cube.quaternion.multiplyQuaternions(deltaRotationQuaternion, cube.quaternion);

      previousMousePosition = {
        x: event.clientX,
        y: event.clientY,
      };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    containerRef.current.addEventListener('mousedown', handleMouseDown);
    containerRef.current.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      containerRef.current.removeEventListener('mousedown', handleMouseDown);
      containerRef.current.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef}></div>;
};

export default Cube3D;
