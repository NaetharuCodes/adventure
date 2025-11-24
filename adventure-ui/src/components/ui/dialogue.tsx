import { cn } from "@/lib/utils";
import type { DialogueLine } from "@/types";

type DialogueProps = {
  currentText: DialogueLine[];
  options: string[];
};

function Dialogue({ currentText, options }: DialogueProps) {
  return (
    <div>
      <div className={cn("p-2 m-2 bg-gray-800 w-[600px]")}>
        {currentText.map((line, index) => (
          <p
            key={index}
            className={cn(
              "mt-4 mb-4 pl-4",
              line.type === "dialogue" && "italic text-cyan-300"
            )}
          >
            {line.type === "dialogue" && '"'}
            {line.text}
            {line.type === "dialogue" && '"'}
          </p>
        ))}
      </div>
      {options.map((option, index) => (
        <button
          key={index}
          className={cn(
            "p-2 m-2 bg-green-300 text-black rounded-lg flex gap-2 w-[600px] cursor-pointer hover:bg-green-500"
          )}
        >
          <div>{index}: </div>
          <div className={cn("ml-2")}>{option}</div>
        </button>
      ))}
    </div>
  );
}

export { Dialogue };
