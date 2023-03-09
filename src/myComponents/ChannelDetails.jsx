import { Stack, Box } from '@mui/material'; 
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Videos, ChannelCard} from './';
import { fetchFromApis } from '../Utility/fetchFromApis';
const ChannelDetails = () => {
  const [channelDetails, setChannelDetails] = useState(null)
  const [videos, setVideos] = useState([])
  const {id} = useParams();
  // console.log(channelDetails, Videos);
  useEffect(()=> {
    fetchFromApis(`channels?part=snippet&id=${id}`).then((data)=>setChannelDetails(data?.items[0]));
    fetchFromApis(`search?channelId=${id}&part=snippet&order=date`).then((data)=>setVideos(data?.items));
  },[id])
  return (
    <Box minHeight='95vh'>
      <Box >
      <div style = {{
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,65,9,1) 0%, rgba(100,39,255,1) 62%)',
        zIndex:10,
        height:'300px'
      }}
      />
      <ChannelCard channelDetail={channelDetails} marginTop='-110px'/>
      </Box>
      <Box p={5}display='flex'>
      <Box sx={{ mr: { sm: '150px' } }}/>
        <Videos videos={videos}/>
      
      </Box>
    </Box>
  )
}

export default ChannelDetails