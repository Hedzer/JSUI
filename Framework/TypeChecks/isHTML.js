var htmlRegex = /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/;
export default function isHTML(u) {
	return htmlRegex.test(u);
}