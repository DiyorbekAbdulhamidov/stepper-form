import React, { useState } from 'react';
import { Stepper, Button, Group, Input, PinInput, Checkbox } from '@mantine/core';
import { useFormContext } from '../context/form-context';

export default function FormStepper() {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 4 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const { formValues, setFormValues } = useFormContext();

  return (
    <>
      <Stepper active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step label="User Infos" description="Create an account">
          <div>
            <Input
              type="text"
              placeholder="First Name"
              value={formValues.firstName}
              onChange={(e) => setFormValues({ ...formValues, firstName: e.target.value })}
            />
            <Input
              type="text"
              placeholder="Last Name"
              value={formValues.lastName}
              onChange={(e) => setFormValues({ ...formValues, lastName: e.target.value })}
            />
            <Input
              type="email"
              placeholder="Email"
              value={formValues.email}
              onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
            />
          </div>
        </Stepper.Step>
        <Stepper.Step label="Bank infos" description="Bank Infos">
          <div>
            <Input
              type="number"
              placeholder="Card Number"
              value={formValues.cardNumber}
              onChange={(e) => setFormValues({ ...formValues, cardNumber: e.target.value })}
            />
            <Input
              type="number"
              placeholder="Card Date"
              value={formValues.cardDate}
              onChange={(e) => setFormValues({ ...formValues, cardDate: e.target.value })}
            />
          </div>
        </Stepper.Step>
        <Stepper.Step label="Verify Email" description="Verify email">
          <Group position="center">
            <PinInput
              length={6}
              value={formValues.pin}
              onChange={(value) => setFormValues({ ...formValues, pin: value })}
            />
          </Group>
        </Stepper.Step>
        <Stepper.Step label="Full Access" description="Get full access">
          <Checkbox
            label="I agree to sell my privacy"
            checked={formValues.agreeToPrivacy}
            onChange={(e) => setFormValues({ ...formValues, agreeToPrivacy: e.target.checked })}
          />
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to the previous step
        </Stepper.Completed>
      </Stepper>

      <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  );
}