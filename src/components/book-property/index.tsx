import { Container, Step, StepLabel, Stepper } from '@mui/material';
import { Connector, StepIcon } from '../../styles';
import React, { useState } from 'react';
import ConfirmBooking from './ConfirmBooking';
import MakePayment from './MakePayment';
import { Loading } from '../utils';
import Router from 'next/router';
import { AuthContext } from '../../../utils/GlobalState';

 export interface Property {
  _id: string;
  property_name: string;
  type: string;
  price: number;
  location: string;
  description: string;
  images?: any[];
  availability: string;
  additional_infomation?: string;
  contact_information?: {
    name: string;
    email: string;
    phone_number: any;
  };
}

export interface BookPropertyFormInterface {
  handleData?(data: any): void;
  handleNext?(): void;
  steps?: any;
  step?: any;
  property?: Property | any;
  alert?: boolean;
}

function BookProperty({ property }: BookPropertyFormInterface) {
  const [step, updateStep] = useState<number>(0);
  const [authState] = React.useContext(AuthContext);
  const steps = ['Confirm Booking', 'Make Payment'];
  const [createAlert, setCreateAlert] = useState<boolean>(false);

  const handleNext = () => {
    updateStep((activeStep: number) => activeStep + 1);
    if (step === steps.length - 1) {
      return Router.push('/listings');
    }
  };

  const onSubmit = async (data: any) => {
    const postData = {
      _id: property._id,
      id: parseInt(data.ID),
      name: data.name,
      mobile: data.phone_number,
      email: data.email,
    };
    const url = 'https://occupy-it.herokuapp.com/properties/book';
    await fetch('http://127.0.0.1:3090/properties/book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authState?.tokens.access_token}`,
      },
      body: JSON.stringify(postData),
    })
      .then(() => Router.push('/'))
      .catch(() => {
        Router.reload();
        setCreateAlert((prev: boolean) => !prev);
      });
  };

  return (
    <Container maxWidth="lg">
      <Container sx={{ my: 4 }}>
        <Stepper alternativeLabel activeStep={step} connector={<Connector />}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={StepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Container>

      <Container maxWidth="sm">
        {(() => {
          switch (step) {
            case 0:
              return (
                <ConfirmBooking
                  handleNext={handleNext}
                  steps={steps}
                  step={step}
                  property={property}
                />
              );
            case 1:
              return <MakePayment handleData={onSubmit} alert={createAlert} />;
            case 2:
              <Loading />;
            default:
              <Loading />;
          }
        })()}
      </Container>
    </Container>
  );
}

export default BookProperty;
