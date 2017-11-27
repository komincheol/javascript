// Q.버튼을 눌렀을 때,table 태그에 class를 추가/삭제한다.
// 1.버튼을 누른다.
// 1-1. 버튼요소를 가지고 온다.
// 1-2. 버튼요소에 eventListner(click)를 달아준다.
// 1-3. 버튼을 눌렀을 때 실행시킬 메소드를 작성한다.
// 2. table태그 요소를 가지고 온다.
// 3. table태그에 내가 원하는 class(table-hover)가 있는지 확인한다.
// 3-1. class가 있으면 뺀다.(제거한다.)
// 3-2. class가 없으면 넣는다.(추가한다.)
var btn= document.getElementById('setClass');
console.log(btn);
btn.onclick = function() {
    console.log("button!!!");
    toggleclass();
}
function toggleclass(){
    var tb= document.getElementsByClassName("table")[0];
//     console.log(tb.classList);
//     if(tb.classList.include('table-hover')){
//         tb.classList.remove('table-hover');
//     }else{
//         tb.classList.add('table-hover');
//     }
 tb.classList.toggle('table-hover');
}
