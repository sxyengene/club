const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatTimeComment = date =>{
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return `${year}-${month}-${day} ${hour}:${minute}`;
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const urlPrefix = '//i-debug.com/';

const url = 'https://i-debug.com/frontclub/wx';
// const url = 'http://47.99.96.170:7001/wx'

const urlFunc = function(str){
  if (/^\//.test(str)){
    return url + str;
  }else{
    return url + '/' + str;
  }
}

const trim = str => {
  return str.replace(/^\s/g, '').replace(/\s$/g, '');
}

function goLogin(){
  wx.navigateTo({ url: '/pages/user/login' });
}


module.exports = {
  formatTime: formatTime,
  fTime:formatTimeComment,
  url: urlFunc,
  urlPrefix,
  trim,
  goLogin
}
