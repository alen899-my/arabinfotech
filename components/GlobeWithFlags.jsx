<div className="w-full py-28 px-6 flex justify-center">
  <div className="max-w-7xl w-full">

    {/* TOP TITLE + TEXT */}
    <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
      <h1 className="text-white momo-font text-4xl md:text-5xl font-light leading-tight">
        Numbers that tell our story
      </h1>

      <p className="text-gray-300 text-lg leading-relaxed">
        Behind every number is a milestone — built through trust,
        innovation, and the success of our clients.
      </p>
    </div>

    {/* 2×2 GRID */}
    <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

      {/* STAT 1 */}
      <div className="backdrop-blur-xl border border-white/10 rounded-2xl p-10 text-center">
        <h1 className="text-white text-5xl font-light">
          {statsInView && <Counter from={0} to={10} />}+
        </h1>
        <p className="text-gray-400 mt-2">Years of Experience</p>
      </div>

      {/* STAT 2 */}
      <div className="backdrop-blur-xl border border-white/10 rounded-2xl p-10 text-center">
        <h1 className="text-white text-5xl font-light">
          {statsInView && <Counter from={0} to={25} />}+
        </h1>
        <p className="text-gray-400 mt-2">Associates</p>
      </div>

      {/* STAT 3 */}
      <div className="backdrop-blur-xl border border-white/10 rounded-2xl p-10 text-center">
        <h1 className="text-white text-5xl font-light">
          {statsInView && <Counter from={0} to={750} />}+
        </h1>
        <p className="text-gray-400 mt-2">Clients</p>
      </div>

      {/* STAT 4 */}
      <div className="backdrop-blur-xl border border-white/10 rounded-2xl p-10 text-center">
        <h1 className="text-white text-5xl font-light">
          {statsInView && <Counter from={0} to={2000} />}+
        </h1>
        <p className="text-gray-400 mt-2">Projects Delivered</p>
      </div>

    </div>
  </div>
</div>
