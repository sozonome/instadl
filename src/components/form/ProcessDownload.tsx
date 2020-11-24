import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";

import Gallery, { MediaType } from "../media/Gallery";
import { Owner, RawResponseType } from "../../../types/rawResponseType";

type ProcessDownloadProps = {
  postURL: string;
};

type OwnerType = Pick<Owner, "full_name" | "username" | "profile_pic_url">;

const ProcessDownload = ({ postURL }: ProcessDownloadProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorDL, setErrorDL] = useState<boolean>(false);

  const [media, setMedia] = useState<Array<MediaType>>();
  const [owner, setOwner] = useState<OwnerType>();

  const getMedia = async () => {
    setErrorDL(false);
    setLoading(true);
    setMedia(null);

    const fetchedData = await axios
      .get(`${postURL.split("?")[0]}?__a=1`)
      .then((res) => res.data as RawResponseType)
      .catch(() => setErrorDL(true));

    setLoading(false);

    if (fetchedData && fetchedData.graphql) {
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

      setOwner({
        full_name: owner.full_name,
        username: owner.username,
        profile_pic_url: owner.profile_pic_url,
      });
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

      {media && owner && (
        <Gallery
          media={media}
          username={owner.username}
          fullName={owner.full_name}
          profilePicUrl={owner.profile_pic_url}
        />
      )}
    </>
  );
};

export default ProcessDownload;