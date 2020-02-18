// Required script to show new articles on the sidebar

var fs = require('fs');

module.exports = function (path) {
  var files = fs.readdirSync(path);
  var list = [""];
  for (var i in files) {
    var filename = files[i].split('.').slice(0, -1).join('.');
    if (filename.toLowerCase() !== "readme") list.push(filename);
  }
  console.log(`${path}: `, list);
  return list;
}