"use client";

import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";

const CtaBanner = () => {
  return (
   
   <div className="max-w-5xl mx-auto px-6 relative z-20 mt-10 ">
                      <div className="bg-white rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] p-10 md:p-5 text-center border border-slate-100 relative overflow-hidden">
                        
                        {/* Top Gradient Line Accent */}
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#6c53a7] via-[#ae5c83] to-[#6c53a7]" />
                    
                        {/* Background Pattern (Optional) */}
                        <div className="absolute inset-0 bg-[radial-gradient(#6c53a7_0.5px,transparent_0.5px)] [background-size:16px_16px] opacity-[0.03]" />
                    
                        <div className="relative z-10">
                          <h2 className="text-3xl md:text-5xl momo-font font-extrabold text-slate-900 tracking-tight mb-2">
                            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6c53a7] to-[#ae5c83]">Solutions</span>
                          </h2>
                    
                          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto roboto-text mb-4 leading-relaxed">
                            Discover a variety of innovative digital tools tailored to elevate
                            your business performance.
                          </p>
                    
                          <div className="flex justify-center">
                            <Link
                              href="/portfolio/featured"
                              className="
                                group
                                flex items-center gap-3
                                pl-8 pr-6 py-4
                                rounded-lg
                               bg-gradient-to-r from-[#ae5c83] to-[#5b4390]
              shadow-[0_10px_25px_rgba(174,92,131,0.35)]
              hover:shadow-[0_15px_30px_rgba(91,67,144,0.45)]
              hover:scale-[1.06]
              transition-all duration-300 ease-out
              backdrop-blur-md momo-font text-white
                              "
                            >
                              <span>View Portfolio</span>
                              <div className="bg-white/20 p-1 rounded-full group-hover:translate-x-1 transition-transform">
                                 {/* Assuming you have lucide-react imported */}
                                
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
  );
};

export default CtaBanner;