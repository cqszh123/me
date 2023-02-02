//清空cookie
function clearCookie(cNameArr) {
    var newkeys = []
    var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    cNameArr.forEach(name => {
      newkeys = newkeys.concat(keys.filter((key)=> key.includes(name)))
    });
    console.log('keys: ', newkeys);
    if (Array.isArray(newkeys) && newkeys.length) {
        for (var i = keys.length; i--;) {
          document.cookie = newkeys[i] + '=0;path=/;expires=' + new Date(0).toUTCString();//清除当前域名下的
          document.cookie = newkeys[i] + '=0;path=/;domain=' + document.domain + ';expires=' + new Date(0).toUTCString();//清除当前域名下的
          document.cookie = newkeys[i] + '=0;path=/;domain=kevis.com;expires=' + new Date(0).toUTCString();//清除一级域名下的或指定的
        }
    }
    console.log('已清除');
  }
  //打开网站窗口
  function clickHandler(url) {
      const newWindow = window.open(
        url,
        "_blank",
        "left=200,top=500,height=500,width=800"
      );
      setTimeout(function () {
        if (newWindow) {
          newWindow.close(); // 得判断是否成功打开，然后再在 3s 后关闭子窗口
        }
      }, 3000);
  }
  //执行函数
  function executeFun(url, timesLimit, cNameArr) {
    let cunt = 0
    let timer = setInterval(()=> {
        cunt++
        clearCookie(cNameArr)
        clickHandler(url)
        if(cunt >= timesLimit) {
            clearInterval(timer)
        }
    },5000)
  }
  executeFun('https://zhaopeng.me', 10, ['_ga', '_gid'])