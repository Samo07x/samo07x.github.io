function Home() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img  src="https://i.ibb.co/M188KCx/samedprofil.jpg" alt="Samo" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold text-accent">Hi, I'm Abdussamed Sen</h1>
            <p className="py-6">I'm a modern work consultant at IT-Improvement, specializing in driving digital transformation and improving organizational efficiency. With a deep understanding of technology and business processes, I help companies optimize their workflows and achieve their strategic goals.</p>
            <a href="/contact" className="btn btn-info mb-5">Contact Me</a></div>
        </div>
      </div>
    </>
  )
}

export default Home