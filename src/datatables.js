$(document).ready(function () {
  $("#example").DataTable({
    language: {
      searchBuilder: {
        button: "Filter",
      },
    },
    buttons: ["searchBuilder"],
    dom: "Bfrtip",
  });
});
