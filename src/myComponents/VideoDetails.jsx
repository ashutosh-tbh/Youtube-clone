import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Stack, Box, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Videos } from './'
import { fetchFromApis } from '../Utility/fetchFromApis';

const VideoDetails = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [video, setVideo] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchFromApis(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]));
    fetchFromApis(`seacrh?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideo(data.items));
  }, [id])
  // console.log("videos " + id)
  if (!videoDetail?.snippet) return '...Loading';

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail

  return (
    <Box minHeight='95vh' >
      <Stack direction={{ xs: 'column', md: 'row' }} >
        <Box flex={1} sx={{ backgroundColor: '#000' }}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
              className='react-player'
              controls />
            <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
              {title}
            </Typography>
            <Stack direction='row' justifyContent='space-between' sx={{ color: '#fff' }} py={1} px={2}>
              <Link to={`channel/${channelId}`}>
                <Typography variant={{ sm: 'subtitle1', md: 'h5' }} color='#fff'>
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: '12px', color: 'red', ml: '5px' }} />
                </Typography>
              </Link>
              <Stack direction='row' gap='20px' alignItems='center'>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} Likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent='center' alignItems='center'>
          <Videos videos={video} direction='column' />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetails