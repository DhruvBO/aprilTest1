import axios from "axios";
import { useEffect, useState } from "react";
import ImageCard from "../Section/Card";
import "./style.css";
import LoadindSpinner from "../Loader";
const ImageIfiniteScroll = () => {
  const [pageNo, setPageNo] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [getData, setGetData] = useState<Array<object>>([]);
  const LIMIT = 4;

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      console.log("bottom of page");
      setPageNo(pageNo + 1);
    }
  };

  const getDataRequest = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${pageNo}&limit=${LIMIT}`
      );
      setGetData([...getData, ...response.data]);
      setIsLoading(false);
    } catch (error) {
      setErrorMessage("Something went wrong!");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDataRequest();
  }, [pageNo]);

  return (
    <div>
      <div>{isLoading ? <LoadindSpinner /> : ""}</div>
      {(errorMessage.length !== 0) ? (
        <div className="error_msg">
          <h2>{errorMessage}</h2>
        </div>
      ) : (
        getData.map((data: any) => (
          <ImageCard
            downloadUrl={data.download_url}
            key={data.id}
            author={data.author}
            id={data.id}
          />
        ))
      )}
    </div>
  );
};

export default ImageIfiniteScroll;
