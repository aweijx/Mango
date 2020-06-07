// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sendopenid : 1,
    sendname : 'bigbag',
    sendclass : 'bag',
    sendmsg : 'love'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url:'http://124.70.144.48:8080/add_lost_info',
      data:{
        openid:JSON.stringify(this.data.sendopenid),
        obj_name:JSON.stringify(this.data.sendname),
        obj_class:JSON.stringify(this.data.sendclass),
        msg:JSON.stringify(this.data.sendmsg)
      },
      method:"GET",
      header:{
        'content-type':'application/json'
        },
      
      success:function(res){
         console.log(res.data)
      }
    })
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