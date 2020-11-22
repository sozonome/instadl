import { useRouter } from "next/router";
import ProcessDownload from "../../components/form/ProcessDownload";

const TvID = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>{id && <ProcessDownload postURL={`https://instagram.com/tv/${id}`} />}</>
  );
};

export default TvID;
