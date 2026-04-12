import { useState } from "react";

const App = () => {
  const [selected, setSelected] = useState({});

  const questions = [
    {
      id: 1,
      question: "Which sensor is used to measure sound intensity in decibels (dB)?",
      options: ["PIR Sensor", "Analog SPL Meter", "LDR", "DHT11"]
    },
    {
      id: 2,
      question: "Which technology detects stationary presence via micro-movements?",
      options: ["Ultrasonic", "Passive Infrared", "mmWave Radar", "Photoresistor"]
    }
  ];

  const handleSelect = (qid, opt) => {
    setSelected((prev) => ({ ...prev, [qid]: opt }));
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        
        {/* HEADER */}
        <header style={styles.header}>
          <div>
            <h1 style={styles.logo}>QUIZZLY <span style={styles.vTag}>V1</span></h1>
            <div style={styles.glowBar} />
          </div>
          <div style={styles.userInfo}>
            <p style={styles.userName}>Harshith B</p>
            <p style={styles.userId}>23MIS0012</p>
          </div>
        </header>

        {/* QUIZ AREA - Flex 1 ensures it fills space without overflowing */}
        <div style={styles.quizArea}>
          {questions.map((q) => (
            <div key={q.id} style={styles.qCard}>
              <h2 style={styles.qTitle}>
                <span style={styles.qNum}>{q.id.toString().padStart(2, '0')}</span> 
                {q.question}
              </h2>
              <div style={styles.optGrid}>
                {q.options.map((opt) => {
                  const isActive = selected[q.id] === opt;
                  return (
                    <button
                      key={opt}
                      onClick={() => handleSelect(q.id, opt)}
                      style={{ ...styles.optBtn, ...(isActive ? styles.optActive : {}) }}
                    >
                      <div style={{ ...styles.dot, borderColor: isActive ? "#818cf8" : "#334155" }}>
                        {isActive && <div style={styles.dotInner} />}
                      </div>
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <footer style={styles.footer}>
          <button 
            onClick={() => alert("Submission Successful!")} 
            style={styles.submitBtn}
          >
            Finish Attempt
          </button>
        </footer>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "#020617",
    color: "#f1f5f9",
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    display: "flex",
    justifyContent: "center",
    overflow: "hidden", // Prevents container scroll
    margin: 0,
  },
  wrapper: {
    width: "100%",
    maxWidth: "850px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "20px 30px",
    boxSizing: "border-box",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0 25px 0",
  },
  logo: { fontSize: "20px", fontWeight: "900", margin: 0, letterSpacing: "-0.5px" },
  vTag: { color: "#6366f1", fontSize: "11px", fontWeight: "bold" },
  glowBar: { height: "3px", width: "30px", background: "#6366f1", marginTop: "4px", borderRadius: "10px", boxShadow: "0 0 12px #6366f1" },
  userInfo: { textAlign: "right" },
  userName: { fontSize: "13px", fontWeight: "600", margin: 0, color: "#f1f5f9" },
  userId: { fontSize: "11px", color: "#64748b", margin: 0 },
  
  quizArea: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    minHeight: 0, // Critical to prevent flex-item overflow
    paddingBottom: "10px",
  },
  qCard: {
    flex: 1,
    background: "linear-gradient(145deg, #0f172a 0%, #030816 100%)",
    border: "1px solid #1e293b",
    borderRadius: "20px",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    boxShadow: "0 10px 40px -20px rgba(0,0,0,0.5)",
  },
  qNum: { color: "#6366f1", marginRight: "12px", fontSize: "14px", fontWeight: "800" },
  qTitle: { fontSize: "17px", margin: "0 0 20px 0", fontWeight: "600", lineHeight: "1.5" },
  
  optGrid: { 
    display: "grid", 
    gridTemplateColumns: "1fr 1fr", 
    gap: "12px" 
  },
  optBtn: {
    all: "unset",
    padding: "14px 16px",
    background: "rgba(30, 41, 59, 0.3)",
    border: "1px solid #1e293b",
    borderRadius: "12px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
    transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    color: "#94a3b8",
  },
  optActive: { 
    borderColor: "#6366f1", 
    background: "rgba(99, 102, 241, 0.08)",
    color: "#fff",
    boxShadow: "0 0 20px -10px rgba(99, 102, 241, 0.4)",
  },
  dot: { width: "14px", height: "14px", border: "2px solid", borderRadius: "50%", marginRight: "12px", display: "flex", alignItems: "center", justifyContent: "center" },
  dotInner: { width: "7px", height: "7px", background: "#6366f1", borderRadius: "50%", boxShadow: "0 0 8px #6366f1" },
  
  footer: {
    padding: "15px 0",
    display: "flex",
    justifyContent: "center",
  },
  submitBtn: {
    all: "unset",
    background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
    padding: "14px 70px",
    borderRadius: "14px",
    fontWeight: "700",
    cursor: "pointer",
    fontSize: "15px",
    color: "white",
    boxShadow: "0 15px 25px -10px rgba(79, 70, 229, 0.4)",
    transition: "transform 0.2s ease",
  }
};

export default App;