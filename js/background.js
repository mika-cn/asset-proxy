/*
 * reqHosts and cdnHosts are defined in rule.js
 */


console.log('background script...');

function proxyAssets(reqMsg){
  var url = new URL(reqMsg.url);
  var idx = reqHosts.indexOf(url.host);
  if(idx > -1){
    url.host = cdnHosts[idx];
    return {redirectUrl: url.toString()}
  }else{
    return {calcel: false};
  }
}

var assetFilter = {
  urls: ["<all_urls>"],
  types: [
    "stylesheet",
    "script",
    "font"
  ]
};

browser.webRequest.onBeforeRequest.addListener(
  proxyAssets,
  assetFilter,
  ["blocking"]
);

