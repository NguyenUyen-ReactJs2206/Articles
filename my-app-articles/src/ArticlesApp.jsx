import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import ListArticle from './page/ListArticle'
import SignIn from './page/SignIn'
import SignUp from './page/SignUp'

export default function ArticlesApp() {
    const [showPage, setShowPage] = useState(false);
    //hiện trang hiện tại   style={{ display: readMore ? "block" : "none" }}
    const handleHide = () => {
        setShowPage(false);
      };
      //ẩn cái hiện tại, hiện cái trang mới  style={{ display: readMore ? "none" : "block" }}
      const handleShow = () => {
        setShowPage(true);
      };
  return (
    <div> 
    <BrowserRouter>
   <Navbar setShowPage={setShowPage} handleHide={handleHide} handleShow={handleShow} />
   <ListArticle showPage={showPage}/>
    <Routes>
      <Route
        path='/home/listarticle'
        element={<ListArticle showPage={showPage}/>}
      ></Route>
      <Route
        path='/sign-in'
        element={<SignIn showPage={showPage}/>}
      ></Route>
      <Route
        path='/sign-up'
        element={<SignUp showPage={showPage} />}
      ></Route>
    </Routes>
  </BrowserRouter>
  </div>
  )
}
