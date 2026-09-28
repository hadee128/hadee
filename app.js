const state=JSON.parse(localStorage.getItem('digitalgrow_demo')||'null')||{name:'',email:'',refCode:'',referrals:0,earnings:0};

function save(){localStorage.setItem('digitalgrow_demo',JSON.stringify(state));render();}
function render(){
 document.getElementById('refCode').textContent=state.refCode||'-';
 document.getElementById('members').textContent=state.referrals||0;
 document.getElementById('earnings').textContent=state.earnings||0;
 document.getElementById('refLink').value=state.refCode?location.href.split('#')[0]+'?ref='+state.refCode:'Create an account first';
}
document.getElementById('signupForm').addEventListener('submit',e=>{
 e.preventDefault();
 state.name=document.getElementById('name').value.trim();
 state.email=document.getElementById('email').value.trim();
 const code='DG'+Math.random().toString(36).slice(2,8).toUpperCase();
 state.refCode=code;
 document.getElementById('signupMsg').textContent='Account created. Your referral code is '+code;
 save();
});
function copyLink(){navigator.clipboard?.writeText(document.getElementById('refLink').value);alert('Referral link copied.');}
function withdraw(){
 const amount=Number(document.getElementById('withdrawAmount').value);
 const msg=document.getElementById('withdrawMsg');
 if(!amount||amount<=0){msg.textContent='Enter a valid amount.';return}
 if(amount>state.earnings){msg.textContent='Insufficient commission balance.';return}
 msg.textContent='Demo withdrawal request submitted for Rs. '+amount+'.';
}
render();
