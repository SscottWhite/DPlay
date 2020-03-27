Page({
  data:{
    zore:0,
    array:[
      {message:'foo'},
      {message:'tar'}
      ],
    list:['1','2','3','4'],  
    taptapStr:"123",
    background: ['green', 'red', 'yellow'],
    indicatorDots: true,
    autoplay: false,
    interval: 3000,
    a:{
       b:[1,2,3,4]
      },
    c:{
      count:0,
    }  
  },
  onLoad(query){
      this.$spliceData({"a.b":[1,1,5,6]});  //从第一位开始, 删除一个(第一个不算),再在这个1后面加5,6
      dd.alert({
          content:query.count+" "+query.one,
         
      });
      this.setData({
          "c.count":query.count
      })
       console.log(JSON.stringify(query));
  },

  getServerTime(){
    dd.getServerTime({
      success:(res)=>{
        dd.alert({
          content:res.time,
        });
      },
    });
  },

  bring(e){
    const { hi } = e.target.dataset;
    const list = this.data.list.concat();
    const index = list.indexOf(hi);
    if(index !== -1){
      list.splice(index,1);
      list.unshift(hi);
      this.setData({list});
    }
  },

  taptap(){
      this.setData({
        taptapStr:"taptapStr",
      });
  },

  tapName(event){
     console.log(event.detail);
  },



  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

  
})