import Vue from 'vue'
import API_URL from './resources'
export const getSignature = function (url) {
  return Vue.http.get(`${API_URL.GET_SIGNATURE}?url=${url}`)
}
