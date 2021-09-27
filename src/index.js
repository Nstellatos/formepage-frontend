document.addEventListener('DOMContentLoaded', () => {
	CategoryService.fetchCategories();
	VideoService.fetchVideos();
	videoForm().addEventListener('submit', VideoService.handleSubmit);
});

// const handleClick = (e) => {
// 	if (ul().children.length < 1) {
// 		CategoryService.fetchCategories();
// 	} else {
// 		ul().innerHTML = '';
// 	}
// };

/*

const displayForm = () => {
	if (!videoForm()) {
		fetchCategoriesForSelect();
		list.insertAdjacentHTML(
			'afterend',
			`
        <form id="video-form">
        <label for="video_url">Paste your link here:</label><br>
        <input type="text" name="video_url" id="video_url"><br>
        <label for="video-category">Category:</label>
        <select id="category_id">
        </select>
        <input type="submit" value="add video"><br>
        </form>
        `,
		);
		videoForm().addEventListener('submit', VideoService.handleSubmit);
	} else {
		videoForm().remove();
	}
};

*/
