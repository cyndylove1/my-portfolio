interface InputProps {
  type?: string;
  placeholder?: string;
}
export default function Input({ placeholder, type }: InputProps) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        required
        className="h-[44px] w-full border-(--accent) text-[14px] mt-[5px] mb-[10px] outline-none focus:border-(--accent) text-white border-[1px] rounded-[8px] px-4"
      />
    </>
  );
}
