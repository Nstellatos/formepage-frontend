class Video {
	static all = [];
	constructor(data) {
		this.data = data;
		this.constructor.all.push(this);
		console.log(this);
	}
}
