import Cardlisterfunk from "./Cardlister";
import { useState } from "react";
import Navbarfunk from "./Navbarfunk";
const App = () => {
    const [Produc,setproduct] = useState([
        {id:1,name:'Laptop',count:11},
        {id:2,name:'iphone',count:110},
        {id:3,name:'Keyboard',count:9},
        {id:4,name:'mouse',count:18},
        {id:5,name:'Monitor',count:16},
        {id:6,name:'PC',count:220},
    ])
    return ( 
        <div>
            <Navbarfunk Produc = {Produc} />
            <Cardlisterfunk Resetbtn = {Resetbtn} Dellcount = {Dellcount} minecount = {minecount} addcount = {addcount} Produc = {Produc} />
        </div>
     );
     function addcount(PID){
     const newpro = [...Produc];
        const index = newpro.findIndex(p=> p.id === PID);
        newpro[index].count +=1
        setproduct(newpro);
    }
    function minecount(PID){
        const newpro = [...Produc];
        const index = newpro.findIndex(p=> p.id === PID);
        newpro[index].count -=1
        setproduct(newpro);

    }
    function Dellcount(PID){
        const newpro = Produc.filter(p=> p.id !== PID);
        setproduct(newpro);


    }
    function Resetbtn(PID){
        const newpro = [...Produc];
        const index = newpro.findIndex(p=> p.id===PID);
        newpro[index].count = 0
        setproduct(newpro);


    }
}
 
export default App;