import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { CheckWrapper } from "./Check.styled";

export const Check = () => {
  return (
    <CheckWrapper>
      <FontAwesomeIcon icon={faCheck} size="xl" />
    </CheckWrapper>
  );
};
