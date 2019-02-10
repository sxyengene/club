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
    loadedSettings:false,
  },
  //事件处理函数
  bindViewTap: function() {

  },
  onLoad: function() {
    this.getSetting();
  },
  scan(){
    var self = this;
    wx.scanCode({
      onlyFromCamera:false,
      scanType: "QR_CODE",
      success(json){
        if (json.result.includes(utils.urlPrefix)){
          console.log(json.result)
          var search = json.result.split('?')[1];
          var keyArr = search.split('&');
          var queryObj = {},temp;
          for (var i in keyArr){
            temp = keyArr[i].split('=');
            queryObj[temp[0]] = temp[1];
          }
          
          if(queryObj['courseid']){
            self.sign(queryObj['courseid']);
          }
        }else{
          console.log('out')
        }
      },
      error(e){
        console.log('error')
        console.log(JSON.stringify(e));
      }
    });
  },
  //签到
  sign(courseid){
    let openid = wx.getStorageSync('openid');
    let oData = {};
    if (!openid){
      utils.goLogin();
      return;
    }
    

    wx.request({
      url: utils.url('sign'),
      data:oData,
    })

  },
  getSetting: function(e) {
    var self = this;
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          self.setData({
            loadedSettings: true
          })
          self.getUserInfo();
        } else {
          self.setData({
            loadedSettings:false
          })
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
  },
  needLogin(){
    if (!this.data.loadedSettings){
      //未登录
      utils.goLogin();
    }
  }
})