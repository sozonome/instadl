import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  useColorMode,
} from "@chakra-ui/react";
import { FormikErrors, useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";

import ProcessDownload from "./ProcessDownload";

type FormType = {
  link: string;
};

const Form = () => {
  const [isFetchingMedia, setIsFetchingMedia] = useState<boolean>();
  const [postURL, setPostURL] = useState<string>("");

  const { colorMode } = useColorMode();

  const {
    values,
    handleSubmit,
    errors,
    handleChange,
    dirty,
  } = useFormik<FormType>({
    initialValues: {
      link: "",
    },
    validate: (formValues: FormType) => {
      const formErrors: FormikErrors<FormType> = {};

      const checkLinkStrings = formValues.link.split("/" || ".");

      if (
        (checkLinkStrings.indexOf("instagram.com") < 0 &&
          checkLinkStrings.indexOf("www.instagram.com") < 0) ||
        formValues.link.includes("script") ||
        formValues.link.includes("iframe")
      ) {
        formErrors.link = "invalid link";
      }

      return formErrors;
    },
    validationSchema: yup.object().shape<FormType>({
      link: yup.string().required(),
    }),
    onSubmit: (formValues: FormType) => {
      setIsFetchingMedia(false);
      setPostURL(formValues.link);
      setIsFetchingMedia(true);
    },
  });

  return (
    <Box margin="0 auto" width={["100%", "100%", "70%"]} alignSelf="center">
      <FormControl isRequired>
        <Input
          placeholder="https://www.instagram.com/p/CGp0Y42HKkm/"
          textAlign="center"
          variant="filled"
          backgroundColor={colorMode === "light" ? "gray.200" : "gray.700"}
          name="link"
          value={values.link}
          onChange={handleChange}
          borderRadius={32}
          height={"3.5rem"}
        />
        {errors.link && (
          <FormHelperText textAlign="center" color="red.400">
            {errors.link}
          </FormHelperText>
        )}
      </FormControl>

      <Button
        disabled={
          !dirty ||
          (dirty && Object.keys(errors).length > 0) ||
          postURL === values.link
        }
        isFullWidth
        colorScheme={colorMode === "light" ? "teal" : "purple"}
        marginY={2}
        borderRadius={"2rem"}
        onClick={() => handleSubmit()}
      >
        Download
      </Button>

      {isFetchingMedia && <ProcessDownload postURL={postURL} />}
    </Box>
  );
};

export default Form;
