const clock = document.querySelector("#clock");
function getCLock(){
  const date = new Date(); // new date는 현재시간을 보는 방법임
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  clock.innerText=`${hours}:${minutes}:${seconds}`
}
getCLock()//이걸 안 하면 화면에 00:00:00이 한번 나왔다가 시간이 표시된다. 그런걸 없애기 위해 진행
setInterval(getCLock,1000);



