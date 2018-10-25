//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    navList: [{
      title: '评论',
      bg: 'redbg'
    }
    ,{
      title: '评论',
      bg: 'pinkbg'
    }
    ,{
      title: '列表',
      bg: 'greenbg'
    }
    ,{
      title: '列表b',
      bg: 'yellowbg'
    }
    ],
  },
  //事件处理函数
  bindViewTap: function() {

  },
  onLoad: function() {

  },
  getUserInfo: function(e) {

  }
})