// pages/code/code.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '001',
    ticket: {},
    ticketsData: [
      {
        id: '001',
        shopName: '好德便利店001',
        address: '上海市徐汇区xxx',
        amount: '50.00',
        claim: '满100元可用',
        img: '/assets/img/shops/haode.jpg',
        availableAt: ['2021-10-19', '2021-11-09']
      },
      {
        id: '002',
        shopName: '好德便利店002',
        address: '上海市徐汇区xxx',
        amount: '50.00',
        claim: '满100元可用',
        img: '/assets/img/shops/haode.jpg',
        availableAt: ['2021-10-19', '2021-11-09']
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _ = this
    if(options.id){
      _.setData({
        id: options.id
      })
    }
    _.getTicketData()
  },

  getTicketData: function () {
    let _ = this
    let _id = this.data.id
    let _data = this.data.ticketsData

    for (let i = 0; i < _data.length; i++) {
      let el = _data[i]
      if(el.id === _id){
        _.setData({
          ticket: el
        })
        break
      }
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})