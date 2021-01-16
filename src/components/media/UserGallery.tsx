import {
  Avatar,
  Badge,
  Box,
  Grid,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";

import { SingleProfileRes } from "../../../types/singleprofile";
import { ProcessUsernameProps } from "../form/ProcessUsername";

type UserGalleryProps = {
  entry: SingleProfileRes;
  onSelectPost: ProcessUsernameProps["onSelectPost"];
};

const UserGallery = ({
  entry: {
    posts,
    owner: { fullName, username, profilePicUrl, isPrivate },
  },
  onSelectPost,
}: UserGalleryProps) => {
  const handleSelectPost = (url: string) => () => {
    onSelectPost(url);
  };

  return (
    <Box marginY={8}>
      <Box display="inline-flex" alignItems="center">
        <Avatar src={profilePicUrl} />

        <Box marginLeft={2}>
          {fullName && <Text fontSize="lg">{fullName}</Text>}
          <Link href={`https://www.instagram.com/${username}`} isExternal>
            <Text fontWeight="bold" fontSize="sm">
              @{username}
            </Text>
          </Link>
        </Box>
      </Box>

      {isPrivate && <Text>This profile is private.</Text>}

      {!isPrivate && posts.length > 0 && (
        <>
          <Box marginY={4}>
            <Heading fontSize="lg">Recent Posts</Heading>
            <Text fontSize="xs">Click one of the post below to download.</Text>
          </Box>
          <Grid
            marginY={8}
            gap={8}
            templateColumns={["repeat(1)", "repeat(2, 1fr)"]}
            alignItems="center"
          >
            {posts.map(({ url, thumbnail, isMultipost }, postIndex) => {
              return (
                <Box
                  key={postIndex}
                  position="relative"
                  onClick={handleSelectPost(url)}
                  cursor="pointer"
                >
                  {isMultipost && (
                    <Badge
                      colorScheme="purple"
                      position="absolute"
                      variant="solid"
                      top={4}
                    >
                      multipost
                    </Badge>
                  )}
                  <Image src={thumbnail} borderRadius={"1rem"} />
                </Box>
              );
            })}
          </Grid>
        </>
      )}
    </Box>
  );
};

export default UserGallery;
