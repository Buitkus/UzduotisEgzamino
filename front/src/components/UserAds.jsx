import AdsForm from "./AdsForm";
import { deleteAd, getUserAds, reset } from "../services/adsSlices";
import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "./Spinner";
import { toast } from "react-toastify";

const UserAds = () => {
  const refresh = () => window.location.reload(true);
  // const [item, setItem] = useState("");
  // const [upAd, setUpAd] = useState("R");

  // console.log(item);

  const dispatch = useDispatch();

  const { ads, isLoading, isError, message } = useSelector(
    (state) => state.ads
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getUserAds());
    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);

  // skelbimo istrynimui su vartotojo informacija
  const handleClick = (item) => {
    if (item === undefined) {
      toast.error("Skelbimo istrinti nepavyko");
    } else {
      dispatch(deleteAd(item));
      toast.success("Skelbimas istrintas");
      refresh()
    }
  };

  // funkcija skelbimo redagavimui ir gryzimui prie formos
  // const handleUpdates = (btAd) => {
  //   if (btAd._id !== item._id) {
  //     setItem(btAd);

  //     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  //   }
  // };

  // useEffect(() => {
  //   setUpAd("R");
  //   // console.log(upAd)
  // }, [upAd]);

  // console.log(ads);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="background1">
      <AdsForm />
      <h2 className="d-flex justify-content-center mt-3">Mano skelbimai</h2>
      <div className="d-flex flex-wrap justify-content-center mt-3">
        {ads !== undefined && ads.length > 0 ? (
          ads.map((item, index) => (
            <Card
              className="d-inline-flex m-2 h-50"
              key={index}
              style={{ width: "18rem" }}
            >
              <Card.Img
                className="img-fluid img-thumbnail"
                variant="top"
                src={item.image}
              />
              <Card.Body>
                {item.status === "public" ? (
                  <h6 className="card-subtitle mb-2 text-success">
                    Jusu skelbimas matomas visiems
                  </h6>
                ) : (
                  <>
                    {item.status !== "block" ? (
                      <h6 className="card-subtitle mb-2 text-body-secondary">
                        Laukiama patvirtinimo
                      </h6>
                    ) : (
                      <h6 className="card-subtitle mb-2 text-danger">
                        Skelbimas uzblokuotas, atnaujinkite duomenis
                      </h6>
                    )}
                  </>
                )}

                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text> Kaina: {item.price}</Card.Text>
                {/* <Button
                  className="m-2 "
                  variant="primary"
                  // onClick={() => handleUpdates(item)}
                >
                  Atnaujinti
                </Button> */}
                <Button
                  className="m-2 "
                  variant="outline-danger"
                  onClick={() => handleClick(item._id)
                   }
                >
                  Istrinti
                </Button>
              </Card.Body>
            </Card>
          ))
        ) : (
          <h3 className="text-primary">Siuo metu idetu skelbimu nera</h3>
        )}
      </div>
    </div>
  );
};

export default UserAds;
