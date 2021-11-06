// pages/ticket/ticket.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    useableTickets: 0,
    usedTicket: 0,
    expiredTickets: 0,
    tickets: [
      {
        id: '001',
        shopName: '好德便利店001',
        amount: '50.00',
        claim: '满100元可用',
        img: '/assets/img/shops/haode.jpg',
        availableAt: ['2021-10-19', '2021-11-09']
      },
      {
        id: '002',
        shopName: '好德便利店002',
        amount: '50.00',
        claim: '满100元可用',
        img: '/assets/img/shops/haode.jpg',
        availableAt: ['2021-10-19', '2021-11-09']
      },
      {
        id: '003',
        shopName: '好德便利店1',
        amount: '50.00',
        claim: '满100元可用',
        img: '/assets/img/shops/haode.jpg',
        expired: true,
        availableAt: ['2021-09-19', '2021-10-09']
      },
      {
        id: '004',
        shopName: '好德便利店11',
        amount: '50.00',
        claim: '满100元可用',
        img: '/assets/img/shops/haode.jpg',
        used: true,
        availableAt: ['2021-05-19', '2021-06-09']
      }
    ]
  },

  goToPage: function () {
    wx.navigateTo({
      url: '/pages/map/map',
    })
  },

  showQRcode: function (e) {
    let id = e.target.dataset.id 

    wx.navigateTo({
      url: '/pages/code/code?id=' + id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTicketCount()
  },

  getTicketCount: function () {
    let _ = this
    let _c = 0
    let _u = 0
    let _e = 0
    _.data.tickets.forEach(function (el) {
      if (!el.expired && !el.used) {
        _c++
      }

      if (el.expired) {
        _e++
      }

      if (el.used) {
        _u++
      }
    })
    _.setData({
      useableTickets: _c,
      usedTicket: _u,
      expiredTickets: _e
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {}
})
