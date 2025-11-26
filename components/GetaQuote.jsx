"use client";

import { MessageSquare } from "lucide-react";
import { useState } from "react";
import QuotePopup from "./QuotePopup";

export default function GetaQuote() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className=" bg-gradient-to-r from-[#ae5c83] to-[#8a4262] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl flex items-center gap-3 active:scale-95"
      >
        <span>Get a Quote</span>
        <MessageSquare size={20} />
      </button>

      <QuotePopup open={open} setOpen={setOpen} />
    </>
  );
}
