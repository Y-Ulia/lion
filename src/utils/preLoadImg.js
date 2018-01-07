export default function(imgList， infoEle, cb) {
  var imgCount = 0, percent = "0%", imgAll = imgList.length;

  function load() {
    var len = imgList.length;
    for(var i = 0; i < len; i++) {
      var img = new image();
      img.src = imgList[i];
      if(img.complete) {
        loadImgCount();
      } else {
        img.onload = function() {
          if(imgCount < imgAll) {
            loadImgCount()
          }
        }
        img.onerror = function() {
          infoEle.innerHTML = "网络太慢了~~";
        }
      }
    }
  }

  function loadImgCount() {
    imgCount++;
    percent = Math.floor(imgCount * 100 / imgAll);
    infoEle.style.width = percent+'%';

    if (imgCount == imgAll) {
      cb();
    }
  }

  return {
    load: load
  }
}