"use client";

import React, { useEffect, useState, useRef } from "react";

interface Emoji {
	id: number;
	x: number;
	y: number;
	emoji: string;
	opacity: number;
	targetOpacity: number;
	size: number;
	delay: number;
	flickerSpeed: number;
	flickerIntensity: number;
}

interface FlickeringEmojisProps {
	className?: string;
	quantity?: number;
	emojis?: string[];
}

const defaultEmojis = [
	"#Lifestyle", "#MzansiLiving", "#ProudlySouthAfrican", "#KasiVibes", "#TownshipEvents", "#VibesInTheKasi", "#CapeTownVibes", "#LivingInTheKasi",
	"#FoodieZA", "#LifeInMzansi", "#LocalIsLekker", "MindfulLiving", "#PositiveVibesOnly", "#DurbanVibes", "#ZARLifestyle", "#LiveYourBestLife",
	"#FashionVibes", "#FashionLifestyle", "#ModernLifestyle", "#BalanceYourLife", "#MotivationDaily", "#MindsetMatters", "#GoalGetter", "#SuccessLifestyle",
	"#StreetStyleLife", "#LiveToExplore", "#WellnessLifestyle", "#SelfCare", "#VacationMode", "#TravelVibes", "#TravelLifestyle", "#DailyLifestyle"
];

export default function FlickeringEmojis({
	className = "",
	quantity = 30,
	emojis = defaultEmojis,
}: FlickeringEmojisProps) {
	const [emojiList, setEmojiList] = useState<Emoji[]>([]);
	const containerRef = useRef<HTMLDivElement>(null);
	const animationFrameRef = useRef<number>();

	useEffect(() => {
		let isMounted = true;
		const timeoutIds: number[] = [];
		let resizeTimeout: number | null = null;

		const initializeEmojis = () => {
			const container = containerRef.current;
			if (!container || !isMounted) return;

			// Wait for container to have dimensions
			const width = container.offsetWidth || window.innerWidth;
			const height = container.offsetHeight || window.innerHeight;

			if (width === 0 || height === 0) {
				// Retry after a short delay if container isn't ready
				const timeoutId = window.setTimeout(() => {
					if (isMounted) {
						initializeEmojis();
					}
				}, 100);
				timeoutIds.push(timeoutId);
				return;
			}

			// Reduce quantity on mobile for better performance
			const isMobile = width < 768;
			const adjustedQuantity = isMobile ? Math.floor(quantity * 0.6) : quantity;
			
			// Responsive font sizes - smaller on mobile
			const minSize = isMobile ? 10 : 12;
			const maxSize = isMobile ? 18 : 25;

			const newEmojis: Emoji[] = [];
			for (let i = 0; i < adjustedQuantity; i++) {
				newEmojis.push({
					id: i,
					x: Math.random() * width,
					y: Math.random() * height,
					emoji: emojis[Math.floor(Math.random() * emojis.length)],
					opacity: Math.random() * 0.2 + 0.1,
					targetOpacity: Math.random() * 0.3 + 0.1,
					size: Math.random() * (maxSize - minSize) + minSize,
					delay: Math.random() * 2000,
					flickerSpeed: 0.0005 + Math.random() * 0.001, // Much slower flicker
					flickerIntensity: 0.1 + Math.random() * 0.15,
				});
			}
			if (isMounted) {
				setEmojiList(newEmojis);
			}
		};

		// Use requestAnimationFrame to ensure DOM is ready
		const timeoutId = window.setTimeout(() => {
			if (isMounted) {
				initializeEmojis();
			}
		}, 0);
		timeoutIds.push(timeoutId);

		const handleResize = () => {
			// Debounce resize to avoid too many recalculations
			if (resizeTimeout !== null) {
				window.clearTimeout(resizeTimeout);
			}
			if (isMounted) {
				resizeTimeout = window.setTimeout(() => {
					if (isMounted) {
						initializeEmojis();
					}
					resizeTimeout = null;
				}, 150);
			}
		};

		window.addEventListener("resize", handleResize);
		window.addEventListener("orientationchange", handleResize);
		return () => {
			isMounted = false;
			if (resizeTimeout !== null) {
				window.clearTimeout(resizeTimeout);
			}
			timeoutIds.forEach(id => window.clearTimeout(id));
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("orientationchange", handleResize);
		};
	}, [quantity, emojis]);

	useEffect(() => {
		if (emojiList.length === 0) return;

		let startTime = Date.now();
		let isRunning = true;

		const animate = () => {
			if (!isRunning) return;

			const currentTime = Date.now();
			const elapsed = (currentTime - startTime) / 1000;

			setEmojiList((prev) => {
				if (prev.length === 0) return prev;
				
				return prev.map((emoji) => {
					const time = elapsed * 1000 + emoji.delay;
					
					// Occasionally change target opacity for more variation
					let targetOpacity = emoji.targetOpacity;
					if (Math.random() < 0.005) {
						targetOpacity = Math.random() * 0.3 + 0.1;
					}
					
					// Create flickering effect with sine wave for smooth transitions
					const flicker = Math.sin(time * emoji.flickerSpeed) * emoji.flickerIntensity;
					const baseOpacity = targetOpacity; // Use the updated targetOpacity
					
					// Smoothly transition to target opacity with flicker
					const newOpacity = Math.max(
						0.05,
						Math.min(0.5, baseOpacity + flicker)
					);

					return {
						...emoji,
						opacity: newOpacity,
						targetOpacity: targetOpacity,
					};
				});
			});
			
			if (isRunning) {
				animationFrameRef.current = requestAnimationFrame(animate);
			}
		};

		animationFrameRef.current = requestAnimationFrame(animate);

		return () => {
			isRunning = false;
			if (animationFrameRef.current !== undefined) {
				cancelAnimationFrame(animationFrameRef.current);
			}
		};
	}, [emojiList.length]);

	return (
		<div
			ref={containerRef}
			className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`}
			aria-hidden="true"
		>
			{emojiList.map((emoji) => (
				<div
					key={emoji.id}
					className="absolute whitespace-nowrap"
					style={{
						left: `${emoji.x}px`,
						top: `${emoji.y}px`,
						fontSize: `${emoji.size}px`,
						opacity: emoji.opacity,
						transform: "translate(-50%, -50%)",
						transition: "none", // Remove transition for smooth flickering
						willChange: "opacity", // Optimize for mobile performance
						maxWidth: "90vw", // Prevent overflow on mobile
						overflow: "hidden",
						textOverflow: "ellipsis",
					}}
				>
					{emoji.emoji}
				</div>
			))}
		</div>
	);
}

