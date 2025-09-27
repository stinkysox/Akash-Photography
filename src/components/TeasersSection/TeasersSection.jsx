import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import "./TeasersSection.css";

const PlayIcon = React.memo(() => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
  </svg>
));

const ReelItem = React.memo(({ url, index, isVisible, onRef }) => {
  const reelId = useMemo(() => url.match(/\/reel\/([^\/]+)/)?.[1], [url]);
  if (!reelId) return null;

  return (
    <div
      ref={onRef}
      className={`reel-item ${isVisible ? "animate-in" : ""}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="reel-wrapper">
        <iframe
          src={`https://www.instagram.com/reel/${reelId}/embed/`}
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          allowTransparency="true"
          loading="lazy"
          title={`Instagram Reel ${index + 1}`}
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="reel-overlay">
          <div className="play-button">
            <PlayIcon />
          </div>
        </div>
      </div>
    </div>
  );
});

const TeasersSection = () => {
  const instagramReels = useMemo(
    () => [
      "https://www.instagram.com/reel/DM50WCRhVjV/embed/",
      "https://www.instagram.com/reel/DOV4dodgglD/embed/",
      "https://www.instagram.com/reel/DL2N-VfP-ap/embed/",
      "https://www.instagram.com/reel/DIEun1hB0yS/embed/",
      "https://www.instagram.com/reel/DE6GQknhvg5/embed/",
      "https://www.instagram.com/reel/DB22OEGPnoH/embed/",
    ],
    []
  );

  const [visibleItems, setVisibleItems] = useState(new Set());
  const reelRefs = useRef([]);
  const observerRef = useRef(null);

  const handleIntersection = useCallback(
    (entries) => {
      const newVisible = new Set(visibleItems);
      entries.forEach((entry) => {
        const index = reelRefs.current.indexOf(entry.target);
        if (index !== -1 && entry.isIntersecting) {
          newVisible.add(index);
        }
      });
      if (newVisible.size !== visibleItems.size) setVisibleItems(newVisible);
    },
    [visibleItems]
  );

  useEffect(() => {
    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    });

    reelRefs.current.forEach((ref) => ref && observerRef.current.observe(ref));
    return () => observerRef.current.disconnect();
  }, [handleIntersection]);

  const setReelRef = useCallback(
    (index) => (el) => (reelRefs.current[index] = el),
    []
  );

  return (
    <section
      className="teasers-section"
      role="region"
      aria-label="Instagram Reels"
    >
      <div className="content-wrapper">
        <header className="section-header">
          <h2 className="section-title-teaser">Behind the Lens</h2>
          <p className="section-subtitle-teaser">Capturing moments in motion</p>
        </header>

        <div
          className="reels-grid"
          role="grid"
          aria-label="Instagram reels collection"
        >
          {instagramReels.map((url, index) => (
            <ReelItem
              key={`reel-${index}`}
              url={url}
              index={index}
              isVisible={visibleItems.has(index)}
              onRef={setReelRef(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(TeasersSection);
