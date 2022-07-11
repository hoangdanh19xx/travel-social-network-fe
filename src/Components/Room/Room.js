import React from "react";
import RoomItem from "./RoomItem";

export const Room = () => {
  return (
    <div className="pb-10">
      <h2 className="text-5xl py-20 text-center font-bold">List Room</h2>
      <div className="flex justify-center items-center flex-wrap gap-10">
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
      </div>
    </div>
  );
};
