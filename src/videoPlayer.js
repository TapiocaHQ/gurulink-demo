import React from "react";
import Hls from "hls.js";

export const VideoPlayer = React.forwardRef(({ src, ...props }, ref) => {
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    let hls;
    if (videoRef.current) {
      const video = videoRef.current;
      if (Hls.isSupported()) {
        hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(video);
      } else {
        console.error("This is a legacy browser that doesn't support MSE");
      }
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [videoRef, src]);

  return (
    <video
      ref={(element) => {
        videoRef.current = element;
        ref(element);
      }}
      {...props}
    />
  );
});
