import moment from 'moment';
import React, { useCallback, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

interface VideoRouteParams {
  date: string;
  video: string;
}

interface VideoPlayerProps {
}

const INVALID_DATE_ERROR = 'Invalid date';

const VideoPlayer: React.FC<VideoPlayerProps> = () => {
  const {video, date} = useParams<VideoRouteParams>();
  const videoPath = `/videos/${date}/${video}`;
  const [error, setError] = useState<boolean>(false);
  const handleError = useCallback(() => setError(true), []);
  const formattedDate = useMemo<null | string>(() => {
    let formatted = null;

    try {
      const time = video.split('_')[1].split('.')[0].replace(/[hms]/g, ':').slice(0, -1);
      const parsedDate = moment(`${date} ${time}`, moment.ISO_8601)
        .format("dddd, MMMM Do YYYY, h:mm:ss a");
      if (parsedDate === INVALID_DATE_ERROR) {
        throw Error(INVALID_DATE_ERROR);
      }
    } catch (e) {
      console.error(e);
      setError(true);
    }

    return formatted;
  }, [date, video]);

  return (
    <div>
      <h2>{formattedDate || video}</h2>
      {
        error ? (
          <div>
            There was an error loading the video. Are you sure the URL is correct?
          </div>
        ) : (
          <video controls muted={true} autoPlay={true} loop={true} onError={handleError}>
            <source src={videoPath} type="video/ogg" />
            <span>Uh oh, looks like video won't play.</span>
          </video>
        )
      }
    </div>
  );
};

export default VideoPlayer;
