const routes = (type) => {
  if (type == "login") {
    return (window.location = "login.html");
  } else if (type == "register") {
    return (window.location = "register.html");
  } else if (type == "register_address") {
    return (window.location = "register_address.html");
  } else if (type == "success_register") {
    return (window.location = "success_register.html");
  } else if (type == "home") {
    return (window.location = "home.html");
  } else if (type == "detail_order") {
    return (window.location = "detail_order.html");
  } else if (type == "bayar") {
    return (window.location = "payment.html");
  } else if (type == "success_order") {
    return (window.location = "success_order.html");
  } else if (type == "order_fix") {
    return (window.location = "order_fix.html");
  } else {
    return (window.location = "404.html");
  }
};
