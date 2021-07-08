import React, { useEffect, useState } from "react";
import { Pagination } from "@material-ui/lab";
import { useDispatch } from "react-redux";
import { getPaginatedServices } from "../../redux/services/serviceActions";

const Paginate = ({ pages }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    dispatch(getPaginatedServices(page, ""));
  }, [page, dispatch]);

  return (
    <>
      <Pagination
        count={pages}
        variant='outlined'
        shape='rounded'
        onChange={handleChange}
      />
    </>
  );
};

export default Paginate;
