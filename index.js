
String.prototype.format = function() {
    var formatted = this;
	let replacements = arguments[0]
    for(let key in replacements ) {
        formatted = formatted.replace(new RegExp("{{" + key + "}}", "g"), replacements[key]);
    }
    return formatted;
};
