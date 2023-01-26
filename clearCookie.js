//清空cookie
function clearCookie() {
    var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    if (keys) {
        for (var i = keys.length; i--;) {
            document.cookie = keys[i] + '=0;path=/;expires=' + new Date(0).toUTCString();
            document.cookie = keys[i] + '=0;path=/;domain=' + document.domain + ';expires=' + new Date(0).toUTCString();
            document.cookie = keys[i] + '=0;path=/;domain=kevis.com;expires=' + new Date(0).toUTCString();
        }
    }
    console.log('已清除');  
}

function closePage(pageUrl) {
    const newWindow = window.open(
        pageUrl,
      "_blank",
      "left=100,top=100,height=500,width=800"
    );
    setTimeout(function () {
      if (newWindow) {
        newWindow.close(); 
      }
    }, 3000); 
}

function controllerFun(ulr, userNum, time) {
    let count = 0;
    let timer = setInterval(() => {
        count++;
        clearCookie();
        closePage(ulr);
        if(count >= userNum) {
            clearInterval(timer);
        }
    }, time);
}

controllerFun('https://cqszh123.github.io/me/renumberMe.html?_source=YM', 10, 5000);
