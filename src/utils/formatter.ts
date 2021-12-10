export function slugify(raw: string) {
	return raw.toLowerCase().replace(/ /g, '-');
}

export function stripSymbols(raw: string) {
	return raw.replace(/[^\w\s]/gi, '');
}

export default function cleanSlug(raw: string) {
	return slugify(stripSymbols(raw));
}
