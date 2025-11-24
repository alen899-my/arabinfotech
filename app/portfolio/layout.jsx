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

       
        <header
  className="
    w-full
    bg-black
    border-b border-neutral-300
  fixed top-0 z-40
    mt-20
    px-6 py-4
    flex flex-col sm:flex-row       /* 👉 mobile = column, desktop = row */
    sm:items-center sm:justify-between
    gap-3                            /* space between title + select on mobile */
  "
>
  {/* TITLE */}
 

  {/* DESKTOP TABS (Same line) */}
  <div className="hidden sm:block">
    <TabBar desktopOnly />
  </div>

  {/* MOBILE SELECT (2nd row) */}
  <div className="sm:hidden w-full">
    <TabBar mobileOnly />
  </div>
</header>


        {/* PAGE CONTENT */}
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
