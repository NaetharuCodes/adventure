import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="flex justify-center w-full pt-8 text-justify">
      <div className="max-w-[600px]">
        <div className="p-2">
          Adventure is a web based adventure game inspired by classic text
          adventures from the 1980s.
        </div>
        <div className="p-2">
          In adventure you take control of a character and lead them to explore
          a rich world.
        </div>
      </div>
    </div>
  );
}
