export default function Home() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1>IP Ventures</h1>
      <p style={{ maxWidth: "600px", marginTop: "1rem", fontSize: "1.125rem" }}>
        A global creative studio building IP-native brands. We craft stories,
        worlds, and experiences that live across every medium.
      </p>
    </section>
  );
}
