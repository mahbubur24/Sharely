import { Badge } from "@/components/ui/badge";

interface ShareableBadgeProps {
  text: string;
}

export default function ShareableBadge({ text }: ShareableBadgeProps) {
  return (
    <Badge className="badge text-sm text-red-500 font-semibold uppercase bg-transparent hover:bg-transparent">
      {text}
    </Badge>
  );
}
