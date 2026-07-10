const users = [
  { name: "Ngozi", age: 32, role: "admin" },
  { name: "Guzzy", age: 22, role: "admin" },
  { name: "Amara", age: 30, role: "user" },
];

const userAge = users.filter((user) => user.age >= 30);

const getAdmins = users
  .filter((user) => user.role === "admin")
  .map((user) => user.name);
console.log(getAdmins);
