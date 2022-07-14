import React from "react";
import { Link } from "react-router-dom";

function RoomItem() {
  return (
    <div className="w-[396px] border-2 rounded-[8px] shadow-md">
      <div className="p-4 flex items-center">
        <img
          src="https://images.unsplash.com/photo-1656748145220-a78aa9c104ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Avatar"
          className="w-[64px] h-[64px] rounded-[50%]"
        />
        <div className="ml-4">
          <h3 className="text-[#2C3639] text-[18px] font-bold">
            Shrimp and Chorizo Paella
          </h3>
          <span className="text-[gray] text-xs">September 14, 2016</span>
        </div>
      </div>
      <div className="w-full">
        <img
          src="https://images.unsplash.com/photo-1655452591846-a182bd329835?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDUxfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Panama City Beach, FL, USA"
        />
      </div>
      <div className="p-4">
        <p className="text-[gray] text-[15px] mb-5">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </p>
        <div className="flex items-center">
          <p className="text-[gray] text-sm">
            time up: <span className="text-[#FF0063] text-lg">72:59:59</span>
          </p>
          <Link to="chat" className="ml-auto block px-10 py-2 border-1 text-white bg-[#3AB0FF] hover:bg-sky-700 rounded">
            Join
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RoomItem;
