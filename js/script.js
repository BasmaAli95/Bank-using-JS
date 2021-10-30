var users = []
function adduser() {
    var obj = {
        name: prompt('enter your name'),
        id: prompt('enter yuor id'),
        balance: prompt('enter your balance')
    }
    users.push(obj)
    showuser()
}

function showuser() {
    console.table(users)
}
adduser()
adduser()
adduser()

function editbalancebyid(){
    id=prompt('enter your id to edit balance');
   newbalance=prompt('enter your new balance');
   users.forEach(item => {
if(id===item.id){
    item.balance = newbalance;
}
   })
   
  showuser();
  console.table(users)
}
editbalancebyid()
id=prompt('enter your id to delet ')
function deletuserbyid(){
users.forEach((item,i)=>{
if(id===item.id){
    users.splice(i,1)
}
}
    )
    
  showuser();
  console.table(users)
}
deletuserbyid()