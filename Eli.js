// 1. تأثير كتابة
const texts = ["مطور واجهات", "مصمم UI/UX", "طالب IT", "ذكاء اصطناعي "];
let i=0, j=0; let el=document.getElementById("typing");

function type(){ if(j<texts[i].length){ el.textContent+=texts[i][j++]; setTimeout(type,100)} else{ setTimeout(()=>{el.textContent=""; j=0; i=(i+1)%texts.length; type()},1500)}} type();

// 2. الوضع الليلي - يحقق شرط JavaScript
document.getElementById("themeBtn").onclick = ()=>{
 document.body.classList.toggle("dark");
 localStorage.setItem("theme", document.body.classList.contains("dark")? "dark" : "light");
}

// 3. زر العودة للأعلى
let topBtn = document.getElementById("topBtn");
window.onscroll = ()=>{ topBtn.style.display = window.scrollY > 300? "block" : "none" };
topBtn.onclick = ()=> window.scrollTo({top:0, behavior:"smooth"});

// 4. التحقق من الفورم - يحقق شرط التأكد من العناصر تعمل
document.getElementById("contactForm").onsubmit = (e)=>{
 e.preventDefault();
 let status = document.getElementById("formStatus");
 if(document.getElementById("name").value.length < 3){
   status.textContent = "الاسم قصير جداً"; status.style.color="red"; return;
 }
 status.textContent = "تم الإرسال بنجاح! شكراً لتواصلك"; status.style.color="green";
 e.target.reset();
}