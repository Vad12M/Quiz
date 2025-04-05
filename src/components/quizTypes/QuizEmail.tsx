import Loader from "@/ui/Loader";
import Typography from "@/ui/Typography";
import { useState } from "react";
import Button from "@/ui/Button";
import Input from "@/ui/input/Input";
import { validateEmail } from "@/services/validators/baseValidators";

interface IProps {
  title: string;
  description: string;
  subDescription: string;
  onSelect?: (value: string) => void;
}

export default function QuizEmail({
  title,
  description,
  subDescription,
  onSelect
}: IProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string>('');

  const handleBlur = () => {
    setError(validateEmail(email));
  }

  const handleSubmit = () => {
    const validationError = validateEmail(email);
    setError(validationError);

    if (!validationError) {
      setEmail('');
      setError('');
      onSelect?.(email);
    }
  };

  return (
    <div className="bg-dark h-screen flex flex-col space-y-10 items-center justify-center">
      {isLoading ?
        (
          <>
            <Loader onLoaded={() => setIsLoading(false)}/>
            <Typography type={'headlineSB'} text={'Finding collections for you...'}/>
          </>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSubmit()
            }}
            className="md:max-w-[500px] w-[90%] h-full md:pt-0 pt-[40%] pb-10 flex flex-col items-center md:justify-center justify-between"
          >
            <div className="flex flex-col items-center w-full">
              <Typography type={'title3'} text={title} className='text-center w-[90%] mb-5'/>
              <Typography type={'headlineR'} text={description} className="text-lightGray text-center mb-20"/>
              <Input
                placeholder={'Your email'}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setError('')
                }}
                invalid={!!error}
                onBlur={handleBlur}
                className="mb-14"
                validationHint={error}
              />
              <Typography
                type={'caption1SB'}
                htmlText={subDescription}
                className="text-center mb-14"
              />
            </div>
            <Button label={'Next'} type={'submit'} isDisabled={!email}/>
          </form>
        )
      }
    </div>
  )
}
