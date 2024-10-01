import Navigation from "./navigation";

export default {
  component: Navigation,
  title: "Components/Navigation",
};

const navigationList = [
  {
    id: "1",
    title: "Overview",
    url: "#",
  },
  {
    id: "2",
    title: "Pricing",
    url: "#",
  },
  {
    id: "3",
    title: "Marketplace",
    url: "#",
  },
  {
    id: "4",
    title: "Features",
    url: "#",
  },
];

export const Default = {
  args: {
    navigationList,
  },
};
