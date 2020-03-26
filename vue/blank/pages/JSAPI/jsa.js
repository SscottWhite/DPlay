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
  }
  
})