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
    list:[]
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
  }
})