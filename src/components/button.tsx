export default function Button({
    children,
    onClick,
}: {
    children: React.ReactNode;
    onClick: () => void;
}) {
    return (
        <button
            className="px-4 py-2 bg-white hover:bg-[#93C5FD] transition-colors text-black rounded-md shadow border-2 border-black tracking-wider"
            onClick={onClick}
        >
            {children}
        </button>
    );
}
