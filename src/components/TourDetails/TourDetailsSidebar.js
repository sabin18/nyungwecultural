import { tourDetailsSidebar } from "@/data/tourDetailsPage";
import React, { useState } from "react";
import { Image } from "react-bootstrap";
import DatePicker from "react-datepicker";
import Select from "react-select";

const typeOptions = ["Adventure", "Wildlife", "Sightseeing"].map((it) => ({
  value: it,
  label: it,
}));

const customStyle = {
  valueContainer: (provided) => ({
    ...provided,
    color: "#787780",
    fontSize: 13,
    fontWeight: 500,
  }),
  singleValue: (provided) => ({
    ...provided,
    cursor: "pointer",
  }),
  menu: (provided) => ({
    ...provided,
    marginTop: 5,
    border: "none",
    boxShadow: "none",
    zIndex: 10,
  }),
  option: (provided, state) => ({
    ...provided,
    color: "white",
    padding: "4px 20px",
    backgroundColor: state.isSelected ? "#e8604c" : "#313041",
    transition: "all 0.4s ease",
    cursor: "pointer",
    borderBottom:
      state.label === typeOptions[typeOptions.length - 1].label
        ? "none"
        : "0.5px solid #ffffff33",
    "&:hover": {
      backgroundColor: "#e8604c",
    },
    borderRadius:
      state.label === typeOptions[typeOptions.length - 1].label
        ? "0 0 8px 8px"
        : 0,
    fontSize: 16,
    fontWeight: 500,
  }),
  control: (base) => ({
    ...base,
    borderColor: "transparent",
    boxShadow: "none",
    borderRadius: "8px",
    "&:hover": {
      borderColor: "transparent",
    },
    padding: 14,
  }),
};

const TourDetailsSidebar = () => {
  const [type, setType] = useState("Adventure");
  const [place, setPlace] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSelectType = ({ value }) => {
    setType(value);
    
  };

  const handleSelectPlace = (e) => {
    setPlace(e.target.value);
    console.log("===>",e.target.value)
  };
  // const sendEmail = async () => {
  //   const transporter = nodemailer.createTransport({
  //     host: 'smtp.example.com',
  //     port: 587,
  //     secure: false,
  //     auth: {
  //       user: 'vosplay22@gmail.com',
  //       pass: 'genjqeystjnevtjv',
  //     },
  //   });
  //   const mailOptions = {
  //     from: 'vosplay22@gmail.com',
  //     to: "sabin6341@gmail.com",
  //     subject: 'Your Booking',
  //     text: message,
  //     html: `<div style="font-family:Avenir,Helvetica,sans-serif;box-sizing:border-box;padding:35px;">
  //     <h1 style="color: #848484;">Zola Travel And Tours</h1>
  //     <p style="font-family:Avenir,Helvetica,sans-serif;box-sizing:border-box;color:#74787e;font-size:16px;line-height:1.5em;margin-top:0;text-align:left">Hello!<br>we have received your booking <br></p>
  //     <p style="color:#74787e;font-size:16px;line-height:1.5em;margin-top:0;">Thanks,<br>1000 Hills Tour Team</p>
  //     </div>`
  //   };
  //   try {
  //     await transporter.sendMail(mailOptions);
  //     console.log('Email sent successfully');
  //   } catch (error) {
  //     console.error('Error sending email:', error);
  //   }
  // };


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   const data = {
  //     type,
  //     place,
  //     startDate,
  //     endDate
  //   };
  //   console.log(data);
  //   sendEmail()
  // };

  return (
    <div className="tour-details-two__sidebar">
      <div className="tour-details-two__book-tours">
        <h3 className="tour-details-two__sidebar-title">Book Tours</h3>
        <form
          // onSubmit={handleSubmit}
          className="tour-details-two__sidebar-form"
        >
          <div className="tour-details-two__sidebar-form-input">
            <input type="text" placeholder="Where are you coming from" name="place" value={place} onChange={handleSelectPlace}/>
          </div>
          {/* <div className="tour-details-two__sidebar-form-input">
            <input type="text" placeholder="When" name="when" />
          </div> */}
      
          <div className="tour-details-two__sidebar-form-input">
            <Select
              name="type"
              options={typeOptions}
              onChange={handleSelectType}
              styles={customStyle}
              isSearchable={false}
              components={{
                IndicatorSeparator: () => null,
                DropdownIndicator: () => null,
              }}
              placeholder="Type"
              instanceId="tourTypeSelect10"
            />
            <div className="tour-details-two__sidebar-form-icon">
              <i className="fa fa-angle-down"></i>
            </div>
          </div>
          <div className="tour-details-two__sidebar-form-input">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Select date"
              id="datepicker"
              required
            />
            <div className="tour-details-two__sidebar-form-icon">
              <i className="fa fa-angle-down"></i>
            </div>
          </div>
          <div className="tour-details-two__sidebar-form-input">
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              placeholderText="Select date"
              id="datepicker"
              required
            />
            <div className="tour-details-two__sidebar-form-icon">
              <i className="fa fa-angle-down"></i>
            </div>
          </div>
          <button
            style={{ zIndex: 0 }}
            type="submit"
            className="thm-btn tour-details-two__sidebar-btn"
          >
            Book Now
          </button>
        </form>
      </div>
      {/* <div className="tour-details-two__last-minute">
        <h3 className="tour-details-two__sidebar-title">Last Minute</h3>
        <ul className="tour-details-two__last-minute-list list-unstyled">
          {tourDetailsSidebar.map(({ id, title, image, price, location }) => (
            <li key={id}>
              <div className="tour-details-two__last-minute-image">
                <Image
                  src={require(`@/images/resources/${image}`).default.src}
                  alt=""
                />
              </div>
              <div className="tour-details-two__last-minute-content">
                <h6>${price}</h6>
                <h5>{title}</h5>
                <p>{location}</p>
              </div>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default TourDetailsSidebar;
