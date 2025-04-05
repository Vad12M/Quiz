import TickIcon from "@/ui/icons/TickIcon";

interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export default function Checkbox({ checked, onChange }: CheckboxProps) {
  return (
    <label className="flex items-center space-x-3 cursor-pointer text-white">
      <div
        className={`w-6 h-6 rounded-[8px] flex items-center justify-center border-2 border-primary ${
          checked ? "bg-primary" : "bg-white bg-opacity-20"
        }`}
        onClick={() => onChange?.(!checked)}
      >
        {checked && <TickIcon/>}
      </div>
    </label>
  );
}
