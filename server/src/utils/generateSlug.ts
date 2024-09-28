export function generateSlug(title: string) {
    return title.toLowerCase().trim().replace(/[^\p{L}0-9 ]/gu, '').replace(/\s+/g, '-').replace(/-+/g, '-')
}