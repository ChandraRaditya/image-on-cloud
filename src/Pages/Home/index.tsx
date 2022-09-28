import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ButtonUpload from "../../component/Button";
import Card from "../../component/Card";
import type { RootState } from "../../Redux/store";
import "./index.scss";

function Home() {
  const preview = useSelector((state: RootState) => state.previewData.value);
  // console.log("ini preview redux", preview);
  useEffect(() => {
    console.log("ini preview redux", preview);
  }, [preview]);
  return (
    <div className="home">
      <div className="container">
        <ButtonUpload />
      </div>
    </div>
  );
}

export default Home;
