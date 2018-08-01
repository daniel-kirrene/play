function Rats(names) {
	this.names = names;
	return {
		namesBeginningWith: (letter) => names.filter(name => name.startsWith(letter))	
	}
};

// Rats.withNamesBeginningWith = (letter) => rats.filter(rat -> rat.startsWith(letter));	

// Rats.withNamesBeginningWith = (letter) => rats.filter(rat -> rat.startsWith(letter));

module.exports = {
    Rats: Rats
}