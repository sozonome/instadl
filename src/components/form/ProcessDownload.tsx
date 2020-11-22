import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";

import Gallery, { MediaType } from "../media/Gallery";
import { RawResponseType } from "../../../types/rawResponseType";

type ProcessDownloadProps = {
  postURL: string;
};

const ProcessDownload = ({ postURL }: ProcessDownloadProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorDL, setErrorDL] = useState<boolean>(false);

  const [media, setMedia] = useState<Array<MediaType>>();
  const [username, setUsername] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");

  const getMedia = async () => {
    setErrorDL(false);
    setLoading(true);
    setMedia(null);

    const fetchedData = await axios
      .get(`${postURL}?__a=1`)
      .then((res) => res.data as RawResponseType)
      .catch(() => setErrorDL(true));

    setLoading(false);

    if (fetchedData) {
      const {
        edge_sidecar_to_children,
        owner,
        display_resources,
        is_video,
        video_url,
      } = fetchedData.graphql.shortcode_media;

      if (edge_sidecar_to_children) {
        const medias: MediaType[] = edge_sidecar_to_children.edges.map(
          (edge) => ({
            url: edge.node.is_video
              ? edge.node.video_url
              : edge.node.display_resources[2].src,
            is_video: edge.node.is_video,
            restricted: false,
          })
        );
        setMedia(medias);
      } else {
        const updateMedia: MediaType[] = is_video
          ? [
              {
                url: video_url,
                is_video,
                restricted: false,
              },
            ]
          : [
              {
                url: display_resources[2].src,
                is_video,
                restricted: false,
              },
            ];
        setMedia(updateMedia);
      }

      setUsername(owner.username);
      setFullName(owner.full_name);
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

      {media && (
        <Gallery media={media} username={username} fullName={fullName} />
      )}
    </>
  );
};

export default ProcessDownload;
