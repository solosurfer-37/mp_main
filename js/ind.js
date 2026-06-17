document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".read-more-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {

      const showcaseText = this.closest(".showcase-text");
      const moreText = showcaseText.querySelector(".more-text");
      const isOpen = moreText.getAttribute("data-open") === "true";

      if (isOpen) {
        moreText.style.maxHeight = "0px";
        moreText.style.opacity = "0";
        moreText.setAttribute("data-open", "false");
        this.textContent = "Read More";
      } else {
        moreText.style.maxHeight = moreText.scrollHeight + "px";
        moreText.style.opacity = "1";
        moreText.setAttribute("data-open", "true");
        this.textContent = "Read Less";
      }

    });
  });
});