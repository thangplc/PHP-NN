function checkSearch() {
  if (document.getElementById("tukhoa").value === "") {
    alert("Bạn chưa nhập từ khóa tìm kiếm");
    document.getElementById("tukhoa").focus();
    return false;
  }
  return true;
}
