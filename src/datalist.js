// datalist.js
const datalist = [
  { id: 1, title: "Frontend Developer", company: "Tech Corp", location: "Nagpur", type: "Full-time", salary: "₹6,00,000" },
  { id: 2, title: "Backend Developer", company: "Code Solutions", location: "Pune", type: "Part-time", salary: "₹4,00,000" },
  { id: 3, title: "UI/UX Designer", company: "Design Studio", location: "Remote", type: "Contract", salary: "₹5,00,000" },
  { id: 4, title: "Full Stack Developer", company: "WebWorks", location: "Mumbai", type: "Full-time", salary: "₹7,00,000" },
  { id: 5, title: "Mobile App Developer", company: "Appify", location: "Bangalore", type: "Contract", salary: "₹5,50,000" },
  // ---- keep adding until 100 ----
];

// Quick way: generate many jobs by duplicating with different ids
for (let i = 6; i <= 100; i++) {
  datalist.push({
    id: i,
    title: `Software Engineer ${i}`,
    company: `Company ${i}`,
    location: i % 2 === 0 ? "Delhi" : "Hyderabad",
    type: i % 3 === 0 ? "Contract" : "Full-time",
    salary: `₹${(4 + (i % 5))},00,000`
  });
}

export default datalist;
