import { BrowserRouter, Routes, Route } from "react-router-dom";
// admin pages
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
// user pages
import Landing from "./pages/user/Landing";
import { productInputs, userInputs } from "./formSource";
import { connect } from "react-redux";
import { checkStorage } from "./redux/actions/admin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/admin">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
          <Route path="/">
            <Route index element={<Landing />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    adminGlobal: state.admin,
    userGlobal: state.user,
  };
};

const mapDispatchToProps = {
  checkStorage,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
