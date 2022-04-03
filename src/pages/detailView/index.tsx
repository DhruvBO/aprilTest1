import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./style.css";
import LoadindSpinner from "../../components/Loader";
const DetailView = () => {
  const { id } = useParams();

  type typeData = {
    id: string;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
  };
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const URL: string = `https://picsum.photos/id/${id}/info`;
  const [getData, setGetData] = useState<typeData>({
    id: "",
    author: "",
    width: 0,
    height: 0,
    url: "",
    download_url: "",
  });

  const getDataRequest = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://picsum.photos/id/${id}/info`);
      setGetData(response.data);
      setIsLoading(false);
    } catch (error) {
      setErrorMessage("Something went wrong!");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDataRequest();
  }, []);

  console.log(getData);

  return (
    <div>
      <h1>Detail View Page</h1>
      <div>{isLoading ? <LoadindSpinner /> : ""}</div>
      {errorMessage.length !== 0 ? (
        <div className="error_msg">
          <h2>{errorMessage}</h2>
        </div>
      ) : (
        <div className="detail_view">
          <div className="detail_view__content">
            <Link to="/">
              <button className="detail_view__back_button">Back</button>
            </Link>
            <table>
              <tr>
                <th className="table_heading">ID:</th>
                <td className="table_value">{getData.id}</td>
              </tr>
              <tr>
                <th className="table_heading">Author: </th>
                <td className="table_value">{getData.author}</td>
              </tr>
              <tr>
                <th className="table_heading">Dowload URL: </th>
                <td className="table_value">
                  <a
                    href={getData.download_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {getData.download_url}
                  </a>
                </td>
              </tr>
              <tr>
                <th className="table_heading">Website URL: </th>
                <td className="table_value">
                  <a href={getData.url} target="_blank" rel="noreferrer">
                    {getData.url}
                  </a>
                </td>
              </tr>
            </table>
          </div>
          <div className="detail_view__image">
            <img src={getData.download_url} alt="picture" />
          </div>
        </div>
      )}
    </div>
  );
};
export default DetailView;
