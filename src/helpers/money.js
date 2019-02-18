export function formatMoney(number) {
  return `$ ${number.toLocaleString('es-CL')}`;
}

export function formatMoneyWS(val) {
  const value = val.toString().split('.').join("");
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
