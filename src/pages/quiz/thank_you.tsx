import Button from "@/ui/Button";
import Typography from "@/ui/Typography";
import useDownloadCSV from "@/hooks/useDownloadCSV";
import { useRouter } from "next/router";
import { clearQuizData, fetchQuizThankYouConfig } from "@/services/fakeApi";
import { useEffect, useState } from "react";
import { IThankYouConfig } from "@/interfaces/IThankYouConfig";
import useLanguage from "@/hooks/useLanguage";

export default function ThankYou() {
  const router = useRouter();
  const { downloadCSV } = useDownloadCSV();
  const { getTranslation } = useLanguage();
  const [thankYouConfig, setThankYouConfig] = useState<IThankYouConfig>();

  useEffect(() => {
    fetchQuizThankYouConfig().then((res) => {
      if (res) {
        setThankYouConfig(res);
      }
    })
  }, []);

  const retakeQuiz = () => {
    clearQuizData().then(() => {
      router.push('/quiz/1')
    })
  }

  if (!thankYouConfig) {
    return null
  }

  const { title, downloadLabel, retakeLabel, description } = thankYouConfig;

  return (
    <div className="h-screen flex flex-col items-center md:pt-0 pt-[40%] px-5">
      <div className="md:w-[500px] w-full h-full flex flex-col items-center md:justify-center justify-between pb-10">
        <div className="flex flex-col items-center md:mb-20">
          <div className="flex flex-col items-center space-y-2 mb-20">
            <Typography type={'niconne1'} text={getTranslation(title)}/>
            <Typography type={'headlineSB'} text={getTranslation(description)}/>
          </div>
          <img src={'/images/checkmark.png'} alt={'checkmark'}/>
        </div>
        <div className="flex flex-col items-center space-y-8 w-full">
          <button onClick={downloadCSV} className="flex items-center space-x-2">
            <img src={'/images/download.svg'} alt={'checkmark'}/>
            <Typography type={'headlineSB'} text={getTranslation(downloadLabel)}/>
          </button>
          <Button label={getTranslation(retakeLabel)} onClick={retakeQuiz}/>
        </div>
      </div>
    </div>
  )
}
