import "../globals.css";
import TabBar from "./TabBar";

export const metadata = {
  title: "Portfolio",
};

export default function PortfolioLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/styles/fonts.css" />
      </head>
      <body className="bg-neutral-950 text-white">

       
<header className="fixed top-20 bg-black  left-0 w-full z-40">
  <div className="sm:block hidden">
    <TabBar desktopOnly />
  </div>

  <div className="sm:hidden block px-6 py-4 bg-black border-b border-neutral-300">
    <TabBar mobileOnly />
  </div>
</header>



        {/* PAGE CONTENT */}
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
