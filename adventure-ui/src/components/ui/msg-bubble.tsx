import * as React from "react";
import { cn } from "@/lib/utils";

type MessageBubbleProps = {
  side: "left" | "right";
};

function MessageBubble({ side = "left" }: MessageBubbleProps) {
  return (
    <div
      className={cn("flex", side === "left" ? "justify-start" : "justify-end")}
    >
      <div
        className={cn(
          "rounded-lg p-2 m-2 text-black max-w-[70%]",
          side === "left" ? "bg-gray-200" : "bg-green-400"
        )}
      >
        Bubble
      </div>
    </div>
  );
}

export { MessageBubble };
