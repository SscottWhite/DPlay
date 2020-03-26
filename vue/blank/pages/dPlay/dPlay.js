
var app = getApp() //全局变量

Page({    
    data:{
      First:   app.globalData.foo,
      Second:  "scond",
      true:    true,
      items:[
        {name:'react',value:'REACT',checked:true},
        {name:'vue', value:'VUE'}
      ],
      list:[
        {id:0, name : '春'},
        {id:1, name : '夏'},
        {id:2, name : '秋'},
        {id:3, name : '冬'}
      ],
      listIndex:0
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
      //dd.navigateTo({url:"/pages/zx/zx"})
      dd.alert({
        title:"傻猪猪"
      }),
      dd.stopPullDownRefresh()
    },
    retu(){
      dd.redirectTo({url:"/pages/vue/vue?count=100"})
    },
  
  scrollupper(e){
    alert(e.detail);
  },

  onmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e,e.detail.value)
  },
  onRe: function() {
    console.log('form发生了reset事件')
  },
  radioGroupTap:function(e){
    console.log("radioGroupTap"+e)
  },

  onchange(e){
      console.log(e),
      this.setData({
          listIndex:e.detail.value
      })
  }
})