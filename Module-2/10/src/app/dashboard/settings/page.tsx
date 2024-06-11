import Link from "next/link";

interface IDog {
  message: string;
  status: string;
}
// export async function generateMetada({})

async function getData() {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random", {
      method: "GET",
      // cache: "no-store",
      next: {
        revalidate: 3600,
      },
    });

    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch Data");
  }
}

export default async function Settings() {
  const data: IDog = await getData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1>Dashboard/Settings Page</h1>
        <p>{data?.status}</p>
        <p>{data?.message}</p>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </main>
  );
}
