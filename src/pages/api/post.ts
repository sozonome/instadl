import { NextApiRequest, NextApiResponse } from "next";

import { RawResponseType } from "../../../types/rawResponseType";
import { MediaType, OwnerType, PostRes } from "../../../types/post";

const entry = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { url },
  } = req;

  let result: PostRes;

  if (url) {
    await fetch(`${(url as string).split("?")[0]}?__a=1`)
      .then((response) => response.json())
      .then(({ graphql: { shortcode_media } }: RawResponseType) => {
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

        result = {
          post: medias,
          owner,
        };

        res.status(200).json(result);
      })
      .catch(() => {
        res.status(404).json({
          message: "Not found.",
        });
      });
  } else {
    res.status(500).json({
      message: "Error.",
    });
  }
};

export default entry;
