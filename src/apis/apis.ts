import {myAxios, qiXiangAxios} from "../utils/MyAnxios";
import {latestPictureRes} from "../models/requests/PictureData";


// export const changeQuestionnaireStatusRequest = async (stopQuestionnaireRequest: StopQuestionnaireRequest) => {
//     return await myAxios.post("/exel/stop", stopQuestionnaireRequest);
// }


export const getLatestPicture = async (req:string) => {
    return await myAxios.get("/getLatestPicture", {
         params: {
             selectKey:req
         }
    });
}

export const queryAllProvinces = async () =>{
    return await qiXiangAxios.get("/rest/province/all");
}


export const queryCountiesByProvince = async (req:string) =>{
    return await qiXiangAxios.get("/rest/province/"+req);
}

// http://www.nmc.cn/rest/weather?stationid=59315
export const queryWeatherByCounty = async (req:string) =>{
    return await qiXiangAxios.get("/rest/weather/",{
        params: {
            stationid: req
        }
    });
}
