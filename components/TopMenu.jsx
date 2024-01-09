 
import Link from 'next/link'


 

 
export default function TopMenu() {
  return ( 
   
    <div className="menu-main grid grid-cols-1 lg:grid-cols-3 gap-4 hidden md:grid fixed top-0 w-full">
  <div className="flex items-center justify-center p-4">
    <Link className="menuLink" href="./">Home</Link>
    </div>
    <div className="flex items-center justify-center p-4">
      <Link className="menuLink" href="./portfolio">Portfolio</Link>
    </div>
    <div className="flex items-center justify-center p-4">
      <Link className="menuLink" href="./more">More</Link>
    </div>  </div>
   
  );
}
 