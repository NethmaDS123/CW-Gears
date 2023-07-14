    const submitButton = document.querySelector("#submit");
    const Address1 = document.querySelector("#Add1");
    const town = document.querySelector("#City");

    let address1Entered = false;
    let townEntered = false;

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

      function allEntered() {

        if (address1Entered && townEntered) {

            submitButton.disabled = false;

        } else {

            submitButton.disabled = true;

        }

      }