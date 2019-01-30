//index.js
//获取应用实例
import utils from '../../utils/util.js';

const app = getApp()

Page({
  data: {
    navList: [{
      title: '列表',
      bg: 'redbg'
    }
    ,{
      title: '1',
      bg: 'pinkbg'
    }
    ,{
      title: '2',
      bg: 'greenbg'
    }
    ,{
      title: '3',
      bg: 'yellowbg'
    }
    ],
  },
  //事件处理函数
  bindViewTap: function() {

  },
  onLoad: function() {
    this.getSetting();
  },
  scan(){
    wx.scanCode({
      onlyFromCamera:false,
      scanType: "QR_CODE",
      success(json){
        if (json.result.includes(utils.urlPrefix)){
          console.log(json.result)
          if(1){

          }
        }else{
          console.log('out')
        }
        console.log('suc')
        console.log(json)
        console.log(json.result);
      },
      error(e){
        console.log('error')
        console.log(JSON.stringify(e));
      }
    });
  },
  //签到
  sign(){

  },
  getSetting: function(e) {
    var self = this;
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          self.getUserInfo();
        } else {
          
        }
      }
    })  
  },
  getUserInfo(){
    wx.getUserInfo({
      success(res) {
        console.log(res)
        const userInfo = res.userInfo
        const nickName = userInfo.nickName
        const avatarUrl = userInfo.avatarUrl
        const gender = userInfo.gender // 性别 0：未知、1：男、2：女
        const province = userInfo.province
        const city = userInfo.city
        const country = userInfo.country
      }
    })
  }
})