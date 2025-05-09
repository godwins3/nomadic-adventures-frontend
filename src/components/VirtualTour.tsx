import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

interface VirtualTourProps {
  imageUrl: string;
  title: string;
}

const VirtualTour: React.FC<VirtualTourProps> = ({ imageUrl, title }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current; // Store ref value
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1);

    const texture = new THREE.TextureLoader().load(imageUrl);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const sphere = new THREE.Mesh(geometry, material);

    scene.add(sphere);
    camera.position.set(0, 0, 0.1);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [imageUrl]);

  return (
    <div className={`virtual-tour ${isFullscreen ? 'fixed inset-0 z-50' : 'h-96'}`} ref={containerRef}>
      <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
        {title}
      </div>
      <button
        onClick={() => setIsFullscreen(!isFullscreen)}
        className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
      </button>
    </div>
  );
};

export default VirtualTour;
