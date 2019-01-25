import utils from '../../utils/util.js';

// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      month: '2018.10',
      shares: []
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    this.getAllCourses();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  getAllCourses(){
    const openid = wx.getStorageSync('openid');
    const self = this;

    let oData = {
      openid: openid
    }

    wx.request({
      url: utils.url('allCourses'),
      data:oData,
      success(json){
        if(json.data.errorCode == '200'){
          let list= json.data.result.list;
          self.setData({
            list: list
          })
          console.log(list)
        }
      }
    })
  }
})