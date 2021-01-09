import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";

import Gallery from "../media/Gallery";

import { PostRes } from "../../../types/post";

type ProcessDownloadProps = {
  postURL: string;
};

const ProcessDownload = ({ postURL }: ProcessDownloadProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorDL, setErrorDL] = useState<boolean>(false);

  const [entry, setEntry] = useState<PostRes>();

  const getMedia = async () => {
    setErrorDL(false);
    setLoading(true);
    setEntry(null);

    const fetchedData = await axios
      .get(`/api/post`, { params: { url: postURL } })
      .then((res) => res.data as PostRes)
      .catch(() => setErrorDL(true));

    setLoading(false);

    if (fetchedData) {
      setEntry(fetchedData);
    } else {
      setErrorDL(true);
    }
  };

  useEffect(() => {
    getMedia();
  }, [postURL]);

  return (
    <>
      {loading && (
        <Box textAlign="center" marginY={4}>
          <Heading size="md">Please Wait...</Heading>
          <Spinner size="xl" thickness="0.5rem" />
        </Box>
      )}
      {errorDL && (
        <Text marginY={4} fontSize="lg" textAlign="center" color="red.500">
          Invalid Link
        </Text>
      )}

      {entry && <Gallery entry={entry} />}
    </>
  );
};

export default ProcessDownload;
