import Link from "next/link";

export const dynamic = "force-dynamic";
// export const fetchCache = "force-no-store";

export default async function Page() {
  const res = await fetch("http://localhost:3000/api");
  const { content } = await res.json();

  return (
    <div>
      <h1>Sub: {content}</h1>
      <div><Link href="/">Top</Link> / <Link href="/sub">Sub</Link></div>
    </div>
  );
}
