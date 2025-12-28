export default function ProjectCard({
  title,
  desc,
  tags,
  github,
}: {
  title: string;
  desc: string;
  tags: string[];
  github: string;
}) {
  return (
    <div className="group rounded-3xl bg-white p-7 border border-gray-200 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <p className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition">
        {title}
      </p>

      <p className="mt-3 text-sm text-gray-600 leading-relaxed">
        {desc}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-block text-sm font-medium underline"
      >
        GitHub →
      </a>
    </div>
  );
}
