import utils from '../../utils/util.js';

// pages/user/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    nickname: '',
    showAuthSettings: false,
    otherIsShow: false, //其他信息是否显示
    openid: '',
    departmentIndex: 0,
    departments: ['投顾平台', '手抄', '网站', 'B2C', 'B2B', '美股'],
    namewarn: false,
    nicknamewarn: false,
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
  usernameInput: function (e) {
    this.setData({
      username: e.detail.value
    })
  },
  nicknameInput(e) {
    this.setData({
      nickname: e.detail.value
    })
  },
  auth: function () {
    var self = this;
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          console.log('hasAuth')
          self.setData({
            showAuthSettings: false
          })
          self.login();
        } else {
          console.log('noAuth')
          self.setData({
            showAuthSettings: true
          })
        }
      }
    })
  },
  login() {
    console.log('start login')
    var self = this;
    wx.login({
      success(res) {
        if (res.code) {
          console.log(`wx.login suc,${res.code}`);
          wx.request({
            url: utils.url('wxlogin'),
            data: {
              jscode: res.code
            },
            success(json) {
              if (json.data.errorCode == '200') {
                let result = json.data.result;
                self.setData({
                  openid: result.openid
                })
                wx.setStorageSync('openid', result.openid);

                if (result.signed) {
                  //登录且 用户存在 应该跳转到其他页面
                  console.log(`signed:${result.signed}`)
                } else {
                  console.log(`signed:${result.signed}`)
                  //登录成功 但用户未绑定
                  self.setData({
                    otherIsShow: true,
                  })
                }
              } else {

              }
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },
  bindGetUserInfo() {
    this.onLoad();
  },
  //切换部门
  binddepartmentChange(e) {
    console.log(123);
    this.setData({
      departmentIndex: e.detail.value
    })
  },
  //提交绑定数据信息
  submit() {
    console.log('start submit');
    var data = this.data;
    if (utils.trim(data.username).length == 0) {
      this.setData({ namewarn: true });
      return;
    } else {
      this.setData({ namewarn: false });
    }

    if (utils.trim(data.nickname).length == 0) {
      this.setData({ nicknamewarn: true });
      return;
    } else {
      this.setData({ nicknamewarn: false });
    }

    var oData = {
      name: data.username,
      nickname: data.nickname,
      department: data.departments[data.departmentIndex],
      openid: data.openid
    };
    console.log(JSON.stringify(oData));

    wx.request({
      url: utils.url('/submitWxInfo/'),
      data: oData,
      success(json) {
        if (json.errorCode == '200') {
          //成功
        } else {
          //注册失败
        }
      }
    })
    //返回上一页
    wx.navigateBack({
      delta: 1
    })
  }
})