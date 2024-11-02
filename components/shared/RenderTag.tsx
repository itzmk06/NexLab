import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Props {
  name: string;
  _id: string;
  totalQuestions?: number;
  showCount?: boolean;
}

export default function RenderTag({
  name,
  _id,
  totalQuestions,
  showCount,
}: Props) {
  return (
    <Link href={`/tags/${_id}`} className="flex justify-between">
      <Badge className="subtle-medium background-light900_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
        {name}
      </Badge>
      <div>
        {showCount && (
          <p className="small-medium text-dark500_light700">{totalQuestions}</p>
        )}
      </div>
    </Link>
  );
}
