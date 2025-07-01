import React from "react";

const YouTubeVideo = () => {
  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full"
          src="https://www.youtube-nocookie.com/embed/6duo5BfDtAE"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeVideo;
