import { request } from "../../request/index.js";
import { login } from "../../utils/asyncWx.js";

Page({
  // 获取用户信息
  async handleGetUserInfo(e) {
    try {
      // 1 获取用户信息
      const { encryptedData, rawData, iv, signature } = e.detail;
      // 2 获取小程序登录成功后的code
      const { code } = await login();
      const loginParams={ encryptedData, rawData, iv, signature ,code};
      //  3 发送请求 获取用户的token
      //没有企业账号，这里的token是null
        //const {token}=await request({url:"/users/wxlogin",data:loginParams,method:"post"});
        let token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIzLCJpYXQiOjE1NjQ3MzAwNzksImV4cCI6MTAwMTU2NDczMDA3OH0.YPt-XeLnjV-_1ITaXGY2FhxmCe4NvXuRnRB8OMCfnPo"
      // 4 把token存入缓存中 同时跳转回上一个页面,2返回上两层
      wx.setStorageSync("token", token);
      wx.navigateBack({
        delta: 1
      });
  
    } catch (error) {
      console.log(error);
    }
  }
})