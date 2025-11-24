import { Dialogue } from "@/components/ui/dialogue";
import { cn } from "@/lib/utils";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/game")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className={cn("flex flex-col items-center")}>
      <Dialogue
        currentText={[
          {
            text: "Ash walks across the room and leans close to the window. He pauses for a moment as he takes in the view of the wintery garden",
            type: "prose",
          },
          {
            text: "The weather is only going to get worse. A few more days and the snow will be so deep we'll be stuck here until the thaw",
            type: "dialogue",
          },
        ]}
        options={[
          "Choice 1",
          "Choice 2",
          "I'm not sure. The people of Northwold seem nice.",
        ]}
      />
    </div>
  );
}
