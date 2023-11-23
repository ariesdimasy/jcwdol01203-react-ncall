
import axios from "axios"
import { useFormik } from "formik"
 import * as Yup from 'yup';

export default function Form() {

    const formik = useFormik({
        initialValues:{
            name:'',
            color:'',
            power:''
        },
        validationSchema:Yup.object({
            name:Yup.string().max(15, "Must be 15 characters or less")
            .required("Name must be filled"),
            color:Yup.string().max(15,"Must be 15 chars or less")
            .required("Color must be filled"),
            power:Yup.string().required("Power must be filled")
        }),
        onSubmit:(values) => {
            axios.post("http://localhost:3000/superheroes",{
                name:values.name,
                color:values.color,
                power:values.power
            })
            .then(res => {
                alert(JSON.stringify(values, null, 2))
                console.log(res)
            })
            .catch((err) => {
                alert(err.message)
            })
            
        }
    })


    return (<form className="card" 
            style={{ width:"100%"}} 
            onSubmit={formik.handleSubmit}
        >
        <div>
            <label> Name </label>
            <input 
                type="text" 
                name="name" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                ></input>
            {formik.touched.name && formik.errors.name ? 
            (<div style={{ color:'red'}}>{formik.errors.name}</div>) : null}
        </div>
         <div>
            <label> Color </label>
            <input 
                type="text" 
                name="color" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            ></input>
             {formik.touched.color && formik.errors.color ? 
            (<div style={{ color:'red'}}>{formik.errors.color}</div>) : null}
        </div>
        <div>
            <label> Power </label>
            <input 
                type="text" 
                name="power" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></input>
             {formik.touched.power && formik.errors.power ? 
            (<div style={{ color:'red'}}>{formik.errors.power}</div>) : null}
        </div>
        <button type="submit"> Submit </button>
    </form>)
}