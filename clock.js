const hours = document.querySelector('#hour');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const ampmEl = document.querySelector('#ampm');

const time = () => {

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if( h > 12){
    h = h - 12;
    ampm ="PM";
  }
  h = (h < 10)? "0"+h : h;
  m = (m< 10)? "0"+m: m;
  s = (s < 10)? "0"+s : s;

  hours.innerText = h;
  minutes.innerText = m;
  seconds.innerText = s;
  ampmEl.innerText = ampm;

  setTimeout(()=>{
    time();
  },1000)
}
time();


