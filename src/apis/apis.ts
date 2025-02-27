import {myAxios, pythonAxios, qiXiangAxios} from "../utils/MyAnxios";
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
    return await myAxios.get("/getTempChart",{
        params: {
            stationId: req
        }
    });
}

export const queryWeatherInfo = async (req:string) =>{
    return await myAxios.get("/getInfo",{
        params: {
            stationId: req
        }
    });
}

export const getWordCloudPicture = async () =>{
    return await pythonAxios.get("/");
}
