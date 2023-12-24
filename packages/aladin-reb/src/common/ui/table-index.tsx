import { useSearchParams } from "react-router-dom";

import parseDec from "@/utils/parse-dec";

type Props = {
  index: number;
  pageSize: number;
  skip?: number;
};

export default function TableIndex({ index, pageSize = 10, skip = 1 }: Props) {
  const [searchParams] = useSearchParams();

  return <>{index + pageSize * (parseDec(searchParams.get("page")) - 1) + skip}</>;
}
