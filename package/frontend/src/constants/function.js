import $ from "jquery";

export const setSession = (id, value) => {
  sessionStorage.setItem(id, JSON.stringify(value));
};
export const getSession = (id) => {
  return JSON.parse(sessionStorage.getItem(id));
};
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 1) {
    $(".My-custom").addClass("scroll");
  } else {
    if ($(window).scrollTop() < 1) {
      $(".My-custom").removeClass("scroll");
    }
  }
});
