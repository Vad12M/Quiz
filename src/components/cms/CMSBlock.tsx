import Input from "@/ui/input/Input";

interface IProps {
  title?: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CMSInputField({
  title,
  value,
  placeholder,
  onChange,
}: IProps) {
  return (
    <div className="mb-4">
      {title && <label className="font-semibold">{title}</label>}
      <Input
        isWhiteBorder
        className="mt-2"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

