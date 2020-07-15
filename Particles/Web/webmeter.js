var webmeterColor = "#030311";
var webmeterBackground = "#000000";
var webmeterAlpha = 0.7;
var webmeterGravity = 3;
var webmeterParticles = 1024;

params = getAllUrlParams();

if (params.background) webmeterBackground = '#' + params.background;
if (params.color) webmeterColor = '#' + params.color;
if (params.alpha) webmeterAlpha = params.alpha;
if (params.gravity) webmeterGravity = params.gravity;

function getAllUrlParams(url) {
    var hash = window.location.hash.substr(1);

    return hash.split('&').reduce(function (result, item) {
        var parts = item.split('=');
        result[parts[0]] = parts[1];
        return result;
    }, {});
}

function guiInterface(type,target,val){
    const evt = document.createEvent("HTMLEvents");
    for(var el of document.querySelectorAll('.property-name')){
      if(el.innerText == target){
        if(type!=="combo")
        {
          const input = el.nextElementSibling.querySelector('input');
          if(type=="text"){
            input.value=val;
            evt.initEvent("change", false, true);
            input.dispatchEvent(evt);    
          }
          else if(type=="bool"){
            if(input.checked!=val){
              evt.initEvent("change", false, true);
              input.dispatchEvent(evt);    
            }
          }
          else{
            input.value=val;
            evt.initEvent("blur", false, true);
            input.dispatchEvent(evt);
          }
        }
        else if(type==="combo"){
          const input = el.nextElementSibling.querySelector('select');
          if(input.value!=val){
            input.value=val;
            evt.initEvent("change", false, true);
            input.dispatchEvent(evt);
          }
        }
      }
    }
  }