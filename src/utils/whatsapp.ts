const PHONE_NUMBER = "22995719898"; // sans le "+", format requis par wa.me

export const buildProductOrderLink = (productName: string): string => {
  const text = `Bonjour, je souhaite commander : ${productName}`;
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
};