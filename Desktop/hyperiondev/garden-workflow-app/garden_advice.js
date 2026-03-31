function summerAdvice() {
  return "Water your plants regularly.";
}

function winterAdvice() {
  return "Protect plants from frost.";
}

function springAdvice() {
  return "Plant new flowers and vegetables.";
}

function autumnAdvice() {
  return "Rake leaves and prepare soil.";
}

function getAdvice(season) {
  if (season === "summer") {
    return summerAdvice();
  } else if (season === "winter") {
    return winterAdvice();
  } else if (season === "spring") {
    return springAdvice();
  } else if (season === "autumn") {
    return autumnAdvice();
  } else {
    return "Invalid season.";
  }
}

console.log(getAdvice("summer"));