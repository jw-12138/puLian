Page({
  data: {
    height: 0,
    buttonSpin: false,
    buttonShow: true,
    redpackWrapExpand: false,
    loaded: false,
  },
  onLoad: function (options) {
    let _ = this
    _.getHeight()
  },
  onReady() {
    this.setData({
      loaded: true
    })
  },
  getHeight: function () {
    let _ = this
    this.setData({
      height: wx.getSystemInfoSync().windowWidth / 0.8 + 'px'
    })
  },
  runAnimation: function () {
    let _ = this
    _.setData({
      buttonSpin: true
    })
    
    setTimeout(function () {
      _.setData({
        buttonShow: false,
        redpackWrapExpand: true
      })
    }, 1000)
  }
});