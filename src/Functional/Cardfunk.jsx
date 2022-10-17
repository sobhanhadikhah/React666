import './Card.css'
const Cardfunk = ({Pcount,Pname,id,children,addcount,minecount,Dellcount,Resetbtn}) => {
    return ( 
        <div>
            <div className='bg-dark-blue br3  pa3 ma3    ' >
                <img src={`https://robohash.org/${id}`} alt="img" />
                <span className='pa2' >{Pname}</span>
                <span  className='pa2' >{Pcount}</span>
                <button onClick={addcountfun} className='btn btn-primary ma3 grow ' >+</button>
                <button onClick={minecountfun} className='btn btn-warning ma3  grow' >-</button>
                <button onClick={Dellcountfun} className='btn btn-danger ma3 grow ' >Delete</button>
                <button onClick={Resetbtnfun} className='btn btn-dark ma3 grow ' >Reset</button>
                <p>{children}</p>
            </div>
        </div>
     );
    function addcountfun(){
        addcount(id)
    }
    function minecountfun(){
        minecount(id)
    }
    function Dellcountfun(){
        Dellcount(id)
    }
    function Resetbtnfun(){
        Resetbtn(id)

    }
}
 
export default Cardfunk;