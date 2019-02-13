//index.js
//获取应用实例
const app = getApp();
import utils from '../../utils/util.js';

Page({
  data: {
    courseid:0,
    coursename:'全部评论',
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
    let oData = {
      courseid: this.data.courseid
    };

    wx.request({
      url: utils.url('commentFindByCourseId'),
      data: oData,
      success(json) {
        let data = json.data;
        if (data.errorCode == 200) {
          if(data.result.length){
            self.setData({ list:data.result });
          }else{

          }
          
        }
      }
    })
  }
})