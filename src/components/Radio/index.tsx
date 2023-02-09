export type RadioProps = {
  id: string;
  name: string;
  value: string;
  label: string;
  checked?: boolean;
};

const Radio = ({ id, name, value, label, checked }: RadioProps) => {
  return (
    <label className="inline-flex items-center gap-1 cursor-pointer">
      <input type="radio" name={name} id={id} defaultValue={value} defaultChecked={checked} />
      <span>{label}</span>
    </label>
  );
};

export default Radio;
