import React from "react";
import "./App.css";

function App() {
  const cardData = [
    {
      title: "Web Development",
      text: "Build modern websites using HTML, CSS, JavaScript and React.",
      icon: "🌐"
    },
    {
      title: "Machine Learning",
      text: "Analyze data and build intelligent models using Python.",
      icon: "🤖"
    },
    {
      title: "Cloud Computing",
      text: "Deploy and manage applications using cloud platforms.",
      icon: "☁️"
    }
  ];

  return (
    <div className="page-bg">
      <div className="container py-5">
        <h2 className="text-center title mb-5">
          Experiment–2: Card-Based Layout Using Bootstrap
        </h2>

        <div className="row">
          {cardData.map((card, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card custom-card h-100">
                <div className="card-body text-center">
                  <div className="icon">{card.icon}</div>
                  <h5 className="card-title mt-3">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                  <button className="btn btn-outline-primary mt-2">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;