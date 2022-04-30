import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SwipeableViews from "react-swipeable-views";

import { VideoPlayer } from "./videoPlayer";

const uploadsRoute = "http://localhost:4000/api/upload_list";

export default function Home() {
  const [uploadList, setUploadList] = useState([]);
  const [firstInteractionTriggered, setFirstInteractionTriggered] = useState(
    false
  );
  const uploadRefs = new Map();

  useEffect(() => {
    (async () => {
      const response = await fetch(uploadsRoute);
      const json = await response.json();
      setUploadList(json);
    })();
  }, []);

  const handleChangeIndex = (newIdx, prevIdx) => {
    if (!firstInteractionTriggered) {
      setFirstInteractionTriggered(true);
    }
    Object.keys(uploadRefs).map((idx) => {
      let ref = uploadRefs[idx];
      ref.muted = false;
      if (newIdx === idx) {
        ref.play();
      } else {
        ref.pause();
        ref.currentTime = 0;
      }
    });

    uploadRefs[newIdx].play();
  };

  const togglePlaying = (idx) => {
    let currentVideo = uploadRefs[idx];
    // If this is the first interaction,
    if (!firstInteractionTriggered) {
      currentVideo.muted = false;
      setFirstInteractionTriggered(true);
    } else {
      if (currentVideo.paused) {
        currentVideo.play();
      } else {
        currentVideo.pause();
      }
    }
  };

  return (
    <div>
      <div style={styles.bottomNav}>
        <Link to="/upload" style={styles.navButton}>
          +
        </Link>
      </div>
      <SwipeableViews
        onChangeIndex={(newIdx, prevIdx) => handleChangeIndex(newIdx, prevIdx)}
      >
        {uploadList.map((upload, uploadIdx) => (
          <div
            style={styles.videoContainer}
            onClick={() => togglePlaying(uploadIdx)}
          >
            <h2 id="address" style={styles.label}>
              {upload.address}
            </h2>
            <VideoPlayer
              id="video"
              style={styles.video}
              // Only autoplay first video
              autoPlay={uploadIdx === 0}
              // Autoplay media must be muted until user interacts with the page
              // https://developers.google.com/web/updates/2017/09/autoplay-policy-changes
              muted
              loop
              src={upload.stream_url}
              ref={(input) => {
                uploadRefs[uploadIdx] = input;
              }}
            />
          </div>
        ))}
      </SwipeableViews>
    </div>
  );
}

const styles = {
  label: {
    position: "absolute",
    color: "white",
    bottom: 0,
    fontFamily: "sans-serif",
    fontWeight: "100",
    fontSize: "1.2rem",
    letterSpacing: 0.4,
    margin: 0,
    maxWidth: "65%",
    padding: "1rem",
  },
  video: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    padding: 0,
  },
  videoContainer: {
    position: "relative",
    height: "calc(100vh - 4rem)",
    backgroundColor: "black",
  },
  bottomNav: {
    position: "absolute",
    backgroundColor: "black",
    width: "100%",
    height: "4rem",
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bottom: 0,
  },
  navButton: {
    textDecoration: "none",
    fontSize: "1.5rem",
    color: "white",
    backgroundColor: "rgba(100,100,100, 0.75)",
    width: "1.5rem",
    borderRadius: "20%",
    textAlign: "center",
    padding: "0.5rem",
    fontFamily: "sans-serif",
  },
};
