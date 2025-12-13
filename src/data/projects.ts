export interface Project {
  id: string;
  title: string;
  website: string;
  description: string;
  company: string;
  date: string;
  images: string[];
  longDescription: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Noor - Prayer Times App",
    website: "https://noorappmv.com",
    description:
      "Islamic all in one application for the Maldives. Designed and Developed locally.",
    company: "NIGHTS AND WEEKENDS PVT LTD",
    date: "2024 - Present",
    images: ["/noorImages/noor1.png", "/noorImages/noor2.png"],
    longDescription:
      "Noor is a comprehensive Islamic mobile application designed specifically for users in the Maldives. \n\nIt provides accurate prayer times for all regions, including remote islands, and displays the Qibla direction for proper alignment. The app features customizable Azan notifications, native widgets for both the lock screen and home screen, and includes the Quran and Duas with translations in Dhivehi. Additionally, users can access daily inspirational quotes and a Tasbih counter for dhikr. Built with Flutter and Dart, Noor delivers a smooth, responsive experience on both iOS and Android devices, combining functionality with a clean, user-friendly interface. \n\nThe platform is add free with no subscription or purchase required for now. \n\nIt serves as a reliable companion for daily worship and spiritual engagement, integrating modern mobile technology with traditional Islamic practices.",
    technologies: ["Flutter", "Dart", "Swift", "Kotlin", "Shorebird"],
  },
  {
    id: "2",
    title: "TripTrek - Sea Travel Platform",
    website: "https://triptrek.travel",
    description:
      "A unified platform for Sea Travel in the Maldives. Built with Flutter, Dart and Firebase.",
    company: "NIGHTS AND WEEKENDS PVT LTD // ORKEN PVT LTD",
    date: "2025 - Present",
    images: ["/triptrekImages/triptrek1.png", "/triptrekImages/triptrek2.png", "/triptrekImages/triptrek3.png", "/triptrekImages/triptrek4.png", "/triptrekImages/triptrek5.png",],
    longDescription:
      "TripTrek is a modern and intuitive platform for sea travel in the Maldives, designed to deliver a seamless experience across multiple platforms: a user app, an operator app, and an operator web platform.\n\nFor users, the platform enables effortless ticket booking, secure payments, real-time schedules, notifications, and access to travel guides, including e-boarding functionality.\n\nOperators benefit from robust tools across both the mobile and web apps, including managing bookings, vessels, trips, staff, and finances, along with comprehensive reporting and analysis. The dedicated crew app streamlines operations and ensures smooth communication and coordination.\n\nBy providing real-time updates and digitally transforming the sea travel experience, TripTrek combines reliability, usability, and a visually clean interface, making it a complete solution for modern sea travel management.",
    technologies: ["Flutter", "Dart", "OneSignal", "Firebase", "Shorebird"],
  },
];
