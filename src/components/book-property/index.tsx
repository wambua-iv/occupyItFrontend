import { Container, Step, StepLabel, Stepper } from '@mui/material';
import { Connector, CustomButton, StepIcon } from '../../styles';
import React, { useState } from 'react';
import ConfirmBooking from './ConfirmBooking';
import MakePayment from './MakePayment';
import { Loading } from '../utils';
import Router from 'next/router';

export interface BookPropertyFormInterface {
  handleData(data: any): void;
  steps: any;
  handleNext(): void;
  step: any;
}

function BookProperty() {
  const [step, updateStep] = useState(0);
  const steps = ['Confirm Booking', 'Make Payment'];
  const handleNext = () => {
    updateStep((activeStep: number) => activeStep + 1);
    if (step === steps.length - 1) {
      return Router.push('/listings');
    }
  };

  const [bookingData, setBookingData] = useState({});
  const updateData = (data: any) => {
    handleNext();
    return setBookingData((prev) => ({ ...prev, ...data }));
  };
  console.log(bookingData)

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
                  handleData={updateData}
                  steps={steps}
                  step={step}
                  handleNext={handleNext}
                />
              );
            case 1:
              return (
                <MakePayment
                  handleData={updateData}
                  steps={steps}
                  step={step}
                  handleNext={handleNext}
                />
              );
            case 2 :
              <Loading />
            default:
              <Loading />;
          }
        })()}
      </Container>
    </Container>
  );
}

export default BookProperty;
