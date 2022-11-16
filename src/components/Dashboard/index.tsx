import axios from "axios"
import { useState } from "react"
import {useForm, SubmitHandler} from "react-hook-form"
import { FormsDashboard } from "../../interfaces/interfaces"
import { Container } from "../../styles/style"
export function Dashboard(){
const [response, setResponse]  = useState<any>([])
const {register, handleSubmit} = useForm<FormsDashboard>()
    const onSubmit: SubmitHandler<FormsDashboard> = data => { 
        axios.post("https://frontend-challenge-7bu3nxh76a-uc.a.run.app", data=data)
        .then(data => {setResponse(data.data)})
        .catch(err => {alert(err.response.data)})

    }
    const itens =  Object.keys(response).map((item: any) => <p> {item}</p>   )
    const values =  Object.values(response).map((item: any) => <p> {item}  </p> )
    return(
        <Container>
            <div className="formulário_inputs">
                <form onSubmit={handleSubmit(onSubmit)} >

                <label htmlFor=""> Informe o valor da venda: * </label>
                <input  {...register("amount")}/>

                <label htmlFor=""> Em quantas parcelas: * </label>
                <input {...register("installments")}/>

                <label htmlFor=""> Informe o percentual do mdr: *</label>
                <input {...register("mdr")}/>

                <input type="submit"/>
                </form> 
            </div>
            <div>
                <div>  
                    {itens}                
                </div>
                <div>  
                     {values}              
                </div>

                
            </div>
            </Container>
    )


}