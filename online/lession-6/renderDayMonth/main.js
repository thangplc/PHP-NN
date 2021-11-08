// Hiển hị select tháng
content = "<option  selected>--Chọn--</option>";
for (var i = 1; i <= 12; i++) {
  content += "<option value='" + i + "'>" + i + "</option>";
}
document.getElementById("month").innerHTML = content;

// Hiển hị select ngày
function renderSelect(d) {
  content = "<option  selected>--Chọn--</option>";
  for (var i = 1; i <= d; i++) {
    content += " <option >" + i + "</option>";
  }
  return content;
}
// console.log(renderSelect(31));
// Hiển thị select ngày theo tháng
function renderDay(m) {
  content = "";
  switch (m) {
    case "1":
    case "3":
    case "5":
    case "7":
    case "8":
    case "10":
    case "12":
      content += renderSelect(31);
      break;
    case "4":
    case "6":
    case "9":
    case "11":
      content += renderSelect(30);
      break;
    case "2":
      // if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0)
      //   dayCount = 29;
      // else dayCount = 28;
      content += renderSelect(28);
      break;
  }
  document.getElementById("day").innerHTML = content;
}
