/* eslint-disable react/prop-types */
import { totalCredit } from "../../../App";

const Cart = ({carts}) => {
    const credit = carts.reduce((p,c) => p+c.credit,0)
    return (
        <div className=" bg-white shadow-xl p-5 ">
            <div>
                <h3>Credit Hour Remaining {totalCredit-credit}</h3>
            </div>
            <div className="divider"></div>            
            <div>
               <h3>Course Name</h3>
               <div>
                <ul>
                    {carts.map ((c) => 
                    <li key={c.id}>{c.name}</li>
                    )}
                </ul>
               </div>
            </div>
            <div className="divider"></div>
            <div>Total Credit Hour : {credit}
            </div>
            <div className="divider"></div>
            <div>Total Price :
            {carts.reduce ((p,c) => p+c.price,0)}
            </div>
            
        </div>
    );
};

export default Cart;