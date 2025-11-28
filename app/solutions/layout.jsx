import "../globals.css";
import AllSolutions from "@/components/AllSolutions";

export const metadata = {
  title: "Solutions",
};

export default function SolutionsLayout({ children }) {
  return (
    <div className="bg-[#FAFAFA] text-gray-900 min-h-screen flex flex-col">
      {/* <main> handles the page content. 
        'flex-grow' ensures the footer (AllSolutions) stays at the bottom if content is short.
      */}
      <main className="flex-grow w-full">
        {children}
      </main>

      {/* The AllSolutions component appears at the bottom of every page in this layout */}
      <AllSolutions />
    </div>
  );
}