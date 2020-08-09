/** Format the text by changing the first character to uppercase and replacing every _ by a space.*/
export const formatText = (text: string) => text.charAt(0).toUpperCase() + text.replace(/_/gi, ' ').slice(1);
