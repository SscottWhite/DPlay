Page({
/*
  使用dd.httpRequest发起网络请求，同时需要开发者在开发者后台设置应用访问安全域名。
  开发者可以调用类似dd.chooseImage选择本地图片.
  通过dd.uploadFile上传本地资源到服务器。
  通过dd.downloadFile下载网络图片.
  通过dd.previewImage进行预览。
*/  
/*
dd.request的参数  :
url       String    是    目标服务器url
headers   Object    否    设置请求的 HTTP 头，默认 {'Content-Type': 'application/x-www-form-urlencoded'}
method    String    否    默认GET，目前支持GET，POST
data      Object    否    请求参数
timeout   Number    否    超时时间，单位ms，默认30000
dataType  String    否    期望返回的数据格式，默认json，支持json，text，base64
success   Function  否    调用成功的回调函数
     success 返回值
        data     String   响应数据，格式取决于请求时的 dataType 参数
        status   Number   响应码
        headers  Object   响应头
fail      Function  否    调用失败的回调函数
complete  Function  否    调用结束的回调函数（调用成功、失败都会执行）
*/
//注意
// Content-Type为application/x-www-form-urlencoded即默认的接口请求方式 (onReq)
// (需特别指定)) Content-Type为application/json时，data参数只支持json字符串，用户需要手动调用JSON.stringify进行序列化
  onReq(){
     dd.httpRequest({
       url:"https://httpbin.org/post",
       method:'POST',
       headers:{
         "Content-Type": "application/json"
       },
       data:JSON.stringify({
         from:'DD',
         production:'DTalk',
       }),
       /*
       data:{
         from:'DD',
         production:'DTalk',
       },
       */
       dataType:'json',
       success: (res) => {
       //  dd.alert({content:JSON.stringify(res)});
          console.log(JSON.stringify(res));
       } ,
       fail:function(res){
         dd.alert({content:JSON.stringify(res)});
       },
      // complete:function(res){
      //   dd.alert({title:'complete'});
      // }
     })
  },

/*
url       String    是   开发者服务器地址
filePath  String    是   要上传文件资源的本地定位符
fileName  String    是   文件名，即对应的 key, 开发者在服务器端通过这个 key 可以获取到文件二进制内容
fileType  String    否   文件类型
header    Object    否   HTTP 请求 Header
formData  Object    否   HTTP 请求中其他额外的 form 数据
success   Function  否   调用成功的回调函数
     success 返回值
        data        String   服务器返回的数据
        statusCode  String   HTTP 状态码
        header      Object   服务器返回的 header
fail      Function  否   调用失败的回调函数
complete  Function  否   调用结束的回调函数（调用成功、失败都会执行）
*/
  upload(){
    dd.uploadFile({
        url:"",
        fileType: 'image',
        fileName: 'file',
        filePath: '...',
        success: (res) => {
           dd.alert({
             content: '上传成功'
           });
        },
    })
  },
/*
url      String    是  下载文件地址
header   Object    否  HTTP 请求 Header
success  Function  否  调用成功的回调函数
      success 返回值
        filePath   String    文件临时存放的位置
fail     Function  否  调用失败的回调函数
complete Function  否  调用结束的回调函数（调用成功、失败都会执行）
*/
/*
  dd.previewImage
    urls:[]预览路径
*/
  download(){
    dd.downloadFile({
        url:'https://img.alicdn.com/tfs/TB1x669SXXXXXbdaFXXXXXXXXXX-520-280.jpg',
        success({ filePath }){         
          dd.previewImage({           
            urls:[filePath],
          });
        },
        fail(res){
          dd.alert({
            content:res.errorMessage || res.error,
          });
        },
    })
  },
/*
dd.connectSocket
dd.onSocketOpen
dd.offSocketOpen
dd.onSocketError
dd.offSocketError
dd.sendSocketMessage
dd.onSocketMessage
dd.offSocketMessage
dd.closeSocket
dd.onSocketClose
dd.offSocketClose
 */

/**
dd.chooseImage   dd.previewImage   dd.saveImage   dd.compressImage   dd.getImageInfo
*/
//   dd.chooseImage
/**
count	      Number   	  否	最大可选照片数，默认1张
sourceType	String Array   	否	相册选取或者拍照，默认 ['camera','album']
success	    Function	否	调用成功的回调函数
fail	      Function	否	调用失败的回调函数
complete	  Function	否	调用结束的回调函数（调用成功、失败都会执行）

success 返回值
  filePaths 	String  Array	 图片文件描述
fail返回值
  error:11	描述: 用户取消操作
 */
  chooseImage(){
    dd.chooseImage({
      count:2,
      success : (res) => {
         dd.alert({
           title:"chooseImage",
           content:JSON.stringify(res.filePath),
         }),
         //获取信息, getImageInfo的一般用法
         dd.getImageInfo({
          src:res.filePaths[0],
          success:(res)=>{
            console.log(JSON.stringify(res))
          }
          //相对用法
          /*src:'image/api.png',
          success:(res)=>{
             console.log(JSON.stringify(res))
          }*/
        })
      }
    });
  },
//  dd.previewImage
/**
urls	    Array   	是	要预览的图片链接列表
current	  Number  	否	当前显示图片索引，默认 0
success	  Function	否	调用成功的回调函数
fail	    Function	否	调用失败的回调函数
complete	Function	否	调用结束的回调函数（调用成功、失败都会执行）
 */
  previewImage(){
    dd.previewImage({
      current:2,
      urls:[
        'https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg',
        'https://img.alicdn.com/tps/TB1pfG4IFXXXXc6XXXXXXXXXXXX.jpg',
        'https://img.alicdn.com/tps/TB1h9xxIFXXXXbKXXXXXXXXXXXX.jpg'
      ]
    });
  },

// save
/**
url	      String  	是	要保存的图片地址
success	  Function	否	调用成功的回调函数
fail	    Function	否	调用失败的回调函数
complete	Function	否	调用结束的回调函数（调用成功、失败都会执行）

error
  2	    参数无效，没有传 url 参数
  15  	没有开启相册权限(ios only)
  16	  手机相册存储空间不足(ios only)
  17	  保存图片过程中的其他错误
*/
  saveImage(){
    dd.saveImage({
      url :'https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg',
      success: () => {
        dd.alert({
          title:"保存完毕!"
        })
      }
    });
  },

//expressImage
/**
filePaths	    String Array  	是	要压缩的图片地址数组
compressLevel	Number        	否	压缩级别，支持 0 ~ 4 的整数，默认 4。详见「compressLevel表」
success     	Function       	否	调用成功的回调函数
fail	        Function	      否	调用失败的回调函数
complete      Function	      否	调用结束的回调函数（调用成功、失败都会执行）

success返回值
  filePaths	String Array	压缩后的路径数组

compressLevel	说明 {0	低质量;1	中等质量;2	高质量;3	不压缩;4	根据网络适应}
 */
  expressImage(){
    dd.expressImage({
       filePaths:['https://resource/apmlcc0ed184daffc5a0d8da86b2f518cf7b.image'],
       compressLevel : 2,
       success : (res) =>{
         console.log(JSON.stringify(res))
       }
    })
  },

//imageInfo
/**
src      String    否  图片路径，目前支持：网络图片路径、相对路径
success  Function  否  调用成功的回调函数
fail     Function  否  调用失败的回调函数
complete Function  否  调用结束的回调函数（调用成功、失败都会执行）

success 返回值
  width  	Number	图片宽度（单位px）
  height	Number	图片高度（单位px）
  path  	String	图片本地路径
 */
  imageInfo(){
    dd.getImageInfo({
        src:'https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg',
        success:(res)=>{
          console.log(JSON.stringify(res))
        }
    })
  }
})