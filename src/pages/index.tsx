import { useRouter } from "next/router";
import Typography from "@/ui/Typography";
import Button from "@/ui/Button";
import { motion } from "framer-motion";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-dark text-white px-6 text-center pb-20">
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className={"flex flex-col items-center space-y-4"}
      >
        <Typography type="title3" text="Welcome to the Quiz"/>
        <Typography
          type="headlineR"
          text="Answer a few questions and find out something new about yourself."
          className="text-lightGray"
        />
      </motion.div>

      <motion.div
        className="flex space-x-5 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      >
        <Button
          label="Admin Panel"
          onClick={() => router.push("/cms/settings")}
          className='min-w-40 bg-transparent border border-primary hover:bg-primary'
        />
        <Button label="Start Quiz" onClick={() => router.push("/quiz/1")} className='min-w-40'/>
      </motion.div>
    </div>
  );
}
