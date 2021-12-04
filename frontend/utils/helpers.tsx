export const formatPrice = (price: string | number) => {
  let amount = typeof price != "number" ? parseFloat(price) : price;
  var formatter = new Intl.NumberFormat("th-TH", {
    style: "currency",
    currency: "THB",
  });

  return formatter.format(amount);
};

export const formatDate = (datetxt: string) => {
  let d = new Date(datetxt);
  let day = d.getDate();
  let month = d.getMonth() + 1;
  let year = d.getFullYear();

  const dt = `${day < 10 ? "0" + day : day}-${
    month < 10 ? "0" + month : month
  }-${year}`;

  return dt;
};
