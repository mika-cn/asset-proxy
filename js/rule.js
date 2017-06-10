// get from https://lug.ustc.edu.cn/wiki/mirrors/help/revproxy

// match rule:  reqHosts[i] --> cdnHosts[i]
var reqHosts = [
  'registry-1.docker.io',
  'packages.elastic.co',
  'ppa.launchpad.net',
  'downloads.lede-project.org',
  'downloads.openwrt.org',
  'registry.npmjs.org',
  'www.npmjs.com',
  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'ajax.googleapis.com',
  'themes.googleusercontent.com',
  'secure.gravatar.com'
];

var cdnHosts = [
  'docker.mirrors.ustc.edu.cn',
  'elastic.proxy.ustclug.org',
  'launchpad.proxy.ustclug.org',
  'lede.proxy.ustclug.org',
  'openwrt.proxy.ustclug.org',
  'npmreg.proxy.ustclug.org',
  'npm.proxy.ustclug.org',
  'fonts-gstatic.proxy.ustclug.org',
  'fonts.proxy.ustclug.org',
  'ajax.proxy.ustclug.org',
  'google-themes.proxy.ustclug.org',
  'gravatar.proxy.ustclug.org'
];

var regexRules = {
  'archive.cloudera.com\/cdh5\/' : 'cloudera.proxy.ustclug.org'
};
// If you have a local asset cache server, feel free to add regex rule
// eg:
// {
//   'http.*cdn.*'  : 'http://localhost:2048',
//   'https.*cdn.*' : 'https://localhost:8080'
// }

console.log('Rules defined!')
