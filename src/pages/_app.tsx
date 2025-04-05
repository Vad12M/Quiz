import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { fetchQuizBranchingRules, fetchQuizThankYouConfig, initializeQuestions } from "@/utils/initializeData";

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    initializeQuestions();
    fetchQuizBranchingRules();
    fetchQuizThankYouConfig();
  }, []);

  return (
    <div className="bg-dark w-full">
      <Component {...pageProps} />
    </div>
  );
}
