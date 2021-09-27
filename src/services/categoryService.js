class CategoryService {
	static baseUrl = `${baseUrl}/categories`;

	static fetchCategories() {
		fetch(this.baseUrl)
			.then((resp) => resp.json())
			.then((json) =>
				json.forEach((catObj) => {
					let cat = Category.findOrCreateBy(catObj);
					cat.addToDropDown();
					cat.render();
				}),
			)
			.catch(this.handleError);
	}

	static handleError(error) {
		console.log(error);
	}
}
