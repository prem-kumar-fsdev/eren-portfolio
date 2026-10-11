export const site = {
  name: "Eren",
  first: "Eren",
  email: "fusuynere1@gmail.com",
  cvUrl: "#",
  linkedin: "#",
  role: "Product Designer",
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  headline: string;
  metrics: string[];
  href?: string;
  hue: number;
  tint: string;
  badge: string;
  /** Screenshots in /public/projects. Empty → generated placeholder art. */
  images: string[];
};

export const projects: Project[] = [
  {
    slug: "system",
    title: "Qaabil",
    year: "2025–26",
    headline: "An exam-prep platform with a full admin for courses, past papers and questions",
    metrics: ["Course & question management", "Past papers", "Role-based admin"],
    href: "https://qaabil.io/",
    images: ["/projects/qaabil-home.png", "/projects/qaabil-courses.png", "/projects/qaabil-questions.png", "/projects/qaabil-admin.png"],
    hue: 210,
    tint: "#e8eefc",
    badge: "#1d4ed8",
  },
  {
    slug: "transit",
    title: "DhagaButton",
    year: "2025",
    headline: "A retail platform with a point-of-sale terminal built for fast checkout",
    metrics: ["POS terminal", "Storefront & admin", "Built for speed"],
    href: "https://dhagabutton.com/",
    images: ["/projects/dhaga-app.png", "/projects/dhaga-login.png", "/projects/dhaga-terminal.png"],
    hue: 160,
    tint: "#dff7ec",
    badge: "#059669",
  },
  {
    slug: "market",
    title: "SpeedX Fiber Billing",
    year: "2024",
    headline: "A billing and subscriber management dashboard for a fibre ISP",
    metrics: ["Subscriber management", "Invoicing", "Admin dashboard"],
    href: "https://netbill.speedexfiber.net.pk/",
    images: ["/projects/netbill-dash.png"],
    hue: 20,
    tint: "#ffd9c7",
    badge: "#f97316",
  },
];
