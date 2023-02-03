/**
 * promise 形式  getSetting
 */
export const getSetting=()=>{
    return new Promise((resolve,reject)=>{
      wx.getSetting({
        success: (result) => {
          resolve(result);
        },
        fail: (err) => {
          reject(err);
        }
      });
    })
  }

  /**
   * promise 形式  chooseAddress选择收货地址
   */
  export const chooseAddress=()=>{
    return new Promise((resolve,reject)=>{
      wx.chooseAddress({
        success: (result) => {
          resolve(result);
        },
        fail: (err) => {
          reject(err);
        }
      });
    })
  }
  
  /**
   * promise 形式  openSetting
   */
  export const openSetting=()=>{
    return new Promise((resolve,reject)=>{
      wx.openSetting({
        success: (result) => {
          resolve(result);
        },
        fail: (err) => {
          reject(err);
        }
      });
    })
  }
  
  /**
   *  promise 形式  showModal弹窗
   * @param {object} param0 参数
   */
  export const showModal=({content})=>{
    return new Promise((resolve,reject)=>{
      wx.showModal({
        title: '提示',
        //提示语
        content: content,
        success :(res) =>{
          resolve(res);
        },
        fail:(err)=>{
          reject(err);
        }
      })
    })
  }
  
  /**
   *  promise 形式  showToast消息框
   * @param {object} param0 参数
   */
  export const showToast=({title})=>{
    return new Promise((resolve,reject)=>{
      wx.showToast({
        title: title,
        icon: 'none',
        success :(res) =>{
          resolve(res);
        },
        fail:(err)=>{
          reject(err);
        }
      })
    })
  }
  
  /**
   * promise 形式  login登录之后的code值
   */
  export const login=()=>{
    return new Promise((resolve,reject)=>{
      wx.login({
        timeout:10000,
        success: (result) => {
          resolve(result);
        },
        fail: (err) => {
          reject(err);
        }
      });
    })
  }
  
  /**
   * promise 形式的 小程序的微信支付
   * @param {object} pay 支付所必要的参数
   */
  export const requestPayment=(pay)=>{
    return new Promise((resolve,reject)=>{
     wx.requestPayment({
        ...pay,
       success: (result) => {
        resolve(result)
       },
       fail: (err) => {
         reject(err);
       }
     });
       
    })
  }
  
  