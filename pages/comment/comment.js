//index.js
//获取应用实例
const app = getApp();
import utils from '../../utils/util.js';

Page({
  data: {
    courseid:0,
    coursename:'全部评论',
    owner:'',
    coursetime:'',
    list:[],
    clength:0,
    comment:'',
  },
  //事件处理函数
  bindViewTap: function() {

  },
  onLoad: function(options) {
    this.setData({
      courseid: options.id
    });

    this.initVars();
  },
  getUserInfo: function(e) {

  },
  initVars() {
    var self = this;
    
    if (!this.data.courseid){
      return;
    }
    
    this.getAllComments();
    this.getCourseName();
  },
  getAllComments(){
    var self = this;
    let oData = {
      courseid: this.data.courseid
    };
    wx.request({
      url: utils.url('commentFindByCourseId'),
      data: oData,
      success(json) {
        let data = json.data;
        if (data.errorCode == 200) {
          if (data.result.length) {
            data.result = [];
            self.setData({ list: data.result });
          } else {

          }
        }
      }
    })
  },
  getCourseName(){
    var self = this;
    let oData = {
      id: this.data.courseid
    };
    wx.request({
      url: utils.url('findByCourseId'),
      data: oData,
      success(json) {
        let data = json.data;
        if (data.errorCode == 200) {
          var date = new Date(+data.result.coursetime);
          self.setData({
            coursename:data.result.coursename,
            owner:data.result.name,
            coursetime: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
          })
        }
      }
    })
  },
  commentinput(e){
    this.setData({
      clength: e.detail.value.length,
      comment:e.detail.value,
    })
  },
  commentconfirm(){
    let openid = wx.getStorageSync('openid');
    console.log(openid)
    if (!openid) {
      utils.goLogin();
      return;
    }
    console.log( ( this.data.comment.length <= 5) )

    if (this.data.comment.length <= 5){
      wx.showToast({
        title: '评论至少5个字',
        icon: 'error',
        duration: 2000
      })
      return;
    }

    let oData = {
      courseid:this.data.courseid,
      content: this.data.comment,
    };

    wx.request({
      url: utils.url('addComment'),
      data:oData,
      success(json){
        if(json.data.result == '200'){
          console.log('suc')
        }
      }
    })
  }
})