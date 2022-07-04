import { Container, Step, StepLabel, Stepper } from '@mui/material';
import React, { useState } from 'react';
import Router from 'next/router';
import { Connector, StepIcon } from '../../styles';
import { Loading } from '../utils';
import ContactInfo from './ContactInfo';
import Details from './Details';
import PropertyInfo from './PropertyInfo';
import Success from './Success';

export interface CreateListingFormInterface {
  handleData(data: any): void;
  steps: any;
  handleNext(): void;
  step: any;
}

function CreateListing() {
  const [step, updateStep] = useState(0);
  const steps = ['Details', 'Property Infomation', 'Contact Information'];
  const handleNext = () => {
    updateStep((activeStep: number) => activeStep + 1);
    if (step === steps.length - 1) {
      return Router.push('/listings');
    }
  };
  const [propertyData, setPropertyData] = useState({});
  const updateData = (data: any) => {
    handleNext();
    return setPropertyData((prev) => ({ ...prev, ...data }));
  };

  console.log(propertyData);

  //image upload handler
  // function handleOnChange(changeEvent: any) {
  //   const reader = new FileReader();

  //   reader.onload = function (onLoadEvent) {
  //     setImageSrc(() => (onLoadEvent ? onLoadEvent?.target.result : 'null'));
  //     setUploadData(undefined);
  //   };

  //   reader.readAsDataURL(changeEvent.target.files[0]);
  // }

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
                <Details
                  handleData={updateData}
                  steps={steps}
                  step={step}
                  handleNext={handleNext}
                />
              );
            case 1:
              return (
                <PropertyInfo
                  handleData={updateData}
                  steps={steps}
                  step={step}
                  handleNext={handleNext}
                />
              );
            case 2:
              return (
                <ContactInfo
                  handleData={updateData}
                  steps={steps}
                  step={step}
                  handleNext={handleNext}
                />
              );
            case 3:
              return <Success propertyData={propertyData} />;
            default:
              <Loading />;
          }
        })()}
      </Container>
    </Container>
  );
}

export default CreateListing;
