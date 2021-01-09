import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

import ProcessDownload from "../../components/form/ProcessDownload";

const TvID = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Box margin="0 auto" width={["100%", "100%", "80%"]} alignSelf="center">
      {id && <ProcessDownload postURL={`https://instagram.com/p/${id}`} />}
    </Box>
  );
};

export default TvID;
