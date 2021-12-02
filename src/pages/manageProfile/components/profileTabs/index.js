import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { getRequest } from "service/apiClient";
import { getProfileInfo } from "service/constants";

import "./index.css";

const ProfileTab = ({ profileDetails = {} }) => {
  return (
    <div className="profile_tab">
      <Row className="mt-3">
        <Col xs={3} sm={2}>
          <p className="profile_label">Address:</p>
        </Col>
        <Col xs={9} sm={3}>
          <p className="profile_value">{profileDetails?.address}</p>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={3} sm={2}>
          <p className="profile_label">name:</p>
        </Col>
        <Col xs={9} sm={3}>
          <p className="profile_value">{profileDetails?.name}</p>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={3} sm={2}>
          <p className="profile_label">email:</p>
        </Col>
        <Col xs={9} sm={3}>
          <p className="profile_value">{profileDetails?.email}</p>
        </Col>
      </Row>
    </div>
  );
};

export default ProfileTab;
