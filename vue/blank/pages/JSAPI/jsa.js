Page({
    data:{
      scrollTop:0,
      loca:{
        longi:"",  //经度
        lati:""   //纬度
      }
    },
    
/**
dd.getRecorderManager  获取当前小程序全局唯一的录音管理器 recordManager。
const recorderManager = dd.getRecorderManager()

获取当前小程序全局唯一的背景音频管理 backgroundAudioManager。当小程序切入后台时，音频可以背景播放。
let backgroundAudioManager = dd.getBackgroundAudioManager();

dd.chooseVideo 拍摄视频或从手机相册中选视频
{
  sourceType   Array/<string>   ['album', 'camera']     否  视频来源
  maxDuration  String           60                      否  最长视频拍摄事件，单位为秒
  success      String      否  接口调用成功回调函数
      {
        filePath  string  视频临时文件路径
        duration  number  视频时间长度
        size      number  视频数据大小
        height    number  视频高度
        width     number  视频宽度
      }
  fail         Boolean     否  接口调用失败回调函数
  complete     Number      否  接口调用结束回调函数
}
 */
  onRecorder(){ 
      dd.chooseVideo({
          sourceType: ['album','camera'],
          maxDuration : '60',
          success : (res) => {
              dd.alert({
                 title:res.duration,
              })
          }
      })
  },
  
  getAuth : () => {
    dd.getAuthCode({
       success: ({ authCode }) => {
        dd.alert({
          content: authCode,
        });
      },
    })
  },
 onLoad(){
   dd.showToast({
     content:"88",
     duration:1000
   })
},

 action:(e) => { 
   dd.showActionSheet({
      title:"test",
      items:["tst1","tst2"],
      cancelButtonText:"取消",
      success:(e)=>{
          dd.showToast({
             content:e.index,
             duration:2000
          }),
          dd.navigateTo({url:"/pages/vue/vue"})
      }
      })
 },
  /**
 dd.navigateTo    保留当前页面，跳转到应用内的某个指定页面，可以使用 dd.navigateBack 返回到原来页面。
                    (注意：页面最大深度为5，即可连续调用 5 次 navigateTo)
 dd.redirectTo    关闭当前页面，跳转到应用内的某个指定页面。
 dd.navigateBack  关闭当前页面，返回上一级或多级页面。可通过 getCurrentPages 获取当前的页面栈信息，决定需要返回几层。 
                     delta  	Number 	1	  返回的页面数，如果 delta 大于现有打开的页面数，则返回到当前页面栈最顶部的页
 dd.reLaunch       关闭当前所有页面，跳转到应用内的某个指定页面。
 dd.setNavigationBar   设置导航栏文字及样式。
    {
        title	          String  	否	导航栏标题
        backgroundColor	String	  否	导航栏背景色，支持十六进制颜色值
        reset          	Boolean	  否	是否重置导航栏为钉钉默认配色，默认 false
        success        	Function	否	调用成功的回调函数
        fail          	Function	否	调用失败的回调函数
        complete      	Function	否	调用结束的回调函数（调用成功、失败都会执行）
    }

 dd.switchTab     跳转到指定 tabBar 页面，并关闭其他所有非 tabBar 页面。

 dd.alert 警告框{
        title    	String	是	alert框的标题
        content	  String	是	alert框的内容
        buttonText	String	  否	按钮文字
        success	    Function	否	调用成功的回调函数
        fail      	Function	否	调用失败的回调函数
        complete  	Function	否	调用结束的回调函数（调用成功、失败都会执行）
    }
 dd.confirm确认框 {
      title	    String	是	confirm框的标题
      content	  String	是	confirm框的内容
      confirmButtonText	String	否	确认按钮文字
      cancelButtonText	String	否	取消按钮文字
      success: (result) => {  //success返回值: confirm	 Boolean    	点击 confirm 返回 true，点击 cancel 返回false
        dd.alert({
          title: `${result.confirm}`,
        });
      }
    }
 dd.showToast 显示一个弱提示，可选择多少秒之后消失。{
        content   	String	否	  文字内容
        type      	String	否 	  toast 类型，展示相应图标，默认 none，支持 success / fail / exception / none。其中 exception 类型必须传文字信息
        duration  	Number	否  	显示时长，单位为 ms，默认 2000。按系统规范，android只有两种(<=2s >2s)
    }
 dd.showLoading 显示加载提示。{
      content  	String	  否	loading的文字内容
      success	  Function	否	调用成功的回调函数
      fail	    Function	否	调用失败的回调函数
      complete	Function	否	调用结束的回调函数（调用成功、失败都会执行）
    }
 dd.hideLoading 隐藏加载提示。
 dd.showActionSheet {
    title	            String	      否	菜单标题
    items	            String/Array	是	菜单按钮文字数组
    cancelButtonText	String	      否	取消按钮文案。注：Android平台此字段无效，不会显示取消按钮
    success	          Function    	否	调用成功的回调函数 {
         index	Number	被点击的按钮的索引，从0开始。点击取消或蒙层时返回 -1
    }
    fail	            Function    	否	调用失败的回调函数
    complete	        Function	    否	调用结束的回调函数（调用成功、失败都会执行）
 }

  onPullDownRefresh  下拉刷新操作{
    （1） 需要在页面对应的 .json 配置文件中配置 "pullRefresh": true 选项，才能开启下拉刷新事件。
    （2）当处理完数据刷新后，调用 dd.stopPullDownRefresh 可以停止当前页面的下拉刷新。
  }
  dd.stopPullDownRefresh
   */ 

  onPullDownRefresh:()=>{
      dd.alert({
        title:"更新"
      }),
      dd.stopPullDownRefresh()
  },

  /**
   * dd.datePicker(object)  打开日期选择列表。{
   * format      String   否    返回的日期格式， yyyy-MM-dd(默认）/  HH:mm  /  yyyy-MM-dd HH:mm  / yyyy-MM
     currentDate String   否    初始选择的日期时间，默认当前时间
     success     Function 否    调用成功的回调函数{
            date 	 String   	选择的日期
     }
   * }
   */
  time:(e)=>{
    dd.datePicker({
      format: "yyyy-MM",
      currentDate : "2012-08",
      success:(e)=>{
        dd.alert({
          content:e.date
        })
      }
    })
  },

  /**
   * dd.createAnimation 
   * 创建动画实例animation。调用实例的方法来描述动画，最后通过动画实例的export方法将动画数据导出并传递给组件的animation属性.
   * 注意: export 方法调用后会清掉之前的动画操作
   * 
   * var animation = dd.createAnimation({})
   *     animation   动画实例可以调用以下方法来描述动画，调用结束后会返回实例本身，支持链式调用的写法。
   * 
   * animation.scale(3,3).rotate(60).step();
   *   调用动画操作方法后需要要调用 step() 来表示一组动画完成
   * 
   */
  onReady(){
    this.animation1 = dd.createAnimation()
  },
  animationTap(){
     this.animation1.rotate(Math.random() * 720 - 360).step()
     this.setData({ 
       animation1: this.animation1.export() 
    })   
  },

  /**
   * dd.createCanvasContext(canvasId)   创建 canvas 绘图上下文
   *        canvasId  	String   	定义在<canvas/>上的 id
      toTempFilePath   把当前画布的内容导出生成图片，并返回文件路径。
      setTextAlign     textAlign 是 Canvas 2D API 描述绘制文本时，文本的对齐方式的属性。注意，该对齐是基于
      setTextBaseline  textBaseline 是 Canvas 2D API 描述绘制文本时，当前文本基线的属性。
      setFillStyle     设置填充色。  如果没有设置 fillStyle，则默认颜色为 black。
      setStrokeStyle   设置边框颜色。 如果没有设置 strokeStyle，则默认颜色为 black。
      setShadow        设置阴影样式。 如果没有设置，offsetX 的默认值为 0， offsetY 的默认值为 0， blur 的默认值为 0，color 的默认值为 black。
      createLinearGradient    创建一个线性的渐变色。 需要使用 addColorStop() 来指定渐变点，至少需要两个。
      createCircularGradient  创建一个圆形的渐变色。起点在圆心，终点在圆环。需要使用 addColorStop() 来指定渐变点，至少需要两个。
      addColorStop     创建一个颜色的渐变点。小于最小 stop 的部分会按最小 stop 的 color 来渲染，大于最大 stop 的部分会按最大 stop 的 color 来渲染。需要使用 addColorStop() 来指定渐变点，至少需要两个
      setLineWidth     设置线条的宽度。
      setLineCap       设置线条的端点样式.
      setLineJoin      设置线条的交点样式。
      setMiterLimit    设置最大斜接长度，斜接长度指的是在两条线交汇处内角和外角之间的距离。 当 setLineJoin() 为 miter 时才有效。超过最大倾斜长度的，连接处将以 lineJoin 为 bevel 来显示      
   */


    /**
     * onKeyboardShow   监听键盘弹起事件，并返回键盘高度。键盘高度可以在回调参数的data.height参数中取到，单位为px。需要在page中设置该回调。
     * onKeyboardHide   监听键盘收起事件。需要在page中设置该回调
       dd.hideKeyboard  隐藏键盘。
     */
    bindHideKeyboard(e) {
    if (e.detail.value === "123") {
      // 收起键盘
      dd.hideKeyboard();
    }
  },

  scrollTopChange(e) {
    this.setData({
      scrollTop: e.detail.value,
    });
  },
  onPageScroll({ scrollTop }) {
    console.log('onPageScroll', scrollTop);
  },



  /**
   * dd.createSelectorQuery  获取一个节点查询对象 SelectorQuery。基础库 1.4.0+ 支持
      SelectorQuery
        selectorQuery.select(selector)      选择当前第一个匹配选择器的节点，选择器支持 id 选择器以及 class 选择器。
        selectorQuery.selectAll(selector)   选择当前第一个匹配选择器的节点，选择器支持 id 选择器以及 class 选择器。
        selectorQuery.selectViewport()      选择窗口对象。
        selectorQuery.boundingClientRect()  将当前选择节点的位置信息放入查询结果，类似 dom 的 getBoundingClientRect， 
                                             返回对象包含 width/height/left/top/bottom/right。如果当前节点为窗口对象则只返回 width/height。
        selectorQuery.scrollOffset()        将当前选择节点的滚动信息放入查询结果，返回对象包含 scrollTop/scrollLeft。  
        selectorQuery.exec(callback)        将查询结果放入 callback 回调中。查询结果为数组，每项为一次查询的结果，如果当前是节点列表，则单次查询结果也为数组。
                                             注意 exec 必须放到 Page onReady 后调用
  */
 
 
 /**
  * dd.getLocation   获取用户当前的地理位置信息
  *     cacheTimeout    Number	  否	钉钉客户端经纬度定位缓存过期时间，单位秒。默认 30s。使用缓存会加快定位速度，缓存过期会重新定位。
        type            Number	  否	0：获取经纬度； 1：默认，获取经纬度和详细到区县级别的逆地理编码数据
        success Function	否	调用成功的回调函数
        {
                  longitude	String	经度
                  latitude	String	纬度
                  accuracy	String	精确度，单位 米
                  province	String	省份(type>0生效)
                  city	String	城市(type>0生效)
                  address	String	格式化地址，如：北京市朝阳区南磨房镇北京国家广告产业园区(type>0生效)
        }
        fail    Function	否	调用失败的回调函数 
        {
                  错误码描述   error	描述	解决方案
                  11	请确认定位相关权限已开启	提示用户打开定位权限
                  12	网络异常，请稍后再试	提示用户检查当前网络
                  13	定位失败，请稍后再试	
                  14	业务定位超时	提示用户再次尝试
        }
        complete	Function	否	调用结束的回调函数（调用成功、失败都会执行）
        
        
        

        
    dd.openLocation 使用内置地图查看位置{
        longitude	    String	  是	经度
        latitude	    String  	是	纬度
        address      	String	  是	地址的详细说明
        success	      Function	否	调用成功的回调函数
        fail	        Function	否	调用失败的回调函数
        complete	    Function	否	调用结束的回调函数（调用成功、失败都会执行）
  */

//这个拿手机调试
 location(){
   dd.getLocation({
     success:(e)=>{
       console.log(e),
       dd.alert({
          content:e
       }),
       this.setData({      
         loca:{
           longi:e.longitude,
           lati:e.latitude
         },
         testone:"测试test"
       })
     }
   })
 },


 
 /**  缓存
 dd.setStorage   将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的数据。
  *   注意：单条数据转换成字符串后，字符串长度最大200*1024。同一个钉钉用户，同一个小程序缓存总上限为10MB
  {
          key      	String        	是	缓存数据的key
          data	    Object/String  	是	要缓存的数据
          success	  Function       	否	调用成功的回调函数
          fail    	Function      	否	调用失败的回调函数
          complete	Function	      否	调用结束的回调函数（调用成功、失败都会执行）
    }
 dd.setStorageSync
    {
      同步将数据存储在本地缓存中指定的 key 中。同步数据IO操作可能会影响小程序流畅度，建议使用异步接口，或谨慎处理调用异常。
      key	  String	      是	缓存数据的key
      data	Object/String	是	要缓存的数据
    }
 dd.getStorage
    {
      获取缓存数据。
        key	      String  	是	缓存数据的key
        success	  Function	否	调用成功的回调函数
        {
            data	Object/String	  key对应的内容（不存在时返回 null）
        }
        fail    	Function	否	调用失败的回调函数
        complete	Function	否	调用结束的回调函数（调用成功、失败都会执行）   
    }
 dd.getStorageSync
    {
      同步获取缓存数据。同步数据IO操作可能会影响小程序流畅度，建议使用异步接口，或谨慎处理调用异常。
      {
        key	  String     	是	  缓存数据的key
        返回值
        data 	Object/String	  key对应的内容（不存在时返回 null）
      }
    }
 dd.removeStorage
    {
      删除缓存数据。
      key	      String	  是	缓存数据的key
      success	  Function	否	调用成功的回调函数
      fail	    Function	否	调用失败的回调函数
      complete	Function	否	调用结束的回调函数（调用成功、失败都会执行）
    }
 dd.removeStorageSync
    {
        同步删除缓存数据。同步数据IO操作可能会影响小程序流畅度，建议使用异步接口，或谨慎处理调用异常。
         返回值{
            key	String	是	缓存数据的key
        }
    }
  */


/**
 * dd.getSystemInfo
 * {
 *  success   Function	否	调用成功的回调函数
 *  {
 *    返回值 {
 *        model           String 手机型号
          pixelRatio      Number 设备像素比
          windowWidth     Number 窗口宽度
          windowHeight    Number 窗口高度
          language        String 钉钉设置的语言
          version         String 钉钉版本号
          storage         String 设备磁盘容量
          currentBattery  String 当前电量百分比
          system          String 系统版本
          platform        String 系统名：Android，iOS
          screenWidth     Number 屏幕宽度
          screenHeight    Number 屏幕高度
          brand           String 手机品牌
          fontSizeSetting Number 用户设置字体大小
          *      }
 *  }
    fail  	  Function	否	调用失败的回调函数
    complete	Function	否	调用结束的回调函数（调用成功、失败都会执行）
 * }
  dd.getSystemInfoSync   返回值同 getSystemInfo success 回调参数     (参数同上)
 */


/**
dd.getNetworkType  获取网络状态。
  {
    success	  Function	否	调用成功的回调函数
    {返回值
     networkAvailable	Boolean	网络是否可用
     networkType    	String	网络类型值 UNKNOWN / NOTREACHABLE / WIFI / 3G / 2G / 4G / WWAN
    }
    fail   	  Function	否	调用失败的回调函数
    complete	Function	否	调用结束的回调函数（调用成功、失败都会执行）
  }
 */

/**
 * 
 * dd.getClipboard   获取剪切板数据{      
      success	  Function	否	调用成功的回调函数
      { success返回值
          text	String	剪切板数据
      }
      fail	    Function	否	调用失败的回调函数
      complete	Function	否	调用结束的回调函数（调用成功、失败都会执行）
 * }
   dd.setClipboard 设置剪切板数据。{
       text	    String   	是	剪切板数据
       success	Function	否	调用成功的回调函数
       fail	    Function	否	调用失败的回调函数
       complete	Function	否	调用结束的回调函数（调用成功、失败都会执行）
   }
 */


/**
 * dd.vibrate  调用震动功能
 */


/**
 * dd.scan   调用扫一扫功能。
 *  type String 否 扫码样式(默认 qr)： qr，扫码框样式为二维码扫码框 ; bar，扫码样式为条形码扫码框
    success Function 否 调用成功的回调函数
    {
      success返回值 
      code String 扫码所得数据
      qrCode String 扫描二维码时返回二维码数据
      barCode String 扫描条形码时返回条形码数据
    }
    fail Function 否 调用失败的回调函数{
      错误码  error  描述
      10 用户取消
      11 操作失败
    }
    complete Function 否 调用结束的回调函数（调用成功、失败都会执行）
 */

/**
onShareAppMessage
在 Page 中定义 onShareAppMessage 函数，设置该页面的分享信息。
（1）onShareAppMessage 函数用来自定义分享内容。
（2）如果 Page 中定义了 onShareAppMessage 函数那么该页面右上角菜单中会显示“分享”按钮，否则不显示。
（3）用户点击分享按钮的时候会调用。
（4）此事件需要 return 一个 Object，用于自定义分享内容。
{
    title      	String	是	自定义分享标题
    desc	      String	否	自定义分享描述
    path	      String	是	自定义分享页面的路径，path中的自定义参数可在小程序生命周期的onLoad方法中获取（参数传递遵循http get的传参规则）
    imageUrl    String	否	自定义分享图片(只支持网络图片路径)
    fallbackUrl	String	否	可降级 H5 URL，仅适用于企业应用。
          当前钉钉桌面客户端不支持打开企业类小程序，配置此设置后，在桌面端访问此企业应用时，会打开fallbackUrl配置的H5 URL。
    desktopContainerType	String	否	当前只支持 "side_panel" , 表示在 桌面端使用 side_panel 钉钉容器打开 fallbackUrl 。
          需要和 fallbackUrl 配合使用 
}
 */
})