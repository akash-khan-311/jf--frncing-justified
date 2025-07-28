const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="px-8 py-2 text-lg bg-[#b0dd1d] mt-6 hover:bg-[#9abd73] rounded-full cursor-pointer transition-colors duration-300">
      {children}
    </button>
  );
};

export default Button;