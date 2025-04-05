const styles = {
  title3: 'font-bold text-[28px] leading-[34px] tracking-[-1%]',
  headlineR: 'text-[17px] leading-[24px] tracking-[-1%]',
  headlineSB: 'text-[17px] font-semibold leading-[24px] tracking-[-1%]',
  caption1SB: 'text-[13px] font-semibold leading-[16px] tracking-[-1%]',
  subtitle1: 'text-[15px] font-semibold leading-[20px] tracking-[-1%]',
  niconne1: 'text-[36px] font-normal leading-[100%] tracking-0 font-niconne',
};

interface IProps {
  type: keyof typeof styles;
  text?: string | number;
  htmlText?: string
  className?: string;
}

const Typography = ({ text, type, className, htmlText }: IProps) => {
  const style = styles[type]
  return (
    <span className={`${className} ${style}`} dangerouslySetInnerHTML={htmlText ? { __html: htmlText } : undefined}>
      {text}
    </span>
  );
};

export default Typography;

