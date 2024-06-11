"use client";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <>
      <p>An error occured: {error.message}</p>
      <button onClick={() => reset()}>Retry</button>
    </>
  );
}
