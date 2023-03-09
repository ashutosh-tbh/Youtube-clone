import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import {Navbar, Feed, VideoDetails, SearchFeed, ChannelDetails} from "./myComponents";


const App = () => (
    <BrowserRouter>
        <Box sx={{backgroundColor:'#000'}}>
            <Navbar/>
            <Routes>
                <Route path='/' exact element = {<Feed/>}/>
                <Route path='/video/:id' element = {<VideoDetails/>}/>
                <Route path='/channel/:id' element = {<ChannelDetails/>}/>
                <Route path='/search/:searchTerm' element = {<SearchFeed/>}/>
                <Route path='/search/:searchTerm/video/:id' element = {<VideoDetails/>}/>
            </Routes>
        </Box>
    </BrowserRouter>
  )


export default App