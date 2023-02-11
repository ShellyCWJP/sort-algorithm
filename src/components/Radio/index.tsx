export type RadioProps = {
  id: string;
  name: string;
  value: string;
  label: string;
  checked?: boolean;
  onClick?: () => void;
};

const Radio = ({ id, name, value, label, checked, onClick }: RadioProps) => {
  return (
    <label className="inline-flex items-center gap-1 cursor-pointer">
      <input
        type="radio"
        name={name}
        id={id}
        defaultValue={value}
        defaultChecked={checked}
        onClick={onClick}
      />
      <span>{label}</span>
    </label>
  );
};

export default Radio;
