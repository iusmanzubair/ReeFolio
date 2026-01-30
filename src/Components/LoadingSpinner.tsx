import { useState, useEffect } from "react";
import {
  Loader2,
  Palette,
  Image,
  CheckCircle,
} from "lucide-react";

export interface LoadingMessage {
  text: string;
  icon: React.ElementType;
}

interface LoadingSpinnerProps {
  loadingMessages?: LoadingMessage[];
}

export default function LoadingSpinner({
  loadingMessages,
}: LoadingSpinnerProps) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [dots, setDots] = useState("");

  const defaultMessages = [
    { text: "Loading themes", icon: Palette },
    { text: "Processing assets", icon: Image },
    { text: "Almost there", icon: CheckCircle },
  ];

  const messages =
    loadingMessages && loadingMessages.length > 0
      ? loadingMessages
      : defaultMessages;

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) =>
        prevIndex === messages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(messageInterval);
  }, [messages.length]);

  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots((prev) => {
        if (prev === "...") return "";
        return prev + ".";
      });
    }, 500);

    return () => clearInterval(dotsInterval);
  }, []);

  const { text, icon: Icon } = messages[currentMessageIndex];

  return (
    <div className="main-bg-noise h-screen ">
      <div
      style={{
        backgroundImage: `radial-gradient(circle at 50% 0%, transparent 50%)`,
      }}
      className="fixed inset-0 flex items-center justify-center "
    >
      <div className="bg-transparent p-8 rounded-lg flex flex-col items-center">
        <div className="relative mb-4">
          <Loader2
            className="h-16 w-16 text-primary animate-spin"
            style={{ color: "#50a8ff" }}
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <Icon className="h-8 w-8 opacity-90" style={{ color: "#50a8ff" }} />
          </div>
        </div>

        <div className="mt-4 text-center">
          <div className="text-xl font-medium text-white">Reefolio</div>
          <div className="flex items-center justify-center mt-2">
            <span className="text-white">
              {text}
              {dots}
            </span>
          </div>
        </div>

        <div className="w-64 h-3 bg-white bg-opacity-20 rounded-full mt-6 overflow-hidden">
          <div
            className="h-full rounded-full animate-pulse"
            style={{
              width: `${(currentMessageIndex + 1) * (100 / messages.length)}%`,
              backgroundColor: "#50a8ff",
            }}
          ></div>
        </div>
      </div>
    </div>
    </div>
  );
}