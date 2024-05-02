import { useParams } from 'react-router-dom';
import React, { useCallback, useMemo, useState } from 'react';

import { getFormattedDateTimeFromFilename } from '../../lib/dateUtils';

interface VideoRouteParams {
  date: string;
  video: string;
}

interface VideoPlayerProps {
}

const VideoPlayer: React.FC<VideoPlayerProps> = () => {
  const {video, date} = useParams<VideoRouteParams>();
  const videoPath = `/api/videos/${date}/${video}`;
  const [error, setError] = useState<boolean>(false);
  const handleError = useCallback((e) => {
    console.log(e);
    try {console.log(e)} catch {}
    try {console.log(e.message)} catch {}
    try {console.log(e.target)} catch {}
    setError(true);
  }, []);
  const formattedDate = useMemo<null | string>(() => {
    const dateTime = getFormattedDateTimeFromFilename(video);

    if (!dateTime) setError(true);

    return dateTime;
  }, [video]);

  return (
    <div>
      <h2>{formattedDate || video}</h2>
      {
        error && false ? (
          <div>
            There was an error loading the video. Are you sure the URL is correct?
          </div>
        ) : (
          <video controls muted={true} playsInline={true} onError={handleError} src={videoPath}>
            {/* <source src={videoPath} type="video/ogg" /> */}
            <span>Uh oh, looks like video won't play.</span>
          </video>
        )
      }
    </div>
  );
};

export default VideoPlayer;
