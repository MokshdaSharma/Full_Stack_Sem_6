import React from "react";
import "./App.css";

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand">Bootstrap UI</span>
        </div>
      </nav>

      {/* Content */}
      <div className="container mt-4">
        <h3 className="text-center mb-4">
          Designing UI Using Bootstrap Components
        </h3>

        <div className="row">
          {/* Card 1 */}
          <div className="col-md-4 mb-3">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">Buttons</h5>
                <p className="card-text">
                  Bootstrap offers responsive buttons.
                </p>
                <button className="btn btn-primary me-2">Primary</button>
                <button className="btn btn-secondary">Secondary</button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 mb-3">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">Cards</h5>
                <p className="card-text">
                  Cards are flexible UI components.
                </p>
                <button className="btn btn-success">Explore</button>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="col-md-4 mb-3">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">Contact Form</h5>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Name"
                />
                <input
                  type="email"
                  className="form-control mb-2"
                  placeholder="Email"
                />
                <button className="btn btn-warning w-100">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
