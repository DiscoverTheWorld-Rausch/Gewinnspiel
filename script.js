
function verifyTicket(){
const email=document.getElementById('email').value;
const code=document.getElementById('code').value;
if(email==='gewinnspiel@rausch.de' && code==='0493 4127 1918'){
window.location='destination.html';
}else{
document.getElementById('error').innerText='Ticketcode oder E-Mail ungültig.';
}
}
