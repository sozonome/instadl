import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";

import UserGallery from "../media/UserGallery";

import { SingleProfileRes } from "../../../types/singleprofile";
import { RawSingleProfile } from "../../../types/rawSingleProfileType";

export type ProcessUsernameProps = {
  username: string;
  onSelectPost: (postId: string) => void;
};

const ProcessUsername = ({ username, onSelectPost }: ProcessUsernameProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorDL, setErrorDL] = useState<boolean>(false);

  const [entry, setEntry] = useState<any>();

  const getMedia = async () => {
    setErrorDL(false);
    setLoading(true);
    setEntry(null);

    const fetchedData = await axios
      .get(`https://www.instagram.com/${username}`, { params: { __a: 1 } })
      .then(
        ({
          data: {
            graphql: {
              user: {
                edge_owner_to_timeline_media: { edges },
                is_private,
                full_name,
                profile_pic_url,
                username,
              },
            },
          },
        }: {
          data: RawSingleProfile;
        }) => {
          const posts: SingleProfileRes["posts"] = edges.map(({ node }) => ({
            url: `https://www.instagram.com/p/${node.shortcode}`,
            isMultipost: node.edge_sidecar_to_children ? true : false,
            thumbnail: node.thumbnail_src,
          }));

          const owner: SingleProfileRes["owner"] = {
            isPrivate: is_private,
            fullName: full_name,
            profilePicUrl: profile_pic_url,
            username,
          };

          return {
            posts,
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
  }, [username]);

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
          Invalid username
        </Text>
      )}

      {entry && <UserGallery entry={entry} onSelectPost={onSelectPost} />}
    </>
  );
};

export default ProcessUsername;
