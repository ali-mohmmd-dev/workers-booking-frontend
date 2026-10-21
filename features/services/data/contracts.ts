import { popular } from "./services";

// Sample recurring services; schedules and final terms are agreed after a request.
export const popularContracts = [
  { ...popular[0], title: "Regular home cleaning", jobs: "Recurring visits", description: "Keep your home fresh with regular cleaning support. Share your preferred frequency and rooms when requesting a recurring arrangement.", included: ["A cleaning schedule agreed with you", "Routine floor and surface cleaning", "Kitchen and bathroom upkeep"] },
  { ...popular[1], title: "Property maintenance", jobs: "Ongoing support", description: "Stay on top of everyday repairs with ongoing maintenance support for your property. Agree the visit schedule and scope with your professional.", included: ["Scheduled property checks", "Minor repairs and adjustments", "A maintenance task list agreed with you"] },
  { ...popular[3], title: "Plumbing maintenance", jobs: "Scheduled upkeep", description: "Arrange recurring plumbing checks to help look after taps, fixtures and everyday leaks. Parts and additional repairs are agreed separately.", included: ["Routine tap and fixture checks", "Inspection for visible leaks", "Minor adjustments within the agreed scope"] },
  { ...popular[5], title: "Office cleaning", jobs: "Recurring visits", description: "Keep your workspace ready for the day with recurring office cleaning. Share the size of your space and preferred visit times when requesting help.", included: ["Cleaning of shared work surfaces", "Floor sweeping and mopping", "Shared kitchen and washroom upkeep"] },
];
