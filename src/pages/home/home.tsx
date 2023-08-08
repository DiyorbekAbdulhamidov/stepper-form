import { FunctionComponent } from "react";
import { FormStepper } from "../../components";
import { FormProvider } from "../../context/form-context";

interface HomeProps { }

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <FormProvider>
      <FormStepper />
    </FormProvider>
  );
};

export default Home;