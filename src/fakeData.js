import { generateRandomId, generateRandomPower } from "./utils/utils";

const fakeData = [
  { id: generateRandomId(), name: "Luke", power: generateRandomPower() },
  { id: generateRandomId(), name: "Andre", power: generateRandomPower() },
  { id: generateRandomId(), name: "Lena", power: generateRandomPower() },
  { id: generateRandomId(), name: "Misha", power: generateRandomPower() },

  { id: generateRandomId(), name: "Kate", power: generateRandomPower() },
  { id: generateRandomId(), name: "Laura", power: generateRandomPower() },
  { id: generateRandomId(), name: "Sava", power: generateRandomPower() },
  { id: generateRandomId(), name: "Petr", power: generateRandomPower() },

  { id: generateRandomId(), name: "Mike", power: generateRandomPower() },
  { id: generateRandomId(), name: "John", power: generateRandomPower() },
  { id: generateRandomId(), name: "Elon", power: generateRandomPower() },
  { id: generateRandomId(), name: "Artur", power: generateRandomPower() },

  { id: generateRandomId(), name: "Ragnar", power: generateRandomPower() },
  { id: generateRandomId(), name: "Ilona", power: generateRandomPower() },
  { id: generateRandomId(), name: "Konstantin", power: generateRandomPower() },
  { id: generateRandomId(), name: "Diana", power: generateRandomPower() },
];

export default fakeData;
