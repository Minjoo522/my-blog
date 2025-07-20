type Props = {
  label: string;
  selected: boolean;
  onClick: () => void;
};

export default function CategoryNavButton({ label, selected, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-md px-4 py-2 text-right transition-colors ${
        selected
          ? 'bg-gray-100 font-semibold text-black dark:bg-white dark:text-black'
          : 'text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
      }`}
    >
      {label}
    </button>
  );
}
