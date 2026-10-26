export type RoleKey = "nanny" | "housekeeper" | "driver";

export type Role = {
  key: RoleKey;
  name: string;
  path: string;
  image: string;
  short: string;
  intro: string[];
  hours: string;
  duties: string[];
  detailTitle: string;
  detail: string;
};

export const salary = "£2,000 every month + £50 pocket money every weekend";

export const sharedLeave = ["Vacation leave: 3 weeks, with full pay", "Sick leave: 3 weeks, with full pay"];

export const sharedBenefits = [
  "Free accommodation and housing",
  "Free meals and additional allowances",
  "Free medical and dental care, including prescribed medications when required",
];

export const roles: Record<RoleKey, Role> = {
  nanny: {
    key: "nanny",
    name: "Nanny",
    path: "/nanny",
    image: "/images/nanny-reading.webp",
    short: "Attentive childcare, school journeys and a safe, nurturing home environment.",
    intro: [
      "I am currently looking for a kind, honest, reliable, and experienced nanny to care for my children. As I have a busy schedule, I need someone who is responsible, caring, and dedicated to ensuring their well-being while I am away.",
      "The ideal candidate should have a genuine love for children, be trustworthy, and be able to provide a safe and nurturing environment at all times.",
    ],
    hours: "Monday–Saturday, 7:00 AM–7:00 PM · Sunday off",
    duties: [
      "Caring for the children",
      "Taking the children to school and picking them up",
      "Laundry and clothing care",
      "General housekeeping duties, including cleaning and cooking",
    ],
    detailTitle: "Care that feels like family",
    detail: "Your day will centre on the children’s well-being: attentive care at home, dependable school journeys, and help with the everyday routines that keep their world calm, clean and organised.",
  },
  housekeeper: {
    key: "housekeeper",
    name: "Housekeeper",
    path: "/housekeeper",
    image: "/images/housekeeping-living-room.webp",
    short: "Thoughtful housekeeping, excellent organisation and a home maintained to a high standard.",
    intro: [
      "I am currently looking for a trustworthy, hardworking, and experienced housekeeper to work in my home. As I have a busy schedule, I need someone who is responsible, reliable, and capable of maintaining my home to a high standard of cleanliness and organization.",
      "The ideal candidate should be dedicated, attentive to detail, and committed to providing excellent housekeeping services.",
    ],
    hours: "Monday–Saturday, 7:00 AM–7:00 PM · Sunday off",
    duties: [
      "Keep facilities and common areas clean and well-maintained",
      "Vacuum, sweep, and mop floors",
      "Clean and restock restrooms as needed",
      "Clean up spills using appropriate equipment and procedures",
      "Report maintenance issues and necessary repairs",
      "Collect and dispose of waste and trash properly",
      "Assist household members and guests when required",
      "Ensure the linen room remains clean, organized, and fully stocked",
    ],
    detailTitle: "A home cared for in every detail",
    detail: "From well-kept shared spaces to a fully stocked linen room, your work will help the entire household run smoothly. Reliability, care and attention to detail are at the heart of this role.",
  },
  driver: {
    key: "driver",
    name: "Driver",
    path: "/driver",
    image: "/images/family-driver.webp",
    short: "Safe, dependable family transport for school, daily activities, occasions and deliveries.",
    intro: [
      "I urgently need an honest, kind, loyal, sincere, understanding and warm-hearted person to work for me as a driver in my home. I am a very busy person and need someone who can drive my children to school and pick them up, drive my family to occasions, and assist with deliveries.",
      "The ideal person will be dependable, considerate and committed to supporting the family’s daily activities.",
    ],
    hours: "Monday–Saturday, 7:00 AM–8:00 PM · Sunday off",
    duties: [
      "Maintain vehicle maintenance records and ensure that the vehicle is in good working order",
      "Drive family members to and from their daily activities, including school, work, and various business and social functions",
      "Drive the children to school and pick them up",
      "Assist with family occasions and delivery purposes",
    ],
    detailTitle: "Every journey, handled with care",
    detail: "This role combines dependable family driving with thoughtful vehicle care. You will support school routines, work and social journeys, special occasions and deliveries while keeping clear maintenance records.",
  },
};

export const homeFaqs = [
  { q: "Which positions are available?", a: "We are currently welcoming applications for a nanny, housekeeper and driver. Each role has a dedicated page with its own duties, hours and focused FAQs." },
  { q: "What is the salary?", a: "The salary for all three categories is £2,000 every month, plus £50 pocket money every weekend." },
  { q: "What leave and benefits are included?", a: "All roles include three weeks’ paid vacation leave, three weeks’ paid sick leave, free accommodation, meals and additional allowances, and free medical and dental care including prescribed medications when required." },
  { q: "How long is the employment contract?", a: "The employment contract will be for two to three years with the family. At the end of the contract period, you may choose to renew if you are satisfied and wish to continue." },
];

export const roleFaqs: Record<RoleKey, { q: string; a: string }[]> = {
  nanny: [
    { q: "What will my main responsibilities be?", a: "Your core responsibility is caring for the children, including school drop-offs and pick-ups. The role also includes laundry and clothing care, plus general housekeeping, cleaning and cooking." },
    { q: "What qualities are you looking for?", a: "Kindness, honesty, reliability, relevant experience and a genuine love for children are essential. You should provide a safe and nurturing environment at all times." },
    { q: "What are the nanny’s working hours?", a: "Monday to Saturday from 7:00 AM to 7:00 PM. Sunday is your off day." },
    { q: "Is accommodation included?", a: "Yes. Free accommodation and housing, free meals and additional allowances are included." },
    { q: "What paid leave will I receive?", a: "You will receive three weeks of vacation leave and three weeks of sick leave, both with full pay." },
    { q: "Can I renew my contract?", a: "Yes. The initial contract is for two to three years, and you may choose to renew at the end if you are satisfied and wish to continue." },
  ],
  housekeeper: [
    { q: "What does the housekeeping role cover?", a: "It covers cleaning and maintaining facilities and common areas, floors and restrooms, spill clean-up, waste disposal, linen-room organisation and assisting household members and guests when required." },
    { q: "Will I need to report maintenance issues?", a: "Yes. You should report maintenance issues and necessary repairs so they can be addressed." },
    { q: "What are the housekeeper’s working hours?", a: "Monday to Saturday from 7:00 AM to 7:00 PM. Sunday is your off day." },
    { q: "Are meals and housing provided?", a: "Yes. The position includes free accommodation and housing, free meals and additional allowances." },
    { q: "What paid leave will I receive?", a: "You will receive three weeks of vacation leave and three weeks of sick leave, both with full pay." },
    { q: "Can I renew my contract?", a: "Yes. The initial contract is for two to three years, and you may choose to renew at the end if you are satisfied and wish to continue." },
  ],
  driver: [
    { q: "Who will I be driving?", a: "You will drive family members to daily activities, school, work, business and social functions. You will also drive the children to school and pick them up." },
    { q: "Are deliveries part of the role?", a: "Yes. The role includes driving for family occasions and delivery purposes." },
    { q: "What vehicle responsibilities are included?", a: "You will maintain vehicle maintenance records and ensure that the vehicle remains in good working order." },
    { q: "What are the driver’s working hours?", a: "Monday to Saturday from 7:00 AM to 8:00 PM. Sunday is your off day." },
    { q: "What leave and benefits are included?", a: "Three weeks’ paid vacation leave, three weeks’ paid sick leave, free accommodation, meals and allowances, and emergency medical and dental services including medicine." },
    { q: "Can I renew my contract?", a: "Yes. The initial contract is for two to three years, and you may choose to renew at the end if you are satisfied and wish to continue." },
  ],
};

export const gallery = [
  { src: "/images/nanny-reading.webp", alt: "A caregiver reading with two children", label: "Story time" },
  { src: "/images/housekeeping-living-room.webp", alt: "Housekeepers caring for a bright living room", label: "A well-kept home" },
  { src: "/images/family-driver.webp", alt: "A private driver speaking with a passenger", label: "Family journeys" },
  { src: "/images/nanny-playtime.webp", alt: "A caregiver and child playing at home", label: "Learning through play" },
  { src: "/images/IMG-20261024-WA0006.jpg", alt: "A family preparing food together", label: "Everyday routines" },
  { src: "/images/housekeeping-details.webp", alt: "A housekeeper cleaning a living room table", label: "Attention to detail" },
  { src: "/images/driver-smile.webp", alt: "A professional driver ready for a journey", label: "Ready for the road" },
  { src: "/images/IMG-20261024-WA0011.jpg", alt: "A family walking towards their home", label: "At the heart of home" },
];
