import Card from "./Card";
import { options } from "./constants";
import React from "react";

export default {
  title: "Card",
  component: Card,
};

export const Default = () => <Card />;

export const Colors = () => {
  return options?.colors?.map((color, index) => (
    <Card color={color} key={index} />
  ));
};

export const Sizes = () => {
  return options?.sizes?.map((size, index) => <Card size={size} key={index} />);
};
