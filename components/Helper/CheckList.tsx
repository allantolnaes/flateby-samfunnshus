import React from "react";
import CheckItem from "./CheckItem";

interface CheckListProps {
  items: string[];
}

const CheckList: React.FC<CheckListProps> = ({ items }) => (
  <div className="mt-8">
    {items.map((item, index) => (
      <CheckItem key={index} label={item} />
    ))}
  </div>
);

export default CheckList;
