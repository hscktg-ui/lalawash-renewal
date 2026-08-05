type Item = {
  title: string
  image: string
  caption?: string
  /** 배경이 없는 장비 사진은 잘리지 않도록 contain으로 표시한다 */
  fit?: 'cover' | 'contain'
}

type Props = {
  items: Item[]
  columns?: 2 | 3
  className?: string
}

export function PhotoGallery({ items, columns = 3, className = '' }: Props) {
  return (
    <div
      className={`grid gap-5 sm:grid-cols-2 ${columns === 3 ? 'lg:grid-cols-3' : ''} ${className}`}
    >
      {items.map((item) => (
        <figure
          key={item.title}
          className="group overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-lg hover:ring-lala-200"
        >
          <div
            className={`aspect-[4/3] overflow-hidden ${
              item.fit === 'contain' ? 'bg-slate-50 p-6' : 'bg-slate-100'
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              decoding="async"
              className={`h-full w-full transition duration-500 group-hover:scale-[1.03] ${
                item.fit === 'contain' ? 'object-contain' : 'object-cover'
              }`}
            />
          </div>
          <figcaption className="px-5 py-4">
            <p className="text-sm font-bold text-ink">{item.title}</p>
            {item.caption && (
              <p className="mt-1 text-sm leading-relaxed text-muted">{item.caption}</p>
            )}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
