var headTag = document.head || document.getElementsByTagName('head')[0];
var siteDomain = '//spares-sale.dev.bstd.ru'; // разработка dev
// var siteDomain = '//'; // production

function addFiles() {
  var arrayCss = [
    siteDomain + '/static/css/main.51c0ee74.css'
  ];

  for(var c = 0; c < arrayCss.length; c++) {
    var link = document.createElement('link');

    link.setAttribute('href', arrayCss[c]);
    link.setAttribute('rel', 'stylesheet');

    headTag.appendChild(link);
  }

  var arrayJs = [
    siteDomain + '/static/js/main.5fac83f6.js'
  ];

  for(var j = 0; j < arrayJs.length; j++) {
    var script = document.createElement('script');

    script.setAttribute('src', arrayJs[j]);

    headTag.appendChild(script);
  }

  //
  pageLoad.init();
}

var pageLoad = {
  init : function(){
    var _this = this;

    $.ajax({
      url : siteDomain + '/index.html',
      dataType : 'html',
      success: function(data){
        $('#html52 .spares-container').html(data);
        _this.initScripts();
      }
    });

  },

  initScripts : function(){
    if(typeof window['blinds'] == 'undefined'){
      setTimeout(pageLoad.initScripts, 50);
      return;
    }

    setTimeout(function () {
      blinds.init();
    }, 1000);
  }
};


document.addEventListener("DOMContentLoaded", function(event) {
  addFiles();
});