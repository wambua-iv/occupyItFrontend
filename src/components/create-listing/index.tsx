import { Container, Step, StepLabel, Stepper } from '@mui/material';
import React, { useContext, useState, useEffect } from 'react';
import Router from 'next/router';
import { AuthContext } from '../../../utils/GlobalState';
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
  const [step, updateStep] = useState(0);
  const [loading, setloading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [submitAlert, setSubmitAlert] = useState<boolean>(false);
  const [imageSrc, setImageSrc] = useState<any>([]);
  const [propertyData, setPropertyData] = useState<any>({});

  const [authState] = useContext(AuthContext);
  const steps = ['Details', 'Property Infomation', 'Contact Information'];

  const handleNext = () => {
    updateStep((activeStep: number) => activeStep + 1);
  };

  const updateData = (data: any) => {
    handleNext();
    return setPropertyData((prev: any) => ({ ...prev, ...data }));
  };

  //image upload handler
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
    setloading((prev) => !prev);
    const postData = {
      ownerId: parseInt(propertyData?.ID),
      property_name: propertyData?.property_name,
      type: propertyData?.type,
      location: propertyData?.location,
      price: parseInt(propertyData?.price),
      description: propertyData?.description,
      availability: propertyData?.availability.toLocaleDateString(),
      additional_information: propertyData?.additional_info || '',
      contact_information: {
        email: propertyData?.email,
        name: propertyData?.name,
        phone_number: propertyData?.phone_number,
      },
      images: imageSrc,
      amenities: {
        bedrooms: propertyData?.bedrooms,
        washroom: propertyData?.washroom,
      },
    };

    const url = 'https://occupy-it.herokuapp.com/properties/create_listing';
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authState?.tokens.access_token}`,
      },
      credentials: 'include',
      body: JSON.stringify(postData),
    })
      .then((res) => res.json)
      .then((data: any) => {
        if (data?.status > 300) {
          setloading((prev) => !prev);
          setError((prev) => !prev);
          return Router.reload();
        }
        setloading((prev) => !prev);
        setSubmitAlert((prev) => !prev);
        Router.push('/listings');
        console.log(data);
      });
  };

  return authState?.logged == true &&
    authState?.user.role == 'property owner' ? (
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
              return (
                <Success
                  propertyData={propertyData}
                  images={imageSrc}
                  onSubmit={onSubmit}
                  submit={submitAlert}
                  loading={loading}
                  error={error}
                />
              );
            default:
              <Loading />;
          }
        })()}
      </Container>
    </Container>
  ) : authState?.logged == true && authState?.user.role != 'property owner' ? (
    <Loading redirectUrl="/register" />
  ) : (
    <Loading redirectUrl="/auth" />
  );
}

export default CreateListing;
