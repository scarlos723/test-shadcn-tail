import type { Payment } from "./types";

const firstNames = [
  "James",
  "Mary",
  "John",
  "Patricia",
  "Robert",
  "Jennifer",
  "Michael",
  "Linda",
  "William",
  "Elizabeth",
  "David",
  "Barbara",
  "Richard",
  "Susan",
  "Joseph",
  "Jessica",
  "Thomas",
  "Sarah",
  "Charles",
  "Karen",
  "Christopher",
  "Nancy",
  "Daniel",
  "Lisa",
  "Matthew",
  "Betty",
  "Anthony",
  "Margaret",
  "Mark",
  "Sandra",
  "Donald",
  "Ashley",
  "Steven",
  "Kimberly",
  "Paul",
  "Emily",
  "Andrew",
  "Donna",
  "Joshua",
  "Michelle",
  "Kenneth",
  "Carol",
  "Kevin",
  "Amanda",
  "Brian",
  "Dorothy",
  "George",
  "Melissa",
  "Timothy",
  "Deborah",
];

const lastNames = [
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Garcia",
  "Miller",
  "Davis",
  "Rodriguez",
  "Martinez",
  "Hernandez",
  "Lopez",
  "Gonzalez",
  "Wilson",
  "Anderson",
  "Thomas",
  "Taylor",
  "Moore",
  "Jackson",
  "Martin",
  "Lee",
  "Perez",
  "Thompson",
  "White",
  "Harris",
  "Sanchez",
  "Clark",
  "Ramirez",
  "Lewis",
  "Robinson",
  "Walker",
  "Young",
  "Allen",
  "King",
  "Wright",
  "Scott",
  "Torres",
  "Nguyen",
  "Hill",
  "Flores",
  "Green",
  "Adams",
  "Nelson",
  "Baker",
  "Hall",
  "Rivera",
  "Campbell",
  "Mitchell",
  "Carter",
  "Roberts",
];

const orderTypes: Array<"online" | "in-store" | "pickup" | "delivery"> = [
  "online",
  "in-store",
  "pickup",
  "delivery",
];
const statuses: Array<
  "pending" | "processing" | "shipped" | "delivered" | "cancelled"
> = ["pending", "processing", "shipped", "delivered", "cancelled"];

const generateOrder = (index: number): Payment => {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const orderType = orderTypes[Math.floor(Math.random() * orderTypes.length)];
  const status = statuses[Math.floor(Math.random() * statuses.length)];
  const date = new Date(2024, 10, 1 + (index % 30));

  return {
    id: `ORD-${String(index + 1).padStart(3, "0")}`,
    customerName: `${firstName} ${lastName}`,
    orderDate: date.toISOString().split("T")[0],
    orderType,
    trackingId: `TRK-${Math.random()
      .toString(36)
      .substring(2, 10)
      .toUpperCase()}`,
    orderTotal: parseFloat((Math.random() * 1500 + 50).toFixed(2)),
    status,
  };
};

export const data: Payment[] = Array.from({ length: 100 }, (_, i) =>
  generateOrder(i)
);
