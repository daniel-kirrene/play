function Rats(names) {
	this.names = names;
	return {
		namesBeginningWith: (letter) => names.filter(name => name.startsWith(letter))	
	}
};

module.exports = {
    Rats: Rats
}