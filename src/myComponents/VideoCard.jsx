import {Link} from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoTitle, demoVideoUrl, demoChannelTitle, demoChannelUrl } from '../Utility/constant';

const videoCard = ({video}) => (
    <Card sx={{width:{xs:'100%',sm:'358px', md:'320px', },borderRadius:'none',boxShadow:0}}>
        <Link to={`video/${video?.id?.videoId}`}>
        <CardMedia 
        image={video?.snippet?.thumbnails?.high?.url}
        alt={video?.snippet?.title}
        sx={{width:{xs:'100%', sm:'358px', md:'320px'}, height:180}}
        />
        </Link>
        <CardContent sx={{background:'#1e1e1e', height:'106px'}}>
        <Link to={`video/${video?.id?.videoId}`}>
            <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                {video?.snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
            </Typography>
        </Link>
        <Link to={video?.snippet?.channelId ? `channel/${video?.snippet?.channelId}` : demoChannelUrl}>
            <Typography variant="subtitle2" fontWeight="bold" color="gray">
                {video?.snippet?.channelTitle.slice(0,60) || demoChannelTitle.slice(0,60)}
                <CheckCircle sx={{fontSize:12, color:"gray", ml:"5px"}}/>
            </Typography>
        </Link>
        </CardContent>
    </Card>
  )


export default videoCard