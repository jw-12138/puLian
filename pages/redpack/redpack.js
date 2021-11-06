Page({
  data: {
    height: 0,
    buttonSpin: false,
    buttonShow: true,
    redpackWrapExpand: false,
    loaded: false,
    redpackAmount: 0,
    showContent: false,
    heightReady: false,
    ticketsData: [
      {
        shopName: '好德便利店',
        amount: '50.00',
        claim: '满100元可用',
        img: '/assets/img/shops/haode.jpg'
      },
      {
        shopName: '好德便利店',
        amount: '50.00',
        claim: '满100元可用',
        img: '/assets/img/shops/haode.jpg'
      }
    ]
  },
  onLoad: function (options) {
    let _ = this
    _.getHeight()
  },
  onReady: function () {
    this.setData({
      loaded: true
    })
  },
  getHeight: function () {
    let _ = this
    this.setData({
      height: wx.getSystemInfoSync().windowWidth / 0.8 + 'px'
    })

    setTimeout(() => {
      _.setData({
        heightReady: true
      })
    }, 100)
  },
  goToPage: function () {
    // wx.navigateBack({
    //   delta: 0
    // })

    wx.showToast({
      title: '领取成功',
      mask: true,
      duration: 2500,
      complete: function () {
        wx.navigateTo({
          url: '/pages/ticket/ticket'
        })
      }
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
        redpackWrapExpand: true,
        showContent: true,
        redpackAmount: (0.5 + Math.random() * 2.5).toFixed(2)
      })
      wx.setNavigationBarColor({
        backgroundColor: '#d8635b',
        frontColor: '#ffffff'
      })
    }, 1000)
  }
})
