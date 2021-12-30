import React from "react";
import PageLayout from "../components/layout/PageLayout";
import CustomErrorMessage from "../components/error_msg/CustomErrorMessage";

const PageNotFound = () => {
  return (
    <PageLayout>
      <CustomErrorMessage error={{message: "Sorry, page not found"}} />
    </PageLayout>
  );
};

export default PageNotFound;
