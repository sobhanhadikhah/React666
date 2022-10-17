import Cardfunk from "./Cardfunk";

const Cardlisterfunk = ({Produc,Resetbtn,Dellcount,minecount,addcount}) => {
    return ( 
        <div>
            {Produc.map((p,index)=> (
                <Cardfunk addcount={addcount} minecount ={minecount}
                 Dellcount ={Dellcount} Resetbtn ={Resetbtn}
                  key={index}  id={p.id}
                   Pcount = {p.count} Pname = {p.name}  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Fugiat unde maxime quibusdam voluptate delectus quidem necessitatibus voluptatum?
                      Corporis consectetur vero dolor, placeat assumenda molestiae p
                    raesentium explicabo quos! Iusto, sint aut?
                </Cardfunk>
            ))}
        </div>
     );
}
 
export default Cardlisterfunk;