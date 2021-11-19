function validateEmail(email) {
  {
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
       email
      )
    ) {
        console.log("Your email address is valid");
      return true;
    }
    console.log("Your email address is not valid");
    return false;
  }
}

validateEmail("Zachary.death@Mastek.com");
