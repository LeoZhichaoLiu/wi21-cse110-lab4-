for (const key in statistics) {
  if (key.charAt(0) === 'r' || statistics[key] % 2 === 1) {
      console.log (statistics[key]);
  }
}
