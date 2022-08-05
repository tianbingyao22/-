export const ImgError = {
  inserted(el, bind) {
    el.onerror = function () {
      el.src = bind.value;
    };
  },
};

