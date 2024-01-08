import Cardlist from "./component/Cardlist/Cardlist";
import Footer from "./component/Footer/Footer";
import LightGridBackground from "./component/LightGridBackground/LightGridBackground";
import Navigation from "./component/Navigation/Navigation";
import Photos from "./component/Photos/Photos";
import Support from "./component/Support/Support";
import UserData from "./component/UserData/UserData";
import Wise from "./component/Wise/Wise";
import Companylogo from "./component/companylogo/companylogo";
import Threekeys from "./component/threekeys/threekeys";

function App() {
  return (
    <div className="App">
      <div className="firstline flex justify-center items-center gap-4">
        <div className="bg-[#E6E7E9] rounded-md text-xs p-1">Announcement</div>
        <div className="text-sm">We are happy to announce that we raise $2 Million in Seed Funding</div>
      </div>
      <Navigation/>
      <LightGridBackground/>
      <Companylogo/>
      <Threekeys/>
      <Cardlist/>
      <Threekeys/>
      <Photos/>
      <UserData/>
      <Wise/>
      <Support/>
      <Footer/>
    </div>
  );
}

export default App;
