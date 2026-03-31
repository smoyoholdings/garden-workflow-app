// Function for summer advice
function summerAdvice() {
  return "Water your plants regularly.";
}

// Function for winter advice
function winterAdvice() {
  return "Protect plants from frost.";
}

// Function for spring advice
function springAdvice() {
  return "Plant new flowers and vegetables.";
}

// Function for autumn advice
function autumnAdvice() {
  return "Rake leaves and prepare soil.";
}

// Main function to get advice
function getAdvice(season) {
  // Convert input to lowercase (handles user input better)
  season = season.toLowerCase();

  if (season === "summer") {
    return summerAdvice();
  } else if (season === "winter") {
    return winterAdvice();
  } else if (season === "spring") {
    return springAdvice();
  } else if (season === "autumn") {
    return autumnAdvice();
  } else {
    return "Invalid season. Please enter summer, winter, spring or autumn.";
  }
}

// Example usage
console.log(getAdvice("Summer"));