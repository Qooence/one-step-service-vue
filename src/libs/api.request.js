import HttpRequest from '@/libs/axios'
const baseUrl = process.env.VUE_APP_AXIOS_BASE_URL
const axios = new HttpRequest(baseUrl)
export default axios
