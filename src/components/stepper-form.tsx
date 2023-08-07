import { useState } from 'react';
import { Stepper, Button, Group, Input, PinInput, Checkbox } from '@mantine/core';

export default function FormStepper() {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step label="User Infos" description="Create an account">
          <div>
            <Input type="text" placeholder="First Name" />
            <Input type="text" placeholder="Last Name" />
            <Input type="email" placeholder="Email" />
          </div>
        </Stepper.Step>
        <Stepper.Step label="Bank infos" description="Bank Infos">
          <div>
            <Input type="number" placeholder="Card Number" />
            <Input type="number" placeholder="Card Date" />
          </div>
        </Stepper.Step>
        <Stepper.Step label="Verify Email" description="Verify email">
          <Group position="center">
            <PinInput length={6} />
          </Group>
        </Stepper.Step>
        <Stepper.Step label="Full Access" description="Get full access">
          <Checkbox
            label="I agree to sell my privacy"
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
