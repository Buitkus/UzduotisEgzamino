import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import { useSelector } from "react-redux";
import adsService from "../services/adsService";
// import { updateAd, reset } from "../services/adsSlices";
// import { toast } from "react-toastify";

const AdminAds = () => {
  const [ads, setAds] = useState([]);
  // const [copyAds, setCopyAds] = useState([]);

  // skelbimu patvirtinimui ir blokavimui
  // const [formData, setFormData] = useState({
  //   status: "public",
  // });
  // const [test, setTest] = useState("");

  // console.log(formData);
  // console.log(test);

  // const { myCategory } = useSelector((state) => state.myCategory);

  // const dispatch = useDispatch();

  //gautus duomenis is API, isideti i state
  const adsData = () => {
    adsService.getAllAdsData().then((res) => {
      if (res !== undefined) {
        setAds(res);
        // setCopyAds(res);
      }
    });
  };

  // filtravimas pagal kategorija
  // useEffect(() => {
  //   // ifas pargrazinti visus duomenis be filtracijos
  //   if (myCategory !== "All") {
  //     // filtruojamos categorijos
  //     const filtered = copyAds.filter((items) =>
  //       items.category.includes(myCategory)
  //     );
  //     setAds(filtered);
  //   } else {
  //     // priskiriamos visos categorijos
  //     setAds(copyAds);
  //   }
  // }, [copyAds, myCategory]);

  // const handleApproval = (id) => {
  //   setTest("a/" + id);
  // };

  // const handleBlock = (id) => {
  //   setTest("a/" + id);
  //   setFormData({
  //     status: "block",
  //   });
  // };

  // useEffect(() => {
  //   if (test !== "") {
  //     dispatch(updateAd({ formData, test }));
  //     toast.success("Skelbimas atnaujintas sekmingai");
  //     setTest("");
  //     setFormData({
  //       status: "public",
  //     });
  //     return () => {
  //       dispatch(reset());
  //     };
  //   }
  // }, [test]);

  useEffect(() => {
    adsData();
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-center mt-3">
      {ads.length > 0 ? (
        ads.map((item, index) =>
            <Card
              className="d-inline-flex m-2 h-50"
              key={index}
              style={{ width: "30rem" }}
            >
              <Card.Img
                className="img-fluid img-thumbnail"
                variant="top"
                src={item.image}
              />
              <Card.Body>
                <Card.Title className="border-bottom d-flex justify-content-center">
                  {item.title}
                </Card.Title>
                <Card.Text className="border-bottom mt-3">
                  <span className="fw-medium">Aprasymas:</span>{" "}
                  {item.description}
                </Card.Text>
                <Card.Text className="border-bottom">
                  <span className="fw-medium">Kaina:</span> {item.price} €
                </Card.Text>
                {/* <Card.Text className="border-bottom"><span className='fw-medium'>komentarai:</span> {item.price} €</Card.Text> */}
                
              </Card.Body>
            </Card>
          
        )
      ) : (
        <h3>Skelbimu sistemoje nera</h3>
      )}
    </div>
  );
};

export default AdminAds;
