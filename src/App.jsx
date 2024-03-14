import { useState } from "react"
import Cart from "./assets/Components/Course/Cart"
import Courses from "./assets/Components/Course/Courses";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const totalCredit =15

function App() {

  const [carts,setCarts] = useState ([])

  const handelCourseSelect = (course) => {
    console.log (course);
      
     const credits = carts.reduce ((p,c) => p+c.credit,0)

     if (credits + course.credit > totalCredit)
     return alert (`only ${totalCredit} Credit allowed`)

    const alreadyExits = carts.find (c => c.id ==course.id);
    if (!alreadyExits){
      setCarts (c => [...c,course]);
      toast.success("Course added");
    }
    else {
      toast.warning ("Course Already exits")
    }

    
  }
  return (
    <>
      <div className="p-4">
      <h1 className="text-3xl font-bold text-center">
      Course Registration
    </h1>
      </div>
    <div className="grid grid-cols-12 my-3 gap-4">
      <div className="col-span-9">
        <Courses
        handelCourseSelect ={handelCourseSelect}
        ></Courses>
      </div>
      <div className="col-span-3">
      <Cart
      carts ={carts}
      ></Cart>
      </div>
      <ToastContainer />
    </div>
    </>
  )
}

export default App
