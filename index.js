function wishHappyBirthday() {
    // Get friend's name and age
    let friendName = prompt("Enter your friend's name:");
    
    // Generate birthday message
    let birthdayMessage = `Happy Birthday, ${friendName}! 🎉🎂 Tomi wishes you a fantastic birthday filled with joy, laughter, and wonderful memories. May all your dreams and wishes come true. I am happy to have you as my friend so just know this friendship is forever. Cheers to another amazing year ahead! 🥳🎈. I love you.`;

    // Display birthday message on the webpage
    document.getElementById("message").innerText = birthdayMessage;
  }

  // Call the function to wish happy birthday
  wishHappyBirthday();
