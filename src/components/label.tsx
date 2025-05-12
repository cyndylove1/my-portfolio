interface LabelProps {
  text?: string;
}
export default function Label({ text }: LabelProps) {
  return (
    <>
      <label htmlFor="" className="text-white text-[14px]">{text}</label>
    </>
  );
}
