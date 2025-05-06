import ShareableBadge from "./ShareableBadge";

interface PostMetaProps {
  title: string;
  date: string;
  extra?: string;
  titleSizeClass?: string;
  dateSizeClass?: string;
  extraSizeClass?: string;
  category?: string;
}

export default function PostMeta({
  title,
  date,
  extra,
  titleSizeClass = "text-lg",
  dateSizeClass = "text-sm",
  extraSizeClass = "text-sm",
  category,
}: PostMetaProps) {
  return (
    <div className="space-y-1">
      {category && <ShareableBadge text={category} />
    }
      <h3
        className={`${titleSizeClass} font-semibold leading-snug group-hover:underline`}
      >
        {title}
      </h3>
      <p className={`${dateSizeClass} text-muted-foreground`}>{date}</p>
      {extra && (
        <p className={`${extraSizeClass} text-muted-foreground`}>
          {extra.slice(0, 200)}
        </p>
      )}
    </div>
  );
}
