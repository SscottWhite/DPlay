
var app = getApp() //全局变量

Page({    
    data:{
      First:   app.globalData.foo,
      Second:  "scond",
      true:    true
    },
    onLoad(query){
      console.log("你好");
    },
    onReady(){},
    onShow(){},
    onHide(){},
    onUnload(){},
    onTitleClick(){
      this.retu();
    },
    onPullDownRefresh(){
      success:{
        this.go();
      }
    },
    onReachBottom(){},
    onShareAppMessage(){},
    viewTap(){},

    go(){
      dd.navigateTo({url:"/pages/zx/zx"})
    },
    retu(){
      dd.redirectTo({url:"/pages/vue/vue"})
    }
  

})