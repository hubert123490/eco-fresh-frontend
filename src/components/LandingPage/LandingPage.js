import CompanyValues from "./CompanyValues";
import Welcome from "./Welcome";
import CustomerStories from "./CustormersStories/CustomerStories";
import Queries from "./Queries/Queries";

const LandingPage = () => {
  return (
    <>
      <Welcome />
      <CompanyValues />
      <CustomerStories />
      <Queries />
    </>
  );
};

export default LandingPage;
