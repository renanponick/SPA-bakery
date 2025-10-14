export const formatPrice = (price) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
};

export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80; // Height of fixed navbar
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

export const generateWhatsAppMessage = (items, total) => {
  let message = 'Olá! Quero fazer o seguinte pedido:\n\n';
  
  items.forEach((item) => {
    message += `${item.quantity}x ${item.name} - ${formatPrice(item.price * item.quantity)}\n`;
  });
  
  message += `\n*Total: ${formatPrice(total)}*`;
  
  return encodeURIComponent(message);
};

