function wishHappyBirthday() {
    // Get friend's name and age
    let friendName = prompt("Enter your friend's name:");
    
    // Generate birthday message
    let birthdayMessage = `Happy Birthday, ${friendName}! 🎉🎂 Frank & Tomi wish you a fantastic birthday filled with joy, laughter, and wonderful memories. May all your dreams and wishes come true. We are happy to have you as our friend so just know this friendship is forever. Cheers to another amazing year ahead! 🥳🎈. We love you.`;

    // Display birthday message on the webpage
    document.getElementById("message").innerText = birthdayMessage;
  }

  // Call the function to wish happy birthday
  wishHappyBirthday();