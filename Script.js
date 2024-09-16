const comments = [
    "You will never succeed.",
    "Your family doesn't love you.",
    "The world is going to end and everyone you have ever loved will die.",
    "Happiness is just an illusion.",
    "Everything you do is ultimately meaningless.",
    "You are completely alone.",
    "No one will remember you after you're gone.",
    "The universe doesn’t care about you.",
    "Your life is just a series of failures.",
    "Everyone you love will eventually leave you.",
    "All your efforts will amount to nothing.",
    "You are wasting your life.",
    "Time is running out and you’re not ready.",
    "All your dreams will be shattered.",
    "Everything falls apart in the end.",
    "You’ll never find true happiness.",
    "Nothing lasts forever, especially good things.",
    "Everyone is pretending to like you.",
    "You’re just one mistake away from ruining everything.",
    "Your best years are behind you.",
    "You’ve already peaked.",
    "Life is a slow decline into oblivion.",
    "You are nothing but a speck of dust in a meaningless universe.",
    "Success is out of reach for you.",
    "Your existence is insignificant.",
    "The people you trust are lying to you.",
    "You will always be second best.",
    "You’ve wasted your potential.",
    "Even if you succeed, you will still feel empty.",
    "It’s all downhill from here."
  ];
  
  let availableComments = [...comments]; // Copy of the array for tracking
  
  // Function to shuffle the comments array like in Tetris
  function shuffleComments() {
    if (availableComments.length === 0) {
      availableComments = [...comments]; // Reset the comments
    }
    const index = Math.floor(Math.random() * availableComments.length);
    const comment = availableComments.splice(index, 1)[0]; // Remove and return one comment
    return comment;
  }
  
  document.getElementById("cat").addEventListener("click", () => {
    const commentDiv = document.getElementById("comment");
  
    // Randomly select a new comment
    const comment = shuffleComments();
    
    // Update the comment text
    commentDiv.textContent = comment;
  
    // Add animations and show the comment
    commentDiv.classList.remove("hidden");
    commentDiv.classList.add("sparkle");
    
    // Show comment for 10 seconds, then hide it
    setTimeout(() => {
      commentDiv.classList.add("hidden");
      commentDiv.classList.remove("sparkle");
    }, 10000);
  });