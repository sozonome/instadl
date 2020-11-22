import { useRouter } from "next/router";
import ProcessDownload from "../../components/form/ProcessDownload";

const PostID = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>{id && <ProcessDownload postURL={`https://instagram.com/p/${id}`} />}</>
  );
};

export default PostID;
