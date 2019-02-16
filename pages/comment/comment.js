//index.js
//获取应用实例
const app = getApp();
import utils from '../../utils/util.js';
const {
  $Toast
} = require('../../component/base/index');

let commitFlag = true;

// {
// content: "",
// ctime: "",
// name: "",
// userid: 0,
// }

Page({
  data: {
    courseid: 0,
    coursename: '全部评论',
    owner: '',
    coursetime: '',
    username: '',
    list: [],
    clength: 0,
    comment: '',
  },
  //事件处理函数
  bindViewTap: function() {

  },
  onLoad: function(options) {
    this.setData({
      courseid: options.id
    });

    this.initVars();
    this.getUserInfo();
  },
  getUserInfo: function(e) {
    let self = this;
    let openid = wx.getStorageSync('openid');
    if (!openid) {
      utils.goLogin();
      return;
    }
    var oData = {
      openid
    };
    wx.request({
      url: utils.url('findUserById'),
      data: oData,
      success(json) {
        if (json.data.errorCode == 200) {
          self.setData({
            username: json.data.result.name
          })
        }
      }
    })
  },
  initVars() {
    var self = this;

    if (!this.data.courseid) {
      return;
    }

    this.getAllComments();
    this.getCourseName();
  },
  getAllComments() {
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
            // data.result = [];
            self.setData({
              list: data.result
            });
          } else {

          }
        }
      }
    })
  },
  getCourseName() {
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
            coursename: data.result.coursename,
            owner: data.result.name,
            coursetime: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
          })
        }
      }
    })
  },
  commentinput(e) {
    this.setData({
      clength: e.detail.value.length,
      comment: e.detail.value,
    })
  },
  commentconfirm() {
    var self = this;
    let openid = wx.getStorageSync('openid');
    if (!openid) {
      utils.goLogin();
      return;
    }

    //toast
    if (this.data.comment.length <= 5) {
      $Toast({
        content: '字数不应少于5个',
        type: 'error'
      });
      return;
    }

    let oData = {
      courseid: this.data.courseid,
      content: this.data.comment,
      openid: openid
    };

    let listObj = {
      content: this.data.comment,
      ctime: utils.fTime(new Date),
      name: this.data.username,
    }
    
    if (commitFlag == false){
      return;
    }

    commitFlag = false;

    wx.request({
      url: utils.url('addComment'),
      data: oData,
      success(json) {
        if (json.data.errorCode == '200') {
          self.setData({
            comment: '',
            clength:0,
            list: [...self.data.list, listObj]
          })

          $Toast({
            content: '发送成功',
            type: 'success'
          });
        }
      },
      complete(){
        commitFlag = true;
      }
    })
  },
})