import axios from "axios";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormsDashboard } from "../../interfaces/interfaces";
import {
  Box,
  Container,
  FieldInput,
  Paragraph,
  TextField,
  Title,
  Button,
  Form,
  WarningField,
} from "../../styles/dashboard";
import { InputTags } from "../InputTags/inputTags";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
export function Dashboard(): JSX.Element {
  const [response, setResponse] = useState<any>([]);
  const [checkBox, setCheckBox] = useState<boolean>(true);

  console.log(checkBox);
  let schema = yup.object().shape({
    amount: yup.number().min(1000).required(),
    installments: yup.number().min(1).max(12).required(),
    mdr: yup.number().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormsDashboard>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormsDashboard> = (data) => {
    console.log(data);
    axios
      .post("https://frontend-challenge-7bu3nxh76a-uc.a.run.app", data)
      .then((data) => {
        setResponse(data.data);
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };

  const handleOnChange = () => {
    setCheckBox(!checkBox);
  };
  // const result =  Object.entries(response).map((item,index: any) => <p key={index}> {`Em ${item[0]} dias: ${item[1]} `}</p>   )
  return (
    <Container>
      <Box size="200px" flex={2}>
        <Title fontSize="36px" color="#A9A9A9" fontWeight={800}>
          Simule sua Atencipação
        </Title>
        <div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <TextField htmlFor=""> Informe o valor da venda: * </TextField>
            <FieldInput {...register("amount")} />
            <WarningField>
              {errors.amount && "Inserir somente valores numérico, minimo 1000"}
            </WarningField>

            <TextField htmlFor=""> Em quantas parcelas: * </TextField>
            <FieldInput {...register("installments")} />
            <WarningField>
              {errors.installments &&
                "Valor inválido, Inserir parcelas de 1 á 12"}
            </WarningField>

            <TextField htmlFor=""> Informe o percentual do mdr: *</TextField>
            <FieldInput {...register("mdr")} />
            <WarningField>
              {errors.mdr && "Inserir uma porcentagem válida"}
            </WarningField>

            <div>
              <input
                type={"checkbox"}
                value={"otherDays"}
                checked={checkBox}
                onChange={handleOnChange}
              />
              <TextField>Datas á serem calculadas 1 ,30 , 90 </TextField>
            </div>
            {!checkBox && (
              <>
                <InputTags props={register("days")}></InputTags>
              </>
            )}
            <Button
              type="submit"
              value={"Calcular"}
              onClick={() => {
                setResponse("");
              }}
            />
          </Form>
        </div>
      </Box>
      <Box size="200px" primary>
        <div className="title_result">
          <Title fontSize="18px" color="#4682B4">
            VOCÊ RECEBERÂ:
          </Title>
        </div>

        {Object.entries(response).map((item, index: any) => (
          <Paragraph color={"#4682B4"} key={index}>
            {" "}
            {item[0] === "1"
              ? `Amanhã: R$ ${item[1]} `
              : `Em ${item[0]} dias: R$ ${item[1]} `}
          </Paragraph>
        ))}
      </Box>
    </Container>
  );
}
