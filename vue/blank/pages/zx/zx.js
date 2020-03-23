Page({
  data:{
    zx1:"123",
    zx2:[{a:1},{b:2}]
  },
  tapButton(e){
    console.log(e.target.dataset.hi);
    if(e.target.dataset.hi === "123"){
        dd.navigateTo({url:"/pages/vue/vue"})
    }else{
       dd.redirectTo({url:"/pages/vue/vue"});
    }
  },

  touchOn(e){
    console.log(123);
  }
})