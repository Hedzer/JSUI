var htmlRegex = /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/;
export function isHTML(u) {
	return htmlRegex.test(u);
}