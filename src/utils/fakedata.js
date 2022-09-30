const sampleTicketsData = [
  {
    id: "UAC876543",
    priority: "low",
    status: "pending",
    date: "23/6/2022 12:43PM",
  },

  {
    id: "UAC876540",
    priority: "high",
    status: "pending",
    date: "23/6/2022 12:43PM",
  },
  {
    id: "UAC876545",
    priority: "medium",
    status: "resolved",
    date: "23/6/2022 12:43PM",
  },
];

const sampleTransactions = [
  {
    id: "444433",
    status: "pending",
    date: "23/6/2022 12:43PM",
    amount: "4523.00",
  },
  {
    id: "444533",
    status: "completed",
    date: "23/6/2022 12:43PM",
    amount: "4523.00",
  },
  {
    id: "494433",
    status: "declined",
    date: "23/6/2022 12:43PM",
    amount: "4523.00",
  },
];
const sampleUsers = [
  {
    id: "444433",
    name: "John Doe",
    role: "admin",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: "444533",
    name: "Jane Doe",
    role: "blogger",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: "494433",
    name: "Janet Doe",
    role: "analyst",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

export { sampleTicketsData, sampleTransactions, sampleUsers };
