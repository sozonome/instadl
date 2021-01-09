import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";

import Gallery from "../media/Gallery";

import { MediaType, OwnerType, PostRes } from "../../../types/post";
import { RawResponseType } from "../../../types/rawResponseType";

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
      .get(`${(postURL as string).split("?")[0]}`, { params: { __a: 1 } })
      .then(
        ({
          data: {
            graphql: { shortcode_media },
          },
        }: {
          data: RawResponseType;
        }) => {
          const {
            edge_sidecar_to_children,
            owner: fetchedOwner,
            display_resources,
            is_video,
            video_url,
          } = shortcode_media;

          let medias: MediaType[] = [];

          if (edge_sidecar_to_children) {
            medias = edge_sidecar_to_children.edges.map((edge) => ({
              url: edge.node.is_video
                ? edge.node.video_url
                : edge.node.display_resources[2].src,
              is_video: edge.node.is_video,
            }));
          } else {
            medias = is_video
              ? [
                  {
                    url: video_url,
                    is_video,
                  },
                ]
              : [
                  {
                    url: display_resources[2].src,
                    is_video,
                  },
                ];
          }

          const owner: OwnerType = {
            fullName: fetchedOwner.full_name,
            username: fetchedOwner.username,
            profilePicUrl: fetchedOwner.profile_pic_url,
          };

          return {
            post: medias,
            owner,
          };
        }
      )
      .catch(() => setErrorDL(true));

    setLoading(false);

    if (fetchedData) {
      setEntry(fetchedData);
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
