function getAdvice(season) {
  if (season === "summer") {
    return "Water your plants regularly.";
  } else if (season === "winter") {
    return "Protect plants from frost.";
  } else if (season === "spring") {
    return "Plant new flowers and vegetables.";
  } else if (season === "autumn") {
    return "Rake leaves and prepare soil.";
  } else {
    return "Invalid season.";
  }
}

// Example usage
console.log(getAdvice("summer"));