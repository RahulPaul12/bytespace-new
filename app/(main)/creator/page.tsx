const Creator = () => {
    return (
        <section className="bg-grid pt-30 sm:pt-40 pb-12 sm:pb-18 mb-9">
            <div className="container">
                <div className="flex items-center gap-5">
                    <div className="w-[66px] h-[66px] shrink-0 rounded-2xl bg-pink-300 overflow-hidden grid place-items-end justify-center">
                        <svg width="66" height="66" viewBox="0 0 66 66"><circle cx="33" cy="26" r="12" fill="#7c4a3a"/><path d="M8 66c0-14 11-22 25-22s25 8 25 22H8Z" fill="#1f2937"/></svg>
                    </div>
                    <div>
                        <div className="flex flex-wrap items-center gap-3">
                            <h1 className="font-head font-semibold text-2xl md:text-3xl">PurePearl Studio</h1>
                            <span className="bg-lime text-neutral-900 text-xs font-medium rounded-full px-4 py-1.5">Creator</span>
                        </div>
                        <p className="mt-1 text-sm text-white/85">Passionate UI/UX, Web designer</p>
                    </div>
                </div>
                <div className="mt-8 max-w-4xl text-sm leading-7 text-white/90">
                  <p>Welcome to the creative world of [Creator's Name]. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!</p>
                  <p>Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.</p>
                </div>
               <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                 <div className="flex flex-wrap gap-3">
                   <span className="bg-white text-neutral-900 text-sm rounded-full px-5 py-2.5"><b className="font-medium text-brand">3</b> Products</span>
                   <span className="bg-white text-neutral-900 text-sm rounded-full px-5 py-2.5"><b className="font-medium text-brand">12</b> Followers</span>
                 </div>
                 <button className="primary-btn">Follow</button>
               </div>
            </div>
        </section>
    )
}

export default Creator