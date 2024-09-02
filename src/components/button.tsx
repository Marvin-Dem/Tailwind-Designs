export default function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      className="px-4 py-2 bg-blue hover:bg-black transition-colors text-white rounded-md shadow"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
