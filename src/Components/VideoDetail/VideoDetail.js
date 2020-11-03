import React from 'react';

const VideoDetail = ({ video }) => {
  return !video ? (
    <div>Loading...</div>
  ) : (
    <div>
      <div className="ui embed">
        <iframe
          title="video player"
          src={`https:youtube.com/embed/${video.id.videoId}`}
        ></iframe>
      </div>
      <div className="ui segment">
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
