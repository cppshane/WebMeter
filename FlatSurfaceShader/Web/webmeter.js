var webmeterLightAmbient = "#880066";
var webmeterLightDiffuse = "#FF8800";
var webmeterMeshAmbient = "#555555";
var webmeterMeshDiffuse = "#FFFFFF";
var webmeterCount = 2;
var webmeterZOffset = 100;
var webmeterWidth = 1.2;
var webmeterHeight = 1.2;
var webmeterDepth = 10;
var webmeterSegments = 16;
var webmeterSlices = 8;
var webmeterXRange = 0.8;
var webmeterYRange = 0.1;
var webmeterSpeed = 0.002;


params = getAllUrlParams();

if (params.lightambient) webmeterLightAmbient = '#' + params.lightambient;
if (params.lightdiffuse) webmeterLightDiffuse = '#' + params.lightdiffuse;
if (params.meshambient) webmeterMeshAmbient = '#' + params.meshambient;
if (params.meshdiffuse) webmeterMeshDiffuse = '#' + params.meshdiffuse;
if (params.count) webmeterCount = params.count;
if (params.zoffset) webmeterZOffset = params.zoffset;
if (params.width) webmeterWidth = params.width;
if (params.height) webmeterHeight = params.height;
if (params.depth) webmeterDepth = params.depth;
if (params.segments) webmeterSegments = params.segments;
if (params.slices) webmeterSlices = params.slices;
if (params.xrange) webmeterXRange = params.xrange;
if (params.yrange) webmeterYRange = params.yrange;
if (params.speed) webmeterSpeed = params.speed;

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

guiInterface("color","lightAmbient", webmeterLightAmbient);

guiInterface("color","lightDiffuse", webmeterLightDiffuse);

guiInterface("text","count", webmeterCount);

guiInterface("text","zOffset", webmeterZOffset);

guiInterface("color","meshAmbient", webmeterMeshAmbient);

guiInterface("color","meshDiffuse", webmeterMeshDiffuse);

guiInterface("text","width", webmeterWidth);

guiInterface("text","height", webmeterHeight);

guiInterface("text","depth", webmeterDepth);

guiInterface("text","segments", webmeterSegments);

guiInterface("text","slices", webmeterSlices);

guiInterface("text","xRange", webmeterXRange);

guiInterface("text","yRange", webmeterYRange);

guiInterface("text","speed", webmeterSpeed);