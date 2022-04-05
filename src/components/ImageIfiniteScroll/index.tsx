import axios from "axios";
import { useEffect, useState } from "react";
import ImageCard from "../Section/Card";
import "./style.css";
import LoadindSpinner from "../Loader";
const ImageIfiniteScroll = () => {
  const [pageNo, setPageNo] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [stoppedScrolling, setStoppedScrolling] = useState(false);
  const [getData, setGetData] = useState<Array<object>>([]);
  const [idOfLasttwoElement, setIdOfLasttwoElement] = useState({
    secondLastEle: "",
    lastEle: "",
  });
  const LIMIT = 4;
  let isScrolling: any;
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
      setIdOfLasttwoElement({
        // response.data.length - 1
        secondLastEle: response.data[response.data.length - 2].id,
        lastEle: response.data[response.data.length - 1].id,
      });

      setIsLoading(false);
    } catch (error) {
      setErrorMessage("Something went wrong!");
      setIsLoading(false);
    }
  };

  const checkScrollinStatus = () => {
    setStoppedScrolling(false);
    //check if user has stopped scrolling
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(function () {
      setStoppedScrolling(true);
      console.log("Scrolling has stopped.");
    }, 5000);
  };

  useEffect(() => {
    checkScrollinStatus();
    getDataRequest();
  }, [pageNo]);

  return (
    <div>
      <div>{isLoading ? <LoadindSpinner /> : ""}</div>
      {errorMessage.length !== 0 ? (
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
            hasStoppedScrolling={stoppedScrolling}
            lastTwoEle={idOfLasttwoElement}
          />
        ))
      )}
    </div>
  );
};

export default ImageIfiniteScroll;
