import * as React from "react";
import { Backdrop } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Modal } from "@material-ui/core";
import { Fade } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { useState, useEffect } from "react";
import Slider from "./Slider";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  color: "black",
};

const TransitionModal = (props) => {
  const [open, setOpen] = useState(props.modalOpen);
  const [rangeValue, setRangeValue] = useState([0, 0]);
  const [selectedRestaurant, setSelectedRestaurant] = useState("");
  const totalRestaurant = useSelector((state) => state.restaurantDetail.value);

  console.log(`selectedRestaurant`, selectedRestaurant);
  useEffect(() => {
    props.setToFilter({
      rangeValue: rangeValue,
      selectedRestaurant: selectedRestaurant,
    });
  }, [rangeValue, selectedRestaurant]);

  const handleFilter = (e) => {
    e.preventDefault();
    props.setModalOpen(false);
    if (props.totalRes.length > 0) {
      toast.success(`here is your filtered results`);
    } else {
      toast.error(`Not Available at the moment`);
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={() => props.setModalOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Filter by Price:
              <div className="d-flex">
                <div>
                  <Slider setRangeValue={setRangeValue} />
                </div>
                <div className="mx-2 d-flex">
                  <h3 className="mx-2">{rangeValue[0]}</h3>
                  to
                  <h3 className="mx-2">{rangeValue[1]}</h3>
                </div>
              </div>
            </Typography>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Filter by Restaurant: (Optional)
              {/* dropdown */}
              <div>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Select Restaurant
                    </InputLabel>
                    <Select
                      name="Restaurant"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={selectedRestaurant}
                      label="Restaurant Name"
                      onChange={(e) => setSelectedRestaurant(e.target.value)}
                    >
                      {totalRestaurant &&
                        totalRestaurant.length > 0 &&
                        totalRestaurant.map((item) => (
                          <MenuItem value={item.Restaurant}>
                            {item.Restaurant}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </Box>
              </div>
            </Typography>

            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <a
                className="mt-5 btn btn-dark text-white"
                onClick={handleFilter}
              >
                Filter
              </a>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
export default TransitionModal;
