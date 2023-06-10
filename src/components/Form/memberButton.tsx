import { useState } from "react";
import { MemberForm } from "./memberForm";
import { FormValid } from "./formValidation";

export function MemberButton() {
  const [isElementVisible, setElementVisible] = useState<boolean>(false);

  const [formFields, setFormFields] = useState({
    email: "",
    firstName: "",
    lastName: "",
});

const [formErrors, setFormErrors] = useState({
    email: "",
    firstName: "",
    lastName: "",
    status:""
});

  const handleButtonClick = () => {
    setElementVisible(!isElementVisible);
  };

  return (
    <>
      <div className="mx-auto mt-6">
        <button
          className="text-black w-max bg-white px-6 py-3 text-md rounded-xl hover:scale-110 duration-200 hover:text-white hover:bg-black"
          onClick={handleButtonClick}
        >
          Join Unique Gallery Membership
        </button>
      </div>
      {isElementVisible && <MemberForm isElementVisible={isElementVisible} setElementVisible={setElementVisible} formFields={formFields} setFormFields={setFormFields} formErrors={formErrors} setFormErrors={setFormErrors}/>}
      <FormValid formErrors={formErrors}/>
    </>
  );
}
