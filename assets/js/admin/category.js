baseUrl = "https://68c7c5895d8d9f514732feeb.mockapi.io/api/v1/"; // for test 
apiSearch = baseUrl + "categories";

function fetchCategories() {
  $.ajax({
    url: apiSearch,
    method: "GET",
    dataType: "json",
    success: function (data) {
      let rows = "";
      data.forEach(function (category) {
        rows += `<tr>
                    <td>${category.id}</td>
                    <td>${category.name}</td>
                        <td>
                            <button class="btn btn-lg"><i class="ti ti-edit"></i></button>
                            <button class="btn btn-lg"><i class="ti ti-archive"></i></button>
                        </td>
                </tr>`;
      });
      $("#category-table tbody").html(rows);
    },
    error: function (xhr, status, error) {
      console.error("Failed to fetch categories:", error);
    },
  });
}

$(document).ready(function () {
  fetchCategories();
});
