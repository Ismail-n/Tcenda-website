const blogPosts = [
  {
    image: "blog1",
    title: "How AI is Driving Innovation in Middle east",
    description:
      "Explore real-world applications of AI and how businesses are leveraging it to automate tasks, enhance customer experience, and make smarter decisions.",
    author: "John Deo",
    date: "26 June 2025",
  },
  {
    image: "blog2",
    title: "Cybersecurity Trends in 2025",
    description:
      "Understand the latest cybersecurity threats, tools, and best practices to keep your data and infrastructure safe in a rapidly evolving digital world.",
    author: "John Deo",
    date: "26 June 2025",
  },
  {
    image: "blog3",
    title: "Mobile-First Digital Strategy",
    description:
      "Explore real-world applications of AI and how businesses are leveraging it to automate tasks, enhance customer experience, and make smarter decisions.",
    author: "John Deo",
    date: "26 June 2025",
  },
];

const clientsLogo = [
  "client1",
  "client2",
  "client3",
  "client4",
  "client5",
  "client6",
  "client7",
  "client8",
  "client9",
  "client10",
  "client11",
  "client12",
  "client13",
  "client14",
  "client15",
];

const testimonials = [
  {
    image: "client1",
    name: "Ayaan Malik",
    role: "CTO, NexaCorp",
    message: `Partnering with TOD was one of the best decisions we've made for our digital growth. From the initial consultation to final deployment, their team demonstrated a deep understanding of our business goals and translated them into a powerful, user-friendly solution. The communication throughout the project was clear, timely, and transparent. They took the time to understand our customers, suggested innovative features, and delivered on every promise—on time and within budget. Today, our platform runs more smoothly, our users are more engaged, and our internal team is more efficient. TOD didn't just build us a solution—they helped us build a better business.`,
  },
  {
    image: "client2",
    name: "John Deo",
    role: "CTO, NexaCorp",
    message: `Partnering with TOD was one of the best decisions we've made for our digital growth. From the initial consultation to final deployment, their team demonstrated a deep understanding of our business goals and translated them into a powerful, user-friendly solution. The communication throughout the project was clear, timely, and transparent. They took the time to understand our customers, suggested innovative features, and delivered on every promise—on time and within budget. Today, our platform runs more smoothly, our users are more engaged, and our internal team is more efficient. TOD didn't just build us a solution—they helped us build a better business.`,
  },
  {
    image: "client2",
    name: "John Deo",
    role: "CTO, NexaCorp",
    message: `Partnering with TOD was one of the best decisions we've made for our digital growth. From the initial consultation to final deployment, their team demonstrated a deep understanding of our business goals and translated them into a powerful, user-friendly solution. The communication throughout the project was clear, timely, and transparent. They took the time to understand our customers, suggested innovative features, and delivered on every promise—on time and within budget. Today, our platform runs more smoothly, our users are more engaged, and our internal team is more efficient. TOD didn't just build us a solution—they helped us build a better business.`,
  },
  {
    image: "client2",
    name: "John Deo",
    role: "CTO, NexaCorp",
    message: `Partnering with TOD was one of the best decisions we've made for our digital growth. From the initial consultation to final deployment, their team demonstrated a deep understanding of our business goals and translated them into a powerful, user-friendly solution. The communication throughout the project was clear, timely, and transparent. They took the time to understand our customers, suggested innovative features, and delivered on every promise—on time and within budget. Today, our platform runs more smoothly, our users are more engaged, and our internal team is more efficient. TOD didn't just build us a solution—they helped us build a better business.`,
  },
];

const serviceModels = [
  {
    id: "project",
    icon: "project",
    title: "Fixed Price Projects",
    maxTitleWidth: 161,
    description:
      "Ideal for well-scoped initiatives with clear timelines and budgets",
    points: [
      "Skilled experts across all technologies and domains",
      "Transparent execution with detailed milestones",
      "Time-bound delivery that ensures long-term impact",
    ],
  },
  {
    id: "service",
    icon: "managedService",
    title: "Hourly Projects",
    maxTitleWidth: 106,
    maxTitleArWidth: 200,
    description: "Best suited for changing needs, billed by the hour",
    points: [
      "Pay-as-you-go model with no long-term commitments",
      "Agile support for urgent or evolving tasks",
      "Full visibility into hours spent and task progress",
    ],
  },
  {
    id: "staff",
    icon: "staff",
    title: "Developer on Demand",
    maxTitleWidth: 155,
    maxTitleArWidth: 175,
    description:
      "Best suited for teams needing expert skills without long hiring cycles",
    points: [
      "On-demand specialists across roles and tech stacks",
      "Seamless integration into your existing teams",
      "Transparent management and measurable outcomes",
    ],
  },
];

const industries = [
  { icon: "foodBeverage", title: "Food & Beverage" },
  { icon: "eCommerce", title: "E-commerce & Retail" },
  { icon: "transportation", title: "Transportation" },
  { icon: "realEstate", title: "Real Estate" },
  { icon: "government", title: "Government" },
  { icon: "healthCare", title: "Healthcare" },
];

const services = [
  {
    id: 1,
    icon: "mobileApp",
    title: "Mobile App Development",
    description:
      "We transform your ideas into sleek, high-performance mobile apps built for scale. Whether iOS or Android, our solutions are tailored to deliver seamless user experiences and drive business results.",
    maxTitleArWidth: 170,
  },
  {
    id: 2,
    icon: "web",
    title: "Web Development",
    description:
      "From complex enterprise systems to cloud-based SaaS platforms, we build robust, scalable software that simplifies operations, enhances agility, and supports long-term growth.",
    maxTitleWidth: 115,
  },
  {
    id: 3,
    icon: "digital",
    title: "Digital Transformation",
    description:
      "Drive digital transformation with tailored strategies, modern tools, and streamlined workflows that boost efficiency and accelerate growth.",
    maxTitleWidth: 115,
  },
  {
    id: 4,
    icon: "odoo",
    title: "Odoo Customisation",
    description:
      "Adapt Odoo to your business with tailored modules, features, and workflows for better efficiency and control.",
    maxTitleWidth: 115,
  },
  {
    id: 5,
    icon: "cloudService",
    title: "Managed Cloud Services",
    description:
      "Secure your digital ecosystem with our end-to-end cybersecurity services—vulnerability assessments, threat monitoring, data protection, and regulatory compliance tailored to your industry.",
    maxTitleWidth: 222,
  },
  {
    id: 6,
    icon: "ai",
    title: "Artificial Intelligence & Machine Learning",
    maxTitleArWidth: 210,
    description:
      "Leverage the power of AI to make smarter decisions, personalize customer experiences, and automate critical workflows. Our solutions turn data into intelligent action.",
  },
  {
    id: 7,
    icon: "dataAnalytics",
    title: "Data Analytics",
    description:
      "Make sense of your data with powerful dashboards, real-time reporting, and predictive analytics. We help you uncover insights that inform strategy and improve performance.",
    maxTitleWidth: 115,
  },
  {
    id: 8,
    icon: "ui",
    title: "UI/UX Design",
    description:
      "We design user-focused digital interfaces and experiences that combine visual appeal with ease of use, enhancing engagement and increasing conversion rates.",
    maxTitleWidth: 115,
    maxTitleArWidth: 210,
  },
];

const thirdPartyServicesData = [
  {
    title: "Government Services",
    rootfolder: "govermentServices",
    logos: ["sadad", "elm", "yaqeen", "nafath", "ejar", "najiz"],
  },
  {
    title: "Payment Gateways",
    rootfolder: "paymentGateways",
    logos: ["checkout", "tap", "tabby", "tamara", "paytabs", "edaat"],
  },
  {
    title: "SMS Gateways",
    rootfolder: "smsGateways",
    logos: [
      "unifonic","msegat","connectSaudi","smsCountry","whatsAppAPI","gallabox",
    ],
  },
  {
    title: "Shipping Companies",
    rootfolder: "shippingServices",
    logos: ["torod", "barq", "prolo", "deliverect"],
  },
  // {
  //   title: "POS integrations",
  //   rootfolder: "posIntegrations",
  //   logos: ["oodo", "syrve", "oracle", "foodics"],
  // },
];

export {
  blogPosts,
  clientsLogo,
  testimonials,
  serviceModels,
  industries,
  services,
  thirdPartyServicesData,
};
