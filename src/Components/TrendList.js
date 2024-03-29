import React, {useEffect } from "react";
import { Row } from "react-bootstrap";
import { TrendCard } from "./MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { getTrendMovies } from "../Redux/Redux-toolkit/Slices/trendSlice";
const TrendList = () => {
  const dispatch = useDispatch();
  // useEffect
  useEffect(() => {
    dispatch(getTrendMovies());
  }, [dispatch]);
  // get the data from the state
  const {movies,loading} = useSelector((state) => state.trendReducer);

  return (
    <div className="my-5">
      <Row className="justify-content-center">
        {
          loading===false?
          movies?.results?.length >= 1 ? (
            movies?.results?.map((trend) => {
              return <TrendCard key={trend.id} trend={trend}></TrendCard>;
            })
          ) : (
            <h2>لا يوجد افلام...</h2>
          )
          :
          <h2>...loading</h2>
        }
      </Row>
    </div>
  );
};

export default TrendList;
