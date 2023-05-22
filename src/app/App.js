import './App.css';
import MainLayout from "./layout/main-layout/main-layout";
import {BrowserRouter} from "react-router-dom";
import {Header} from "antd/es/layout/layout";
import Home from "./pages/home/home";

function App() {
  return (
      <div>
          <ApolloProvider client={client} >
              <BrowserRouter>
                  <div className={"grid items-stretch max-h-screen"} >
                      <div className={"grid items-start"}>
                          <Header></Header>
                          <div className={"bg-gray-100"} style={{height:'1300px'}}>
                              <div className={"flex justify-between mb-2 mt-10"}>
                                  <SidebarLeft></SidebarLeft>
                                  <Routes>
                                      <Route>
                                          <Route index element={<Home/>}/>
                                          <Route path="about" element={<About/>}/>
                                          <Route path="contact" element={<Contact/>}/>
                                          <Route path="*" element={<Home/>}/>
                                      </Route>
                                  </Routes>
                                  <SidebarRight></SidebarRight>
                              </div>
                          </div>
                      </div>
                      <Footer></Footer>
                  </div>
              </BrowserRouter>
          </ApolloProvider>
      </div>
  );
}

export default App;
