export default function SkillBox({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-3xl bg-white p-7 shadow-sm border border-gray-200">
      <p className="font-medium text-gray-900">{title}</p>
      <ul className="mt-4 space-y-1 text-sm text-gray-600">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
