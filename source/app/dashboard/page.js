"use client";
import Navigation from "../(components)/navigation/navigation";
import Title from "../(components)/title/title";
import Card from "../(components)/card/card";

import useSWR from "swr";

export default function Dashboard() {
  return (
    <>
      <NavigationRender />
      <Title title="Overview" />
      <CardRender />
    </>
  );
}

function NavigationRender() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("/api/navigation", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const navigationList = data;

  return <Navigation navigationList={navigationList} />;
}

function CardRender() {
  let cardList = [
    <div>1</div>,
    <div>2</div>,
    <div>3</div>,
    <div>4</div>,
    <div>5</div>,
    <div>6</div>,
  ];
  return (
    <div className="grid grid-cols-3 gap-4 mt-6">
      {cardList && cardList.map((item) => <Card key={item.id}>{item}</Card>)}
    </div>
  );
}
