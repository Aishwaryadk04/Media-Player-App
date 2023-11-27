import { serverURL } from "./serverURL"
import { commonAPI } from "./commonAPI"


//upload a video
export const uploadVideo = async (reqBody)=>{
    //make post http request to http://localhost:4000/videos to add video in json server and return response to add component
   return await commonAPI("POST",`${serverURL}/videos`,reqBody)
}

//get all videos from json server
export const getAllVideos = async ()=>{
      //make get http request to http://localhost:4000/videos to get all video from json server and return response to view component
      return await commonAPI("GET",`${serverURL}/videos`,"")
}
//get a videos from json server
export const getVideos = async (id)=>{
    //make get http request to http://localhost:4000/videos/id to get all video from json server and return response to view component
    return await commonAPI("GET",`${serverURL}/videos`,"")
}

//remove a videos from json server
export const deleteVideos = async (id)=>{
    //make delete http request to http://localhost:4000/videos/id to remove a  video from json server and return response to videocard component
    return await commonAPI("DELETE",`${serverURL}/videos/${id}`,{})
}