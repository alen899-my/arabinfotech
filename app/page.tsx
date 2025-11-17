"use client";

import Image from "next/image";
import back from "@/public/back.jpg";
import Link from "next/link";
import Hero from "@/pages/Hero"
import OurWorks from  "@/pages/OurWorks"
export default function Home() {
  return (
    /* HERO SECTION */
    <div >
      <Hero/>
      <OurWorks/>
    </div>
  );
}
