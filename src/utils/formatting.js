export function slugify(str) {
    return str
        .toLowerCase()
        .trim()
        .replace(/&/g, 'and')                // Replace & with 'and'
        .replace(/,/g, '')                   // Remove commas
        .replace(/[^a-z0-9]+/g, '-')         // Replace non-alphanumeric with '-'
        .replace(/^-+|-+$/g, '');            // Trim leading/trailing '-'
}

export function unslugify(slug) {
    return slug
        .split('-')
        .map(word => {
            if (word === 'and') return '&';    // Convert 'and' back to &
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(' ');
}

export function extractName(str) {
    return str
        .split(" id:")[0]               // remove " id:..."
        .replace(/-\d+$/, "")           // remove trailing "-number"
        .split("-")                     // split by dashes
        .slice(0, 2)                    // keep only first 2 words (e.g., "reverse tuck")
        .join(" ")                      // join with space
        .replace(/\b\w/g, c => c.toUpperCase()); // capitalize first letters
}
