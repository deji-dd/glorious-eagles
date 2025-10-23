import { useEffect, useRef, useState } from "react";

/**
 * Carousel
 * Props:
 *  - images: string[] (required)
 *  - peek: string (CSS unit) default "6vw"
 *  - slideWidth: string (CSS unit) default "380px"
 *  - gapPx: number default 16
 *  - speed: number pixels-per-second default 40
 *  - height: string default "230px"
 */
export default function Carousel({
  images = [],
  peek = "1vw",
  slideWidth = "380px",
  gapPx = 16,
  speed = 60,
  height = "230px",
}) {
  const trackRef = useRef(null);
  const slidesRef = useRef([]);
  const rafRef = useRef(null);
  const lastTsRef = useRef(null);
  const isPausedRef = useRef(false);
  const isDraggingRef = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);

  // Duplicate images so we can wrap seamlessly
  const doubleImages = [...images, ...images];

  useEffect(() => {
    const track = trackRef.current;
    if (!track || images.length === 0) return;

    // ensure there is no native snap or smoothing during drag
    track.style.scrollBehavior = "auto";

    const halfWidth = () => track.scrollWidth / 2;

    // animation loop: advance scrollLeft by speed * delta
    const step = (ts) => {
      if (!lastTsRef.current) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000; // seconds
      lastTsRef.current = ts;

      if (!isPausedRef.current && !isDraggingRef.current) {
        track.scrollLeft += speed * dt;
        // wrap when we've scrolled past half (because track is duplicated)
        if (track.scrollLeft >= halfWidth()) {
          track.scrollLeft -= halfWidth();
        }
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    // Pause/resume on hover
    const onEnter = () => (isPausedRef.current = true);
    const onLeave = () => {
      isPausedRef.current = false;
      // reset timing so jump isn't huge
      lastTsRef.current = null;
    };
    track.addEventListener("mouseenter", onEnter);
    track.addEventListener("mouseleave", onLeave);

    // Dragging (pointer) to allow manual control — pause auto while dragging
    const onPointerDown = (e) => {
      isDraggingRef.current = true;
      startX.current = e.clientX ?? e.touches?.[0]?.clientX;
      startScroll.current = track.scrollLeft;
      isPausedRef.current = true;
    };
    const onPointerMove = (e) => {
      if (!isDraggingRef.current) return;
      const currentX = e.clientX ?? e.touches?.[0]?.clientX;
      const dx = startX.current - currentX;
      track.scrollLeft = startScroll.current + dx;
      // wrap handling while dragging (keep it in boundaries)
      const half = halfWidth();
      if (track.scrollLeft >= half) track.scrollLeft -= half;
      if (track.scrollLeft < 0) track.scrollLeft += half;
    };
    const onPointerUp = () => {
      isDraggingRef.current = false;
      // small timeout before resuming auto so user doesn't immediately fight motion
      setTimeout(() => {
        isPausedRef.current = false;
        lastTsRef.current = null;
      }, 250);
    };

    // mouse
    track.addEventListener("mousedown", onPointerDown);
    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("mouseup", onPointerUp);
    // touch
    track.addEventListener("touchstart", onPointerDown, { passive: true });
    track.addEventListener("touchmove", onPointerMove, { passive: false });
    track.addEventListener("touchend", onPointerUp);

    // clean up
    return () => {
      cancelAnimationFrame(rafRef.current);
      track.removeEventListener("mouseenter", onEnter);
      track.removeEventListener("mouseleave", onLeave);
      track.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("mouseup", onPointerUp);
      track.removeEventListener("touchstart", onPointerDown);
      track.removeEventListener("touchmove", onPointerMove);
      track.removeEventListener("touchend", onPointerUp);
    };
    // re-run if images change or speed changes
  }, [images, speed, gapPx]);

  // On mount, ensure starting position is near 0 (so duplicate wrapping is consistent)
  useEffect(() => {
    const t = trackRef.current;
    if (!t) return;
    // small offset so peek shows correctly
    t.scrollLeft = 0;
  }, [images]);

  return (
    <div className="relative w-full">
      <div
        className="w-full overflow-hidden flex justify-center"
        // outer viewport (clips overflow). padding applied on track for peek.
      >
        <div
          ref={trackRef}
          className="flex items-center gap-4 whitespace-nowrap"
          style={{
            // create peek space on both sides so first/last can be off-screen
            paddingLeft: peek,
            paddingRight: peek,
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            userSelect: "none",
            // hide scrollbar (basic)
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {doubleImages.map((src, i) => (
            <div
              key={i}
              ref={(el) => (slidesRef.current[i] = el)}
              className="flex-shrink-0 rounded-lg overflow-hidden"
              style={{
                width: slideWidth,
                height,
                display: "inline-block",
              }}
            >
              <img
                src={src}
                alt={`slide-${(i % images.length) + 1}`}
                className="w-full h-full object-cover block"
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        /* hide scrollbar for webkit */
        .${""}::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
