import React from "react";
import * as yup from 'yup';
import { useFormik } from "formik";

 export default function BasicForm(){
const formValidationSchema=yup.object({
    password: yup.string().min(8, "Need long Password").required("PASSWORD IS REQUIRED"),
    email:yup.string().email().required(),
}

)

const formik= useFormik(
    { initialValues:{email: "", password:""},
    validationSchema:formValidationSchema,
onSubmit:(values)=>{console.log("onSubmit",values);}}
)

    return(
        <div>
            Hello welcome to basic form

            <form onSubmit={formik.handleSubmit}>
                <input  id="email" name="email" value={formik.values.email}  
                onChange={formik.handleChange}
                 onBlur={formik.handleBlur} type='email' placeholder="Email"/>
              <span style={{color:"red", fontsize:"2px"}}>{formik.touched.email && formik.errors.email ? formik.errors.email : ""}</span>
                <br/>
                <input id="password" name="password" value={formik.values.password} 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur} type='password' placeholder="Password"/>
                <span style={{color:"red", fontsize:"2px"}}>{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</span>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
 }