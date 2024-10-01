"use client";
import Navigation from "../(components)/navigation/navigation";
import Title from "../(components)/title/title";
import Card from "../(components)/card/card";

export default function Dashboard() {
  let navigationList = [
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
  ];

  let cardList = [
    <div>1</div>,
    <div>2</div>,
    <div>3</div>,
    <div>4</div>,
    <div>5</div>,
    <div>6</div>,
  ];

  return (
    <div>
      <Navigation navigationList={navigationList} />
      <Title title="Overview" />
      <div className="grid grid-cols-3 gap-4 mt-6">
        {cardList && cardList.map((item) => <Card key={item.id}>{item}</Card>)}
      </div>
    </div>
  );
}
