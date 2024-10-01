import Card from "./card";
import Button from "../button/button";

export default {
  component: Card,
  title: "Components/Card",
};

export const Default = {
  args: {
    children: (
      <div className="">
        <div className="text-lg font-bold">Title</div>
        <div className="pb-2">message</div>
        <Button title="Accept" status="black" />
      </div>
    ),
  },
};
