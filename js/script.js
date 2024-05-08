document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("open-resume").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "../files/test.pdf";
    link.target = "_blank";
    link.click();
    console.log("Opening resume PDF");
  });
});
