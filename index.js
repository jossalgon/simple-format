
String.prototype.format = function() {
  var formatted = this;
  let replacements = arguments[0];
  let lang = arguments[1];
  for (let key in replacements) {
    if (typeof replacements[key] === 'string' || replacements[key] instanceof String) {
      formatted = formatted.replace(new RegExp("{{" + key + "}}", "g"), replacements[key]);
    } else {
      let replacement = (lang && replacements[key][lang]) ? replacements[key][lang] : replacements[key];
      formatted = formatted.replace(new RegExp('{{' + key + '}}', 'g'), replacement);
    }
  }
  return formatted;
}
