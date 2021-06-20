import React from 'react';
import { Link } from 'react-router-dom';
import { VideoResults } from '../../lib/requests';
import { getFormattedDate, getFormattedTimeFromFilename } from '../../lib/dateUtils';

interface VideoListProps {
  data: VideoResults;
}

const VideoList: React.FC<VideoListProps> = ({ data }) => (
  <div>
    <h2>Videos By Date</h2>
    <ul>
      {data.map(({ date, videos }) => (
        <li key={date}>
          <ul>
            <h3>{getFormattedDate(date)}</h3>
            {videos.map(video => (
              <li key={video}>
                <Link to={`/videos/${date}/${video}`}>
                  {getFormattedTimeFromFilename(video)}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </div>
);

export default VideoList;
