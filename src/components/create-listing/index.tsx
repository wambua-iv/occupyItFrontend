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
  uploadData?: any;
  onLoad?: any;
}

function CreateListing() {
  const [step, updateStep] = useState(1);
  const steps = ['Details', 'Property Infomation', 'Contact Information'];
  const handleNext = () => {
    updateStep((activeStep: number) => activeStep + 1);
    if (step === steps.length - 1) {
      return Router.push('/listings');
    }
  };

  const [propertyData, setPropertyData] = useState<any>({});
  const updateData = (data: any) => {
    handleNext();
    return setPropertyData((prev: any) => ({ ...prev, ...data }));
  };

  //image upload handler
  const [imageSrc, setImageSrc] = useState<any>([]);
  //const [uploadData, setUploadData] = useState<any>();
  const handleOnChange = async (e: any) => {
    const CLOUDINARY_UPLOAD_PRESET = 'messycloudy';
    const formData = new FormData();
    for (const file of e.target.files) {
      formData.append('file', file);
    }
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    const data = await fetch(
      'https://api.cloudinary.com/v1_1/cloudymessy/image/upload',
      {
        method: 'POST',
        body: formData,
      },
    ).then((r) => r.json());

    setImageSrc((imgs: any) => [...imgs, data.secure_url]);


  };

  const onSubmit = async () => {
    const postData = {
      ownerId: propertyData?.ID,
      name: propertyData?.name,
      type: propertyData?.type,
      location: propertyData?.location,
      price: parseInt(propertyData?.price),
      description: propertyData?.description,
      additional_infomation: propertyData?.additional_information || null,
      contact_information: {
        email: propertyData?.email,
        name: propertyData?.name,
        phone_number: propertyData?.phone_number,
      },
      images: imageSrc,
    };
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
                  onLoad={handleOnChange}
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
