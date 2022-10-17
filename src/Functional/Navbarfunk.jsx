const Navbarfunk = ({Produc}) => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <a className="navbar-brand" href="#" > Navbar {sumnav()} </a>
        </nav>
     );
     function sumnav(){
        let sum = 0;
        Produc.forEach(element => {
            sum += element.count
            return sum
        });
        return sum
     }
}
 
export default Navbarfunk;