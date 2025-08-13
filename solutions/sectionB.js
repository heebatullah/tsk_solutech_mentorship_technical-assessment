// Function to get top three services by rating in descending order
function getTopThreeServices(services) {
  return services
    .sort((a, b) => b.rating - a.rating) // sorting by descending
    .slice(0, 3); // gettting the first three
}

const services = [
  { name: "Tutoring", rating: 4.6 },
  { name: "Food Delivery", rating: 4.9 },
  { name: "Tech Support", rating: 4.3 },
  { name: "Child Care", rating: 4.8 },
];

console.log(getTopThreeServices(services));
