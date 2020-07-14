var webmeterFollowMouse = true;
var webmeterMotionBlur = true;
var webmeterOrbit = false;
var webmeterNewParticle = true;
var webmeterFxaa = false;
var webmeterMotionBlurMaxDistance = 120;
var webmeterMotionMultiplier = 7;
var webmeterMotionQuality = 'best';
var webmeterSpeed = 1;
var webmeterDieSpeed = 0.015;
var webmeterRadius = 0.6;
var webmeterCurlSize = 0.02;
var webmeterAttraction = 1;
var webmeterAmount = '131k';
var webmeterShadow = 0.42;
var webmeterBaseColor = '#FFFFFF';
var webmeterFadeColor = '#040025';
var webmeterBackgroundColor = '#d1d1d1';
var webmeterBloom = true;
var webmeterBloomRadius = 1.3;
var webmeterBloomAmount = 0.3;



params = getAllUrlParams();

if (params.followmouse) webmeterFollowMouse = (params.followmouse === "true");
if (params.motionblur) webmeterMotionBlur = (params.motionblur === "true");
if (params.orbit) webmeterOrbit = (params.orbit === "true");
if (params.newParticle) webmeterNewParticle = (params.newParticle === "true");
if (params.fxaa) webmeterFxaa = (params.fxaa === "true");
if (params.motionblurmaxdistance) webmeterMotionBlurMaxDistance = params.motionblurmaxdistance;
if (params.motionmultiplier) webmeterMotionMultiplier = params.motionmultiplier;
if (params.motionquality) webmeterMotionQuality = params.motionquality;
if (params.speed) webmeterSpeed = params.speed;
if (params.diespeed) webmeterDieSpeed = params.diespeed;
if (params.radius) webmeterRadius = params.radius;
if (params.curlsize) webmeterCurlSize = params.curlsize;
if (params.attraction) webmeterAttraction = params.attraction;
if (params.amount) webmeterAmount = params.amount;
if (params.shadow) webmeterShadow = params.shadow;
if (params.backgroundcolor) webmeterBackgroundColor = '#' + params.backgroundcolor;
if (params.basecolor) webmeterBaseColor = '#' + params.basecolor;
if (params.fadecolor) webmeterFadeColor = '#' + params.fadecolor;
if (params.bloom) webmeterBloom = (params.bloom === "true");
if (params.bloomradius) webmeterBloomRadius = (params.bloomradius === "true");
if (params.bloomamount) webmeterBloomAmount = params.bloomamount;

console.log(params.speed);

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


guiInterface("bool","follow mouse", webmeterFollowMouse);

guiInterface("bool","Orbit", webmeterOrbit);

guiInterface("bool","new particle", webmeterNewParticle);

guiInterface("text","speed", webmeterSpeed);

guiInterface("text","dieSpeed", webmeterDieSpeed);

guiInterface("text","radius", webmeterRadius);

guiInterface("text","curlSize", webmeterCurlSize);

guiInterface("text","attraction", webmeterAttraction);

guiInterface("text","shadow", webmeterShadow);

guiInterface("color","base Color", webmeterBaseColor);

guiInterface("color","fade Color", webmeterFadeColor);

guiInterface("color","background Color", webmeterBackgroundColor);

guiInterface("combo","amount", webmeterAmount);

guiInterface("bool","fxaa", webmeterFxaa);

guiInterface("bool","motionBlur", webmeterMotionBlur);

guiInterface("bool","bloom", webmeterBloom);