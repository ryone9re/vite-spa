import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { get } from "../queries/get-json";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <ErrorBoundary fallback={<h1>Error!!!!!</h1>}>
        <Index />
      </ErrorBoundary>
    </Suspense>
  );
}

function Index() {
  const query = useSuspenseQuery({ queryKey: ["test"], queryFn: get });

  return (
    <>
      {query.data.map((v) => (
        <div key={v.id}>{`${v.userId} ${v.id} ${v.title} ${v.completed}`}</div>
      ))}
    </>
  );
}
