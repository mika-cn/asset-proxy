// get from https://lug.ustc.edu.cn/wiki/mirrors/help/revproxy
// will match by index
var reqHosts = [
  'registry-1.docker.io',
  'packages.elastic.co',
  'ppa.launchpad.net',
  'archive.cloudera.com/cdh5/',
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
  'cloudera.proxy.ustclug.org/cdh5/',
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

console.log('Host defined!')
