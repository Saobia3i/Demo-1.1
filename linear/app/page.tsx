import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ecdcdc, #f1e5e5, #deb2bb)",
        color: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          textAlign: "center",
        }}
      >
        {/* Heading */}
        <h1
          style={{
            fontSize: "clamp(48px, 8vw, 72px)",
            fontWeight: "800",
            letterSpacing: "-2px",
            marginBottom: "20px",
          }}
        >
          Linear AI
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontSize: "clamp(18px, 2.5vw, 22px)",
            opacity: 0.95,
            marginBottom: "40px",
            lineHeight: "1.6",
          }}
        >
          AI Automation is no longer optional — it is the foundation of modern
          business growth.
        </p>

        {/* Description Section */}
        <div
          style={{
            background: "rgba(255,255,255,0.1)",
            padding: "40px",
            borderRadius: "16px",
            backdropFilter: "blur(10px)",
          }}
        >
          <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
            Businesses today operate in a fast-moving digital economy where
            efficiency, speed, and data-driven decisions determine success.
            AI automation reduces operational costs, eliminates repetitive
            tasks, and allows teams to focus on strategic growth.
          </p>

          <p style={{ fontSize: "18px", lineHeight: "1.8", marginTop: "20px" }}>
            From automated customer support and intelligent workflow systems
            to predictive analytics and real-time decision making — AI
            transforms how companies scale. Organizations that integrate AI
            automation gain competitive advantage, improved productivity,
            and higher profitability.
          </p>

          <p style={{ fontSize: "18px", lineHeight: "1.8", marginTop: "20px" }}>
            Linear AI empowers businesses to build smarter systems,
            streamline processes, and create sustainable growth through
            intelligent automation.
          </p>
        </div>

        {/* CTA */}
        <button
          style={{
            marginTop: "40px",
            padding: "14px 32px",
            fontSize: "18px",
            fontWeight: "600",
            borderRadius: "50px",
            border: "none",
            cursor: "pointer",
            background: "white",
            color: "#b71c1c",
            transition: "all 0.3s ease",
          }}
        >
          Get Started
        </button>
      </div>
    </main>
  );
}
