import { useQuery } from "@tanstack/react-query";
import { getFaqs } from "./api";
import Item from "./Item";
import { useState } from "react";
import clsx from "clsx";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [search, setSearch] = useState("");

  const { data: faqs = [] } = useQuery({
    queryKey: ["faqs", search],
    queryFn: () => getFaqs(search),
  });

  const filteredFaqs = faqs.filter((faq) => {
    return (
      faq.text.toLowerCase().includes(search.toLowerCase()) ||
      faq.desc.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div
      className={clsx(
        "min-h-screen p-5 flex flex-col gap-10 ",
        isDark ? "bg-[#000000]" : "bg-[#e0e0e0]",
      )}
    >
      <div className="flex justify-between sm: gap-5">
        <h1
          className={clsx(
            "font-bold text-5xl",
            isDark ? "text-white/90" : "text-black/90",
          )}
        >
          FAQ
        </h1>
        <input
          type="text"
          placeholder="Search..."
          className={clsx(
            "pl-5 border  sm:w-150 md:w-200 lg:w-200 text-sm md:text-2xl lg-text-4xl rounded-2xl",
            isDark
              ? "border-white/90 text-white"
              : "border-black/90 text-black",
          )}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className={clsx(
            "text-xl font-bold cursor-pointer",
            isDark ? "text-white" : "text-black]",
          )}
          onClick={() => setIsDark(!isDark)}
        >
          {isDark ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <div className="flex flex-col">
        {filteredFaqs?.map((item) => (
          <Item key={item.id} title={item.text} desc={item.desc} />
        ))}
      </div>
    </div>
  );
}
export default App;
