import * as types from './actionTypes';
import axios from 'axios'


const getMusicRecordsRequest = () => {
    return {
        type: types.GET_TAGS_REQUEST
    }
}
const getMusicRecordsSuccess = (r) => {
    return {
        type: types.GET_TAGS_SUCCESS,
        payload: r.data
    }
}
const getTagsFailure = (e) => {
    return {
        type: types.GET_TAGS_FAILURE,
        payload:e
    }
}
const getTags = (params) => (dispatch) => {
    dispatch(getMusicRecordsRequest())
    return axios.get("http://localhost:8080/albums",params).then((r) => {
        return dispatch(getMusicRecordsSuccess(r))
    }).catch((e) => {
        return dispatch(getTagsFailure(e))
    })
}
const postMusicRecordsRequest = () => {
    return {
        type: types.POST_TAGS_REQUEST
    }
}
const postMusicRecordsSuccess = (r) => {
    return {
        type: types.POST_TAGS_SUCCESS,
        payload: r.data
    }
}
const postTagsFailure = (e) => {
    return {
        type: types.POST_TAGS_FAILURE,
        payload:e
    }
}
const postTags = (params,tag_id) => (dispatch) => {
    dispatch(getMusicRecordsRequest())
    return axios.post(`https://app.timecamp.com/third_party/api
    /tag/${tag_id}`,params).then((r) => {
        return dispatch(postMusicRecordsSuccess(r))
    }).catch((e) => {
        return dispatch(postTagsFailure(e))
    })
}
export {getTags,postTags}