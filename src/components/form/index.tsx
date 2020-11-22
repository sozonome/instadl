import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { FormikErrors, useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import axios from "axios";

import { RawResponseType } from "../../../types/rawResponseType";
import Gallery, { MediaType } from "../media/Gallery";

type FormType = {
  link: string;
};

const Form = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorDL, setErrorDL] = useState<boolean>(false);

  const [media, setMedia] = useState<Array<MediaType>>();

  const { values, handleSubmit, errors, handleChange, dirty } = useFormik<
    FormType
  >({
    initialValues: {
      link: "",
    },
    validate: (formValues: FormType) => {
      const formErrors: FormikErrors<FormType> = {};

      const checkLinkStrings = formValues.link.split("/" || ".");

      if (
        checkLinkStrings.indexOf("instagram.com") < 0 &&
        checkLinkStrings.indexOf("www.instagram.com") < 0
      ) {
        formErrors.link = "invalid link";
      }

      return formErrors;
    },
    validationSchema: yup.object().shape<FormType>({
      link: yup.string().required(),
    }),
    onSubmit: async (formValue: FormType) => {
      setErrorDL(false);
      setLoading(true);
      // const strippedLink = formValue.link.split("/");
      // const postIdIndex = strippedLink.indexOf("p") + 1;
      // const postId = strippedLink[postIdIndex];

      const fetchedData = await axios
        .get(`${formValue.link}?__a=1`)
        .then((res) => res.data as RawResponseType)
        .catch(() => setErrorDL(true));

      setLoading(false);

      if (fetchedData) {
        // window.location.assign(
        //   `${fetchedData.graphql.shortcode_media.display_url}&dl=1`
        // );
        if (fetchedData.graphql.shortcode_media.edge_sidecar_to_children) {
          const medias: MediaType[] = fetchedData.graphql.shortcode_media.edge_sidecar_to_children.edges.map(
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
          const updateMedia: MediaType[] = fetchedData.graphql.shortcode_media
            .is_video
            ? [
                {
                  url: fetchedData.graphql.shortcode_media.video_url,
                  is_video: fetchedData.graphql.shortcode_media.is_video,
                  restricted: false,
                },
              ]
            : [
                {
                  url:
                    fetchedData.graphql.shortcode_media.display_resources[2]
                      .src,
                  is_video: fetchedData.graphql.shortcode_media.is_video,
                  restricted: false,
                },
              ];

          setMedia(updateMedia);
        }
      }
    },
  });

  return (
    <Box>
      {console.log(values)}
      <FormControl isRequired>
        <FormLabel textAlign="center">Input Instagram Post Link</FormLabel>
        <Input
          placeholder="https://www.instagram.com/p/CGp0Y42HKkm/"
          textAlign="center"
          variant="filled"
          colorScheme="green"
          name="link"
          value={values.link}
          onChange={handleChange}
        />
        {errors.link && (
          <FormHelperText textAlign="center" color="red.400">
            {errors.link}
          </FormHelperText>
        )}
      </FormControl>

      <Button
        disabled={!dirty || (dirty && Object.keys(errors).length > 0)}
        isFullWidth
        colorScheme="teal"
        marginY={2}
        onClick={() => handleSubmit()}
      >
        Download
      </Button>

      {loading && (
        <Box textAlign="center">
          <Spinner size="lg" />
        </Box>
      )}
      {errorDL && <Text textAlign="center">Wrong Link</Text>}

      {media && <Gallery media={media} />}
    </Box>
  );
};

export default Form;
