export function generateFakeData(counter: number) {
    // Increase values proportionally to the counter
    const distance = (0.5 + Math.random()) * (counter / 10); // km
    const calories = Math.round(20 + Math.random() * 10 * (counter / 10)); // kcal
    const speed = (2 + Math.random() * 1.2) * (counter / 10); // km/hr
  
    return {
      distance: distance.toFixed(1),
      calories,
      speed: speed.toFixed(1),
    };
  }
  