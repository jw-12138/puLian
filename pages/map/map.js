let mapCTX = null

Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: '31.230525',
    longitude: '121.473667',
    scale: '12'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _ = this
    wx.getLocation({
      isHighAccuracy: true,
      success: function (res) {
        console.log(res);
        _.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          scale: 15
        })
      },
      fail: function (res) {
        wx.showToast({
          icon: 'error',
          title: '请手动选择位置'
        })
      }
    })

    mapCTX = wx.createMapContext('map', _)
    _.initMap()
  },

  initMap: function () {
    // mapCTX.addMarkers()
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