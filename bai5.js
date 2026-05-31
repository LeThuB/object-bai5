console.log("Danh sách sinh viên");

let danhSach = [
    {
    name: "Hồng",
    tuoi: 18,
    id : 1},
]
while(true){
    let userInput = Number(prompt ("mời bạn nhập số 1 để thêm sinh viên,2 để hiển thị danh sách,3 để xóa sinh viên,4 để kết thúc chương trình"));

if(userInput === 1){
//thêm mới
let name = prompt("mời bạn nhập tên ");
let tuoi = prompt(`mời bạn nhập tuổi ${name} `);
let contact = {
    id:Math.random(),
    name: name,
    tuoi: tuoi,
};
danhSach.push(contact);
displaydanhSach();

}else if(userInput === 2){
//hiển thị danh sách
displaydanhSach();

}
else if (userInput === 3){
// xóa 
let nhap = prompt("mời bạn nhập tên contact muốn xóa");
let index = danhSach.findIndex(function(el,i) {
    return el.name = nhap;
})
if (index === -1 ){
    console.log("không tìm thấy contact");
}
else{
    danhSach.splice(index,1);
}
displaydanhSach();
}
else if (userInput === 4){
//kết thúc
break;
}
else{
    console.log("chỉ thị không chính xác")
}
}

function displaydanhSach() {  
for(let index in danhSach){
    console.log("Tên:",danhSach[index].name);
    console.log("Tuổi:",danhSach[index].tuoi);
    console.log("ID:",danhSach[index].id);
    console.log("-----------------");

}}