import { PageHeading } from "globalComponents";
import React, { useEffect, useState } from "react";
import { Col, Row, Tab, Tabs, Button } from "react-bootstrap";
import { UserOutlined } from "@ant-design/icons";
import "./index.css";
import {
  ProfileTab,
  SubscriptionDetails,
  EditProfileModal,
} from "./components";
import { useRoleAuth } from "contexts";
import { getRequest } from "service/apiClient";
import { getProfileInfo } from "service/constants";
import { toast } from "react-toastify";

const ManageProfile = () => {
  let { user, role } = useRoleAuth();
  const [userDetails, setUserDetails] = useState({});
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        const {
          data: {
            error,
            message,
            data: { profile },
          },
        } = await getRequest(getProfileInfo);

        if (error) {
          toast.warn(message);
        } else {
          setUserDetails(profile);
        }
      } catch (err) {
        toast.error("Something went wrong");
      }
    };
    init();
  }, [refetch]);

  return (
    <div className="manage_profile_container">
      <PageHeading text="Profile" />
      <EditProfileModal
        initialData={userDetails}
        show={isEditModalVisible}
        handleClose={() => setIsEditModalVisible(false)}
        onSuccess={() => {
          setIsEditModalVisible(false);
          setRefetch((prevValue) => !prevValue);
        }}
      />
      <Row className="mt-3 g-5">
        <Col xs={12} sm={4} md={2}>
          <UserOutlined style={{ fontSize: 150, color: "#797a7c" }} />
        </Col>
        <Col xs={12} sm={8} md={8}>
          <h2 className="profile_name">{userDetails?.name}</h2>
          <p className="profile_role">{role}</p>
          <Button
            className="btn_green mt-3"
            onClick={() => setIsEditModalVisible(true)}
          >
            Edit Profile
          </Button>
        </Col>
        <Col xs={12}>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="profile" title="Profile">
              <ProfileTab profileDetails={userDetails} />
            </Tab>
            <Tab eventKey="subscDetail" title="Subscription">
              <SubscriptionDetails
                subscriptionPlan={userDetails?.subscriptionPlan}
              />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </div>
  );
};

export default ManageProfile;
