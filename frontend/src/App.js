import "./App.css";
import { connect } from "react-redux";
import Routes from "./Routes";
import { Template } from "./components/MainComponentes";
import Header from "./components/partials/Header";
import { Footer } from "./components/partials/Footer";

const Page = (props) => {
  return (
    <Template>
      <Header />
      <Routes />
      <Footer />
    </Template>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
