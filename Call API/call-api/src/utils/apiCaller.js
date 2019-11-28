import axios from 'axios';
import * as Config from '../constants/config';// file khai báo api server

export default function callApi(endpoint,method="GET", body)
{
    axios({
        method: method,
        url:`${Config.API_URL}/${endpoint}`,
        data: body,
    }).catch(err => {
        console.log(err)
    })
}

