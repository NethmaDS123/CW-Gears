const submitButton = document.getElementById("submit");
const Address1 = document.getElementById("Add1");
const address2 = document.getElementById("Add2");
const address3 = document.getElementById("Add3");
const town = document.getElementById("City");
const State = document.getElementById("State");
const Post = document.getElementById("Zip");
const location = document.getElementById("Region");
const expiry = document.getElementById("expdate");
const card = document.getElementById("pin");
const security = document.getElementById("seccode");
const holder = document.getElementById("holdername");


let address1Entered = false;
let townEntered = false;
let StateEntered = false;
let PostEntered = false;
let CardEntered = false;
let ExpiryEntered = false;
let HolderEntered = false;

Address1.addEventListener("keyup",(e) => {
  const value = e.currentTarget.value;

  if (value === ""){
    address1Entered = false;
  }
  else{
    address1Entered = true;
  }

  allEntered();
});

town.addEventListener("keyup",(e) => {
    const value = e.currentTarget.value;

    if (value === ""){
      townEntered = false;
    }
    else{
      townEntered = true;
    }

    allEntered();
  });

  State.addEventListener("keyup",(e) => {
    const value = e.currentTarget.value;

    if (value === ""){
      StateEntered = false;
    }
    else{
      StateEntered = true;
    }

    allEntered();
  });

  Post.addEventListener("keyup",(e) => {
    const value = e.currentTarget.value;

    if (value === ""){
      PostEntered = false;
    }
    else{
      PostEntered = true;
    }

    allEntered();
  });



  
  expiry.addEventListener("keyup",(e) => {
    const value = e.currentTarget.value;
  
    if (value === ""){
      ExpiryEntered = false;
    }
    else{
      ExpiryEntered = true;
    }
  
    allEntered();
  });


  
  card.addEventListener("keyup",(e) => {
    const value = e.currentTarget.value;
  
    if (value === ""){
      CardEntered = false;
    }
    else{
      CardEntered = true;
    }
  
    allEntered();
  });


  holder.addEventListener("keyup",(e) => {
    const value = e.currentTarget.value;
  
    if (value === ""){
      HolderEntered = false;
    }
    else{
      HolderEntered  = true;
    }
  
    allEntered();
  });



  function allEntered() {

    if (address1Entered && townEntered && StateEntered && PostEntered && CardEntered && ExpiryEntered && HolderEntered ) {
        submitButton.disabled = false;

    } else {

        submitButton.disabled = true;

    }

  }