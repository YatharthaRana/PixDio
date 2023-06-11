import React from 'react';
import NavigBar from './components/NavigBar';
import Carousels from './components/Carousels';
import {Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Services from './components/Services';
import Image from './components/Image';
import Textimg from './components/Textimg';
import ImageUploader from './components/Upresimg';
import Audio from './components/Audio';
import Video from './components/Video';
import ComingSoonPage from './components/ComingSoon';





function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path= "/" element = {<><NavigBar/> <Carousels/> <Footer/> </>} />
        <Route exact path= "/services" element= {<><NavigBar/> <Services/> <Footer/></>} />
        <Route exact path= "/images" element= {<> <NavigBar/> <Image/> <Footer/> </>} />
        <Route exact path= "/textimg" element= {<> <NavigBar/> <Textimg/> <Footer/> </>} />
        <Route exact path= "/upsimg" element= {<> <NavigBar/> <ImageUploader/> <Footer/> </>} />
        <Route exact path= "/audio" element= {<> <NavigBar/> <Audio/> <Footer/> </>} />
        <Route exact path= "/video" element= {<> <NavigBar/> <Video/> <Footer/></>} />

        <Route exact path="/youthold" element={<><NavigBar/> <ComingSoonPage/> <Footer/> </>} />
        <Route exact path="/faceswap" element={<><NavigBar/> <ComingSoonPage/> <Footer/> </>} />
        <Route exact path="/bodyposture" element={<><NavigBar/> <ComingSoonPage/> <Footer/> </>} />
        <Route exact path="/colorize" element={<><NavigBar/> <ComingSoonPage/> <Footer/> </>} />

        <Route exact path="/textaud" element={<><NavigBar/> <ComingSoonPage/> <Footer/> </>} />
        <Route exact path="/makevoice" element={<><NavigBar/> <ComingSoonPage/> <Footer/> </>} />
        <Route exact path="/maketune" element={<><NavigBar/> <Footer/> </>} />
        <Route exact path="/upaud" element={<><NavigBar/> <ComingSoonPage/> <Footer/> </>} />
        <Route exact path="/textvid" element={<><NavigBar/> <ComingSoonPage/> <Footer/> </>} />
        <Route exact path="/objdet" element={<><NavigBar/> <ComingSoonPage/> <Footer/> </>} />
        <Route exact path="/deepfake" element={<><NavigBar/> <ComingSoonPage/> <Footer/> </>} />
        <Route exact path="/upvid" element={<><NavigBar/> <ComingSoonPage/> <Footer/> </>} />

      </Routes>
    </div>
  )
}

export default App