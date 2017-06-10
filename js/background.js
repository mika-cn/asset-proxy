
console.log('background script...');

function getProxyHost(url){
  if(cdnHosts.indexOf(url.host) > -1){
    return null;
  }
  var idx = reqHosts.indexOf(url.host)
  if(idx > -1){
    return cdnHosts[idx]
  }else{
    var host = null;
    for(var regex in regexRules){
      if(new RegExp(regex).test(url.href)){
        host = regexRules[regex];
      }
    }
    return host;
  }
}

function proxyAssets(reqMsg){
  var url = new URL(reqMsg.url);
  var proxyHost = getProxyHost(url)
  if(proxyHost){
    url.host = proxyHost;
    return {redirectUrl: url.href};
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

