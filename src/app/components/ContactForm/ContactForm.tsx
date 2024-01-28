'use client'
import React from 'react'
import { StyledForm, FormContainer, InputForm, ButtonForm, StyledH2, StyledP, SelectForm, LabelForm } from './StyledContactForm'

interface InputContainerProps {
  label: {
    value: string
  },
  input: {
    id: string,
    placeholder: string,
    type: string
  }
}

// Create a div with one input and label, for best alighment
export const InputContainer = ({ label, input }: InputContainerProps) => {
  let { id, placeholder, type } = input; // Desestruturing input props

  return (
    <div style={{flexDirection: "column"}}>
      <LabelForm htmlFor={id}>{label.value}</LabelForm>
      <InputForm
        id={id}
        placeholder={placeholder}
        type={type}
        required />
    </div>
  )
}

const ContactForm = () => {
  return (
    <FormContainer>
      <StyledForm action="POST">
        <StyledH2>Se Interessou?</StyledH2>
        <StyledP $center>Preencha o formulário para receber mais informações</StyledP>
        <InputContainer
          label={{ value: "Nome do Aluno:" }}
          input={{
            id: "idNameStudent",
            placeholder: "Nome do Aluno",
            type: "text"
          }} />
        <InputContainer
          label={{ value: "Nome do Responsável:" }}
          input={{
            id: "idNameReponsible",
            placeholder: "Nome do Responsável",
            type: "text"
          }} />
        <InputContainer
          label={{ value: "Sobrenome do Responsável:" }}
          input={{
            id: "idSurnameResponsible",
            placeholder: "Sobreome do Responsável",
            type: "text"
          }} />
        <InputContainer
          label={{ value: "Telefone para Contato:" }}
          input={{
            id: "idPhone",
            placeholder: "(XX) XXXXX-XXXX",
            type: "number"
          }} />
        <InputContainer
          label={{ value: "E-mail:" }}
          input={{
            id: "idEmail",
            placeholder: "Seu melhor e-mail",
            type: "email"
          }} />
        <LabelForm
          htmlFor="idPathway">Série de Interesse:</LabelForm>
        <SelectForm id='idPathway' required>
          <option value="fundamental1">FUNDAMENTAL I</option>
          <option value="fundamental2">FUNDAMENTAL II</option>
          <option value="ensinoMedio">ENSINO MÉDIO</option>
        </SelectForm>
        <div>
          <InputForm
            id='idCheckbox'
            type="checkbox" $checkbox required />
          <StyledP style={{ margin: ".5em" }}>Declaro que li e concordo com a Política de Privacidade, bem como com o tratamento dos meus dados para fins de prospecção dos serviços educacionais prestados pela Escola Francis Drake.</StyledP>
        </div>
        <ButtonForm type='submit'>Assinar</ButtonForm>
      </StyledForm>
    </FormContainer>
  )
}

export default ContactForm