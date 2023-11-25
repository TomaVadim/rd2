import { Typography } from "@mui/material";

import { NewPasswordForm } from "components/NewPassword/NewPasswordForm/NewPasswordForm";

export const Component = () => {
  return (
    <>
      <Typography sx={{ marginBottom: "32px", textAlign: "center" }} variant="h4">
        Відновити пароль
      </Typography>

      <NewPasswordForm />
    </>
  );
};

Component.displayName = "NewPassword";
