function Tag({ text, active }) {
  return (
    <span
      className={`cursor-pointer rounded-lg border border-neutral p-2 py-1 transition ${active ? "border-white bg-white text-black" : "hover:border-white hover:bg-white hover:text-black"}`}
    >
      {text}
    </span>
  );
}

export default function TagsSection({ tags }) {
  return (
    <div className="no-scrollbar relative z-[2] flex w-full items-center gap-2 overflow-auto bg-base-100">
      {tags.map((tag) => (
        <Tag key={tag.id} {...tag} />
      ))}
    </div>
  );
}
