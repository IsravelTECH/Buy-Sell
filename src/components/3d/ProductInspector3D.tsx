import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Product } from '../../data/products';
import { RotateCw, Sun, Moon, Sparkles, Eye, ShieldCheck, Tag, X } from 'lucide-react';

interface ProductInspector3DProps {
  product: Product;
  onClose: () => void;
  onSetReminder: (product: Product) => void;
  onToggleWatchlist: (product: Product) => void;
  isWatchlisted: boolean;
  isPremium: boolean;
  onTriggerUpgrade: () => void;
}

export const ProductInspector3D: React.FC<ProductInspector3DProps> = ({
  product,
  onClose,
  onSetReminder,
  onToggleWatchlist,
  isWatchlisted,
  isPremium,
  onTriggerUpgrade
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [lightingPreset, setLightingPreset] = useState<'studio' | 'neon' | 'sunset'>('studio');
  const [wireframe, setWireframe] = useState<boolean>(false);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const lightsGroupRef = useRef<THREE.Group | null>(null);
  const meshGroupRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Dimensions
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    mountRef.current.appendChild(renderer.domElement);

    // Groups
    const objectGroup = new THREE.Group();
    meshGroupRef.current = objectGroup;
    scene.add(objectGroup);

    // Procedural PBR 3D Geometry based on product
    let mainMesh: THREE.Mesh;

    if (product.geometryType === 'mug') {
      const mugCylinder = new THREE.CylinderGeometry(1.2, 1.0, 2.5, 32, 1, true);
      const mugMat = new THREE.MeshPhysicalMaterial({
        color: 0xdedede,
        roughness: 0.35,
        metalness: 0.05,
        clearcoat: 0.6,
        clearcoatRoughness: 0.1,
      });
      mainMesh = new THREE.Mesh(mugCylinder, mugMat);

      // Handle
      const handleGeo = new THREE.TorusGeometry(0.8, 0.18, 16, 32, Math.PI);
      const handleMesh = new THREE.Mesh(handleGeo, mugMat);
      handleMesh.rotation.z = -Math.PI / 2;
      handleMesh.position.set(1.15, 0, 0);
      objectGroup.add(handleMesh);
      objectGroup.add(mainMesh);
    } else if (product.geometryType === 'glass') {
      // Camera/Lens
      const lensBase = new THREE.CylinderGeometry(1.5, 1.5, 2.2, 32);
      const lensMat = new THREE.MeshStandardMaterial({
        color: 0x1f2937,
        roughness: 0.2,
        metalness: 0.9,
      });
      mainMesh = new THREE.Mesh(lensBase, lensMat);

      const glassElement = new THREE.CylinderGeometry(1.2, 1.2, 0.2, 32);
      const glassMat = new THREE.MeshPhysicalMaterial({
        color: 0x0084FF,
        transmission: 0.9,
        opacity: 1,
        transparent: true,
        roughness: 0.05,
        ior: 1.52,
      });
      const glassMesh = new THREE.Mesh(glassElement, glassMat);
      glassMesh.position.y = 1.15;
      objectGroup.add(glassMesh);
      objectGroup.add(mainMesh);
    } else if (product.geometryType === 'record') {
      // Vinyl record
      const discGeo = new THREE.CylinderGeometry(2.3, 2.3, 0.05, 64);
      const discMat = new THREE.MeshStandardMaterial({
        color: 0x0a0a0a,
        roughness: 0.25,
        metalness: 0.7,
      });
      mainMesh = new THREE.Mesh(discGeo, discMat);

      const labelGeo = new THREE.CylinderGeometry(0.8, 0.8, 0.06, 32);
      const labelMat = new THREE.MeshBasicMaterial({ color: 0xFFD700 });
      const labelMesh = new THREE.Mesh(labelGeo, labelMat);
      objectGroup.add(labelMesh);
      objectGroup.add(mainMesh);
    } else if (product.geometryType === 'chair') {
      // Danish Chair
      const seatGeo = new THREE.BoxGeometry(2.2, 0.2, 2.0);
      const woodMat = new THREE.MeshStandardMaterial({
        color: 0x92400e,
        roughness: 0.4,
        metalness: 0.1,
      });
      mainMesh = new THREE.Mesh(seatGeo, woodMat);

      const backGeo = new THREE.BoxGeometry(2.2, 1.6, 0.15);
      const backMesh = new THREE.Mesh(backGeo, woodMat);
      backMesh.position.set(0, 0.9, -0.9);
      objectGroup.add(backMesh);
      objectGroup.add(mainMesh);
    } else {
      // Leather Jacket (Sculpted Torso Form)
      const torsoGeo = new THREE.CylinderGeometry(1.4, 1.0, 2.8, 24);
      const leatherMat = new THREE.MeshPhysicalMaterial({
        color: 0x241715,
        roughness: 0.35,
        metalness: 0.25,
        clearcoat: 0.4,
        clearcoatRoughness: 0.3,
      });
      mainMesh = new THREE.Mesh(torsoGeo, leatherMat);

      const collarGeo = new THREE.TorusGeometry(0.9, 0.2, 16, 32);
      const collarMat = new THREE.MeshStandardMaterial({ color: 0x18100e, roughness: 0.4 });
      const collarMesh = new THREE.Mesh(collarGeo, collarMat);
      collarMesh.rotation.x = Math.PI / 2;
      collarMesh.position.y = 1.35;
      objectGroup.add(collarMesh);
      objectGroup.add(mainMesh);
    }

    // Shadow Floor Disc
    const floorGeo = new THREE.CircleGeometry(3.2, 32);
    const floorMat = new THREE.MeshBasicMaterial({
      color: 0x0084FF,
      transparent: true,
      opacity: 0.1,
    });
    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.position.y = -2.0;
    scene.add(floorMesh);

    // Dynamic Lights Group
    const lightsGroup = new THREE.Group();
    lightsGroupRef.current = lightsGroup;
    scene.add(lightsGroup);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    lightsGroup.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(5, 8, 6);
    lightsGroup.add(keyLight);

    const fillLight = new THREE.PointLight(0x0084FF, 2, 20);
    fillLight.position.set(-6, -2, 4);
    lightsGroup.add(fillLight);

    const rimLight = new THREE.PointLight(0xFFD700, 3, 20);
    rimLight.position.set(0, 6, -6);
    lightsGroup.add(rimLight);

    // Touch & Mouse Drag Controls
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const onPointerDown = (clientX: number, clientY: number) => {
      isDragging = true;
      prevMouseX = clientX;
      prevMouseY = clientY;
    };

    const onPointerMove = (clientX: number, clientY: number) => {
      if (!isDragging || !meshGroupRef.current) return;
      const deltaX = clientX - prevMouseX;
      const deltaY = clientY - prevMouseY;
      meshGroupRef.current.rotation.y += deltaX * 0.01;
      meshGroupRef.current.rotation.x += deltaY * 0.01;
      prevMouseX = clientX;
      prevMouseY = clientY;
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    const handleMouseDown = (e: MouseEvent) => onPointerDown(e.clientX, e.clientY);
    const handleMouseMove = (e: MouseEvent) => onPointerMove(e.clientX, e.clientY);
    const handleMouseUp = () => onPointerUp();

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        onPointerDown(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    const handleTouchEnd = () => onPointerUp();

    const domElement = renderer.domElement;
    domElement.style.touchAction = 'none';

    domElement.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    domElement.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    // Animation Loop
    let reqId: number;
    const animate = () => {
      reqId = requestAnimationFrame(animate);
      if (autoRotate && !isDragging && meshGroupRef.current) {
        meshGroupRef.current.rotation.y += 0.008;
      }
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(reqId);
      domElement.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      domElement.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && domElement) {
        mountRef.current.removeChild(domElement);
      }
      renderer.dispose();
    };
  }, [product, autoRotate]);

  // Update wireframe state
  useEffect(() => {
    if (!meshGroupRef.current) return;
    meshGroupRef.current.traverse((child) => {
      if (child instanceof THREE.Mesh && child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach((m) => (m.wireframe = wireframe));
        } else {
          child.material.wireframe = wireframe;
        }
      }
    });
  }, [wireframe]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-5xl h-[92vh] max-h-[850px] glass-panel-elevated rounded-3xl overflow-hidden flex flex-col md:flex-row border border-white/15 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          title="Close Inspector"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 3D WebGL Canvas Area */}
        <div className="relative flex-1 h-[45%] md:h-full bg-gradient-to-b from-obsidian-light to-obsidian flex flex-col items-center justify-center cursor-grab active:cursor-grabbing">
          <div ref={mountRef} className="w-full h-full" />

          {/* Interactive Floating 3D Controls */}
          <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-electric/20 text-electric border border-electric/30 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-electric animate-ping" />
              Live 3D Viewport
            </span>
            <span className="hidden sm:inline-block px-2.5 py-1 rounded-full text-xs text-slate-400 bg-white/5 border border-white/10">
              Drag to Rotate
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-auto">
            <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md p-1.5 rounded-2xl border border-white/10">
              <button
                onClick={() => setAutoRotate(!autoRotate)}
                className={`p-2 rounded-xl text-xs transition-colors flex items-center gap-1 ${autoRotate ? 'bg-electric text-white' : 'text-slate-400 hover:text-white'}`}
                title="Toggle Auto Spin"
              >
                <RotateCw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setWireframe(!wireframe)}
                className={`p-2 rounded-xl text-xs transition-colors flex items-center gap-1 ${wireframe ? 'bg-electric text-white' : 'text-slate-400 hover:text-white'}`}
                title="Toggle Mesh Wireframe"
              >
                <Eye className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-white/10 text-xs text-slate-300">
              <Sparkles className="w-3.5 h-3.5 text-liquidGold" />
              <span>Real-Time PBR Shader</span>
            </div>
          </div>
        </div>

        {/* Product Details & Purchase HUD */}
        <div className="w-full md:w-[420px] h-[55%] md:h-full overflow-y-auto p-6 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10 bg-obsidian-light/70 backdrop-blur-2xl">
          <div className="space-y-4">
            {/* Header info */}
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
                <span className="uppercase tracking-widest font-mono text-electric">{product.category}</span>
                <span>{product.location}</span>
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight leading-snug">{product.title}</h2>
            </div>

            {/* Price Tag with Savings Matrix */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-white">${product.price}</span>
                  <span className="text-sm line-through text-slate-500">${product.originalPrice}</span>
                </div>
                <p className="text-xs text-aurora font-medium mt-0.5">
                  Save ${product.originalPrice - product.price} ({(100 - (product.price / product.originalPrice) * 100).toFixed(0)}% Off)
                </p>
              </div>
              <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {product.dealRating}
              </span>
            </div>

            {/* Condition & Description */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <span className="font-semibold text-white">Condition:</span>
                <span className="px-2 py-0.5 rounded-md bg-white/10 text-xs">{product.condition}</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Seller Card */}
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={product.seller.avatar}
                  alt={product.seller.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-electric/40"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-sm font-semibold text-white">{product.seller.name}</p>
                    {product.seller.verified && (
                      <ShieldCheck className="w-4 h-4 text-electric" />
                    )}
                  </div>
                  <p className="text-xs text-slate-400">★ {product.seller.rating} · {product.seller.salesCount} sales</p>
                </div>
              </div>
              <button 
                onClick={() => alert(`Contacting ${product.seller.name} via encrypted peer session.`)}
                className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                Message
              </button>
            </div>
          </div>

          {/* Action Hub */}
          <div className="pt-4 mt-4 border-t border-white/10 space-y-2.5">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => onToggleWatchlist(product)}
                className={`py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 border ${
                  isWatchlisted
                    ? 'bg-liquidGold/20 border-liquidGold text-liquidGold'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 text-white'
                }`}
              >
                <Tag className="w-4 h-4" />
                {isWatchlisted ? 'In Watchlist' : 'Add to Watchlist'}
              </button>

              <button
                onClick={() => {
                  if (isPremium) {
                    onSetReminder(product);
                  } else {
                    onTriggerUpgrade();
                  }
                }}
                className="py-3 px-4 rounded-xl text-xs font-bold bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-electric" />
                {isPremium ? 'Set Deal Alert' : 'Alerts (Pro)'}
              </button>
            </div>

            <button
              onClick={() => alert(`Initiating secure direct purchase flow for ${product.title} ($${product.price})`)}
              className="w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-electric to-blue-600 hover:from-electric-light hover:to-electric text-white shadow-lg shadow-electric/25 transition-all"
            >
              Express Peer Buy (${product.price})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
