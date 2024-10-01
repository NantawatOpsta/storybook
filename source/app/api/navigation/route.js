import { NextResponse } from "next/server";

export async function GET(request) {
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
  return NextResponse.json(navigationList, { status: 200 });
}
