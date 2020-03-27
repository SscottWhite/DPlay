Page({

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
  }
})