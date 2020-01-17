function onFilterInput(){
    var inputElement = document.querySelector('input');
    var filter = inputElement.value.toUpperCase();
    console.log(filter);
    var textValue;
    const listElement = document.getElementsByTagName("li");
    
    for(let i = 0 ; i< listElement.length; i++){
        textValue = listElement[i].textContent || listElement[i].innerText;
        let storeArray= -1;
        let isFind = textValue.toUpperCase().indexOf(filter) > storeArray;
        // console.warn(listElement[i].textContent.toUpperCase);
        if(isFind){
            listElement[i].style.display = "block";
        }else{
            listElement[i].style.display = "none";
           
      }
   }
}

document.addEventListener('keyup',onFilterInput);