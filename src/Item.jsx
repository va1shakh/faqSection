import { useState } from "react";

function Item({ title, desc }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="flex flex-col bg-white/90 drop-shadow-2xl border-2 p-5 border-white/90 my-2 gap-3 rounded-2xl cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between">
        <p className="font-bold text-lg">{title}</p>
        <button className="cursor-pointer text-2xl text-orange-600">
          {isOpen ? "^" : "v"}
        </button>
      </div>
      {isOpen ? <p className="font-mono text-md">{desc}</p> : ""}
    </div>
  );
}
export default Item;
