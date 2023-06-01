import {myAxios} from "../utils/MyAnxios";
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
