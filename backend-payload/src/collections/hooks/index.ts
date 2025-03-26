export const generateSlug = (text: string): string => {
  const lowerCaseText = text.toLowerCase();
  const slug = lowerCaseText
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
  return slug;
};
