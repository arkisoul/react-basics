import { useState, useEffect } from "react";
import PropTypes from 'prop-types'

import MainLayout from "../../layout/main/Main";
import ErrorBoundary from "../../components/error-boundary/ErrorBoundary";
import axios from '../../services/api-service';

export default function Contact(props) {
  const [person, setPerson] = useState({name: 'John', age: 32})

  useEffect(() => {
    const getPatients = async() => {
      const res = await axios.get("/users/1");
      const updateRes = await axios.put("/users/1", { name: "Ramesh", email: 'sunil@mailinator.com', password: "12345678" });
      console.log(res.data, updateRes.data);
    }
    getPatients()
  })

  return (
      <MainLayout
        main={
          <>
            <h1>Contact Component</h1>
            <ErrorBoundary>
              <CounterComponent person={person} anOptionalBoolProp={false} />
            </ErrorBoundary>
            <button onClick={() => setPerson(undefined)}>Change person</button>
          </>
        }
      ></MainLayout>
  );
}

const CounterComponent = (props) => {
  return (
    <div>
      <h1>Name: {props.person.name}</h1>
      <h1>Age: {props.person.age}</h1>
    </div>
  )
}

CounterComponent.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    height: PropTypes.number
  }).isRequired,
  anOptionalStringProp: PropTypes.string,
  anOptionalBoolProp: PropTypes.bool.isRequired
}