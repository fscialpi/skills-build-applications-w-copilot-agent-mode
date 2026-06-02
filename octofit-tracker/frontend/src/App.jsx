import { Route, Routes, Link } from 'react-router-dom';

function Home() {
  return (
    <main className="app-shell">
      <section className="hero-card container py-4 py-md-5">
        <div className="row align-items-center g-4">
          <div className="col-lg-7">
            <span className="eyebrow">OctoFit Tracker</span>
            <h1 className="display-4 fw-bold mt-3">
              A focused foundation for fitness logging, teams, and competition.
            </h1>
            <p className="lead mt-3 mb-4 text-body-secondary">
              This starter is wired for the full multi-tier stack: React 19 with Vite on the
              frontend, Express and TypeScript on the backend, and MongoDB with Mongoose for data.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Link to="/" className="btn btn-dark btn-lg px-4">
                View dashboard
              </Link>
              <a className="btn btn-outline-dark btn-lg px-4" href="#modules">
                Explore modules
              </a>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="logo-panel shadow-sm">
              <img
                src="/octofitapp-small.png"
                alt="OctoFit Tracker logo"
                className="img-fluid rounded-4"
              />
              <div className="mt-3 small text-uppercase text-body-secondary tracking-wide">
                Public presentation tier on port 5173
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="modules" className="container pb-5">
        <div className="row g-4">
          <div className="col-md-4">
            <article className="feature-card h-100">
              <h2 className="h5">Activity logging</h2>
              <p className="mb-0 text-body-secondary">
                Record workouts, progress, and consistency in a structured flow.
              </p>
            </article>
          </div>
          <div className="col-md-4">
            <article className="feature-card h-100">
              <h2 className="h5">Team competition</h2>
              <p className="mb-0 text-body-secondary">
                Organize groups, compare progress, and build a competitive leaderboard.
              </p>
            </article>
          </div>
          <div className="col-md-4">
            <article className="feature-card h-100">
              <h2 className="h5">Workout guidance</h2>
              <p className="mb-0 text-body-secondary">
                Prepare the app for personalized suggestions powered by API-backed data.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;