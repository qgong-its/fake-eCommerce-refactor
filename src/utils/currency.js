export const formatPrice = (price, locale = 'de-DE', currency = 'EUR') =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(price);
