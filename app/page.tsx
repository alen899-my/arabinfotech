"use client";

import Image from "next/image";
import back from "@/public/back.jpg";
import Link from "next/link";
import Hero from "@/pages/Hero"
import OurWorks from  "@/pages/OurWorks"
import Office from "@/pages/Office"
export default function Home() {
  return (
    /* HERO SECTION */
    <div >
      <Hero/>
      <OurWorks/>
      <Office/>
    </div>
  );
}
