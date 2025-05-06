import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { request } from '@ray-js/ray';
import globalConfig from "@/global.config";
export const loginRequset = createAsyncThunk('user/login',async ({username,password,callback},thunkAPI)=>{
   return new Promise((resolve,reject)=>{
      const url = globalConfig.basename + `/users?username=${username}&password=${password}`
      const manager = request({
          url,
          method:'GET',
          data:{username,password},
          dataType:'json',
          success(resp){
            console.log(resp)
            if (resp.data.length > 0 && resp.statusCode == 200){
                resolve(resp.data[0])
                callback({})
            } else {
                reject({error:'用户名密码错误'})
                callback({error:'用户名密码错误'})
            }
          },
          fail(err){
               reject({error:err.errorMsg})
               callback({error:'用户名密码错误222'})
          },
          complete(){
             console.log("请求完毕：" + url)
          }
       })
    })
})