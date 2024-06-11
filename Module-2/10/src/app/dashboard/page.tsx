import DashboardView from "@/views/dashboard";
import Link from "next/link";
// import { useRouter } from "next/navigation";

export const dynamic: string = "auto";
export const dynamicParams: boolean = true;

export default function Dashboard() {
  //   const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Link href="/dashboard/settings">Settings</Link>
        <Link href="/">Home</Link>
        {/* <button onClick={() => router.push("/dashboard/settings")}>
          Settings Page
        </button> */}
        <DashboardView />
      </div>
    </main>
  );
}
