import React from 'react';
import { useQuery } from 'react-query';

import Error from '../Error/Error';
import Loader from '../Loader/Loader';
import VideoList from '../VideoList/VideoList';
import { fetchVideos, VideoResults } from '../../lib/requests';

const Main: React.FC = () => {
  const { isLoading, error, data } = useQuery<VideoResults>('videos', fetchVideos);

  if (error) return <Error />
  if (isLoading) return <Loader />
  if (data) return <VideoList data={data} />
  return null;
}

export default Main;
