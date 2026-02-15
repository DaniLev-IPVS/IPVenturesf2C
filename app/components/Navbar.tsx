import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.5rem 2rem",
        borderBottom: "1px solid #e5e5e5",
      }}
    >
      <Link href="/" style={{ fontSize: "1.25rem", fontWeight: 700 }}>
        IP Ventures
      </Link>
      <div style={{ display: "flex", gap: "2rem" }}>
        <Link href="/">Home</Link>
        <Link href="/our-work">Our Work</Link>
        <Link href="/our-team">Our Team</Link>
      </div>
    </nav>
  );
}
