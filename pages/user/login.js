import utils from '../../utils/util.js';

// pages/user/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    password:'',
    hasAuthSetting:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {  
    this.auth();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  login:function(){
    wx.request({
      url: utils.url(),
      success:function(e){
        console.log(e)
      },
      fail:function(e){
        console.log(e)
      }
    })
  },
  usernameInput: function (e) {
    this.setData({
      username: e.detail.value
    })
  },
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  auth:function(){
    var that = this;
    wx.getSetting({
      success(res){
        if (res.authSetting['scope.userInfo']){
          that.setData({
            hasAuthSetting: true
          })
          that.login();
        }else{
          that.setData({
            hasAuthSetting: false
          })
        }
      }
    })  
  },
  login(){
    console.log('login')
    wx.login({
      success(res) {
        if (res.code) {
          console.log(res.code);
          wx.request({
            url: utils.url('wxlogin'),
            data: {
              jscode: res.code
            },
            success(json){
              if (json.data.errorCode == '200'){
                console.log('suc')
              }else{
                console.log('fail')
              }
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },
  bindGetUserInfo(){
    this.login();
  }
})