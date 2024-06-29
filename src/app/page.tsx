import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div style={{ fontSize: "20px" }}>
        Go to our <b>Testimonial</b> Site by clicking{" "}
        <Link href="/testimonial">here</Link>
      </div>
    </main>
  );
}
