import {myAxios} from "../utils/MyAnxios";
import axios from "axios";

const ARTICLE_PREFIX = "/api/pPost"
const ARTICLE_UPLOAD_PREFIX = "/file/upload"


export const listPageArticleVoRequest = async (current: number, size: number) => {
    return await myAxios.get(ARTICLE_PREFIX + "/pPostDisplay", {
        params: {
            current: current,
            size: size
        }
    })
}

export const uploadImageInArticle = async (img: any, onProgress: any) => {


    return await axios.post(ARTICLE_UPLOAD_PREFIX, {
        'uploadFile': img
    }, {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        baseURL: 'http://127.0.0.1:8088',
        // @ts-ignore
    }, onProgress)
}

export const createArticleRequest = async (pPostArticleVO: PPostCreateVo) => {
    return await myAxios.post(ARTICLE_PREFIX + "/createPost", pPostArticleVO);
}

