import React from "react";

//Make FontAwesome Library
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBookOpen,
  faCalendarCheck,
  faPercentage,
  faBuilding,
  faUniversity
} from "@fortawesome/free-solid-svg-icons";
//Use Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useToggle } from "../../../utils";

import Modal from "../../../components/Modal/Modal.jsx";

import Button from "../../../components/Button/Button.jsx";

import "./ServiceCard.scss";

//Add icons to font awesome library
library.add(
  faBookOpen,
  faCalendarCheck,
  faPercentage,
  faUniversity,
  faBuilding
);

const ServiceCard = props => {
  const [open, toggle] = useToggle(false);

  return (
    <React.Fragment>
      <div className="service__card">
        <FontAwesomeIcon icon={props.icon} size="4x" />
        <h3 className="service__card__heading">{props.name}</h3>
        <div className="service__card__description">{props.description}</div>
        <Button
          btnStyle="primary"
          btnSize="sm"
          btnText="More Info"
          addClass="service__card__more"
          onClick={toggle}
        />
      </div>
      {open && (
        <Modal onClickOutside={toggle}>
          <div className="service__card__modal">
            <div className="service__card__modal__bg">
              <FontAwesomeIcon icon={props.icon} size="4x" />
            </div>
            <h2 className="service__card__modal__heading">{props.name}</h2>
            <div className="service__card__modal__content">{props.content}</div>
            <Button
              btnStyle="primary"
              btnSize="md"
              btnText="Close"
              addClass="service__card__modal__btn"
              onClick={toggle}
            />
          </div>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default ServiceCard;
