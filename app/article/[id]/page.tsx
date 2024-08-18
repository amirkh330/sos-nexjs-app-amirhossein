import { Article } from "@/components/atricle/Article";
import { Box } from "@mui/material";

interface IParams {
  params: { id: number };
}

export default function ArticlePage({ params }: IParams) {
  return (
    <Box
      mt={{ xs: 2, md: 4 }}
      paddingX={{
        xs: "14px",
        md: "120px",
      }}
    >
      <Article index={params.id} />
    </Box>
  );
}
