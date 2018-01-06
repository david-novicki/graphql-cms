class Text {
	constructor() {
		this.type = 'String';
	}
	getMongooseType() {
		return this.type;
	}
}
module.exports = Text;