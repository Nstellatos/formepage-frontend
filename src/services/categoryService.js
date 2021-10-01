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
	static handleSubmit(e) {
		e.preventDefault();
		const data = {
			name: catName().value,
			category_id: videoCategory().value,
		};
		fetch(CategoryService.baseUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((resp) => resp.json())
			.then((json) => {
				let cat = new Category(json);

				categoryForm().reset();
				cat.addToDropDown();

				cat.render();
			});
	}

	static handleError(error) {
		console.log(error);
	}
}
