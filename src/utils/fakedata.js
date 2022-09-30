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

export { sampleTicketsData, sampleTransactions };
