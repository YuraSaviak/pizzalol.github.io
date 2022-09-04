



let cityOForder = localStorage.getItem('city');
var citypole = document.getElementById('usercityyy');
citypole.value = cityOForder

function checkForm(){
 
  let name = document.getElementById('userName').value;
  if(name != ''){
    userName.style.borderBottom='2px solid rgb(11, 218, 11)';
    userName.style.color='rgb(11, 218, 11)';
    
  }  else{

    userName.style.borderBottom='2px solid red';
    userName.style.color='red';
    let nameNote = document.createElement('div');
    formTelegram.insertBefore(nameNote, row2);
    nameNote.id = 'notification1';
    nameNote.innerText = 'Please write your name';
    nameNote.style.marginBottom = '10px';
    nameNote.style.color = 'red'
    
    return;
  }
//   let cityOForder = localStorage.getItem('city');
//   var citypole = document.getElementById('user_city').value;
  if(citypole.value != ''){
    citypole.style.borderBottom='2px solid rgb(11, 218, 11)';
    citypole.style.color='rgb(11, 218, 11)';

  } else{

    citypole.style.borderBottom='2px solid red';
    citypole.style.color='red';
    let cityNote = document.createElement('div');
    formTelegram.insertBefore(cityNote, row2);
    cityNote.id = 'notification1';
    cityNote.innerText = 'Please write your city';
    cityNote.style.marginBottom = '10px';
    cityNote.style.color = 'red'
    return;
  }
  //проверка телефона
  let phoneNumber = document.getElementById('userPhone').value;
  let templatePhone = /^[0-9]*$/;
  if(phoneNumber === ''){
    userPhone.style.borderBottom='2px solid red';
    userPhone.style.color='red';
    let phoneNote = document.createElement('div');
    formTelegram.insertBefore(phoneNote, row2);
    phoneNote.innerText = 'Please write your number';
    phoneNote.style.display="flex"
    phoneNote.style.marginBottom = '10px';
    phoneNote.style.color = 'red'
    return;
  } else if(templatePhone.test(phoneNumber) == false){
    userPhone.style.borderBottom='2px solid red';
    userPhone.style.color='red';
    let phoneNote = document.createElement('div');
    formTelegram.insertBefore(phoneNote, row2);
    phoneNote.innerText = 'Only numbers';
    phoneNote.style.marginBottom = '10px';
    phoneNote.style.color = 'red'
    return;
  } else{
    userPhone.style.borderBottom='2px solid rgb(11, 218, 11)';
    userPhone.style.color='rgb(11, 218, 11)';
  }
  
  //проверка мейла
  let email = document.getElementById('userEmail').value;
  let templateEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if(email === ''){
    userEmail.style.borderBottom='2px solid red';
    userEmail.style.color='red';
    let emailNote = document.createElement('div');
    formTelegram.insertBefore(emailNote, row2);
    emailNote.innerText = `It does'nt look like e-mail`;
    emailNote.style.marginBottom = '10px';
    emailNote.style.color = 'red'
    return;
  } else if(templateEmail.test(email) == false){
    userEmail.style.borderBottom='2px solid red';
    userEmail.style.color='red';
    let emailNote = document.createElement('div');
    formTelegram.insertBefore(emailNote, row2);
    emailNote.innerText = `It does'nt look like e-mail'`;
    emailNote.style.marginBottom = '10px';
    emailNote.style.color = 'red'
    return;
  } else{
    userEmail.style.borderBottom='2px solid rgb(11, 218, 11)';
    userEmail.style.color='rgb(11, 218, 11)';
  }

  //проверка вопроса
  var userQuest = document.getElementById('question').value;
  if(userQuest != ''){
    question.style.borderBottom='2px solid rgb(11, 218, 11)';
    question.style.color='rgb(11, 218, 11)';
    
  }  else{
    question.style.borderBottom='2px solid red';
    question.style.color='red';
    let questNote = document.createElement('div');
    formTelegram.insertBefore(questNote, submitBut);
    questNote.id = 'notification4';
    questNote.innerText = 'Order is empty';
    questNote.style.marginBottom = '10px';
    questNote.style.color = 'red'
    return;
  }

  document.getElementById('formTelegram').submit();
}

makeorder.addEventListener('click',function(){
  var summma = 0;
  let masivwraperow = document.getElementsByClassName("wrapperforElement")
  // console.log(masivwraperow)
  for(let i = 0; i<masivwraperow.length;i++){
    let sumochka = (masivwraperow[i].children[2]).innerText * (masivwraperow[i].children[4]).innerText
    // console.log(sumochka);
    summma +=sumochka;
  }
 









    conete.style.top = "90px"
    var order_final = '';

    var orderLists = document.getElementsByClassName("h23");
    for(let i = 0;i<orderLists.length;i++){
        order_final += (orderLists[i].innerText+' ')
        
      summma = String(summma)
      pricers.value = summma+"$"
    }
    console.log(summma)
    question.value = order_final;
    conete.scrollIntoView();
})
remove1.addEventListener('click',function(){
    conete.style.top = "-5000px"
})