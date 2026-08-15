const PHONE_NUMBER = "2290166414894"; // sans le "+", format requis par wa.me

export const buildProductOrderLink = (productName: string): string => {
  const text = `Bonjour, je souhaite commander : ${productName}`;
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
};