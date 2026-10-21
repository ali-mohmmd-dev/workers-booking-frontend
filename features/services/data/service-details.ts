import { categories, popular } from "./services";
import { popularContracts } from "./contracts";

export const serviceSlug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const descriptions: Record<string, { description: string; included: string[] }> = {
  Cleaning: { description: "A fresher home, without the extra work. Tell us which rooms need attention and we’ll help you request local cleaning support.", included: ["Dusting and surface cleaning", "Floor sweeping and mopping", "Kitchen and bathroom cleaning"] },
  Plumbing: { description: "Get help with everyday leaks, taps and plumbing problems. Share the issue so a local professional can assess the work needed.", included: ["Inspection of the reported issue", "Tap and fixture repairs", "Leak checks after the repair"] },
  Electrical: { description: "Request professional help with lights, switches and everyday electrical maintenance around your home.", included: ["Inspection of the reported issue", "Light and switch maintenance", "Checks after the work is completed"] },
  Moving: { description: "Make your next move a little easier with help lifting, carrying and arranging your belongings.", included: ["Loading and unloading help", "Careful handling of furniture", "Placement in your chosen rooms"] },
  Painting: { description: "Give your space a fresh look. Share the area, finish and colours you have in mind when requesting a painter.", included: ["Review of the area to be painted", "Surface preparation", "Painting and work-area cleanup"] },
  Repairs: { description: "Take care of the small fixes on your list with practical help for everyday home repairs.", included: ["Assessment of the requested repair", "Minor fittings and adjustments", "Work-area cleanup"] },
};

// Demo starting rates; confirm scope, materials and final pricing with the professional.
export const serviceDetails = [
  ...popularContracts.map(service => ({ ...service, slug: serviceSlug(service.title), illustration: false })),
  ...popular.map(service => ({ ...service, slug: serviceSlug(service.title), ...descriptions[service.category], illustration: false })),
  ...categories.map(category => ({ title: category.name, category: category.name, slug: serviceSlug(category.name), image: popular.find(service => service.category === category.name)?.image ?? category.illustration, illustration: !popular.some(service => service.category === category.name), pricePerHour: 99, jobs: "Request local help", ...descriptions[category.name] })),
];

export type ServiceDetail = (typeof serviceDetails)[number];
