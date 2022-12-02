import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const StyledToastify = styled(ToastContainer)`
  .Toastify__toast {
      background-color: var(--gray200);
      color:var(--gray500)
  }
  .Toastify__toast-body {
  }
  .Toastify__progress-bar {
  }
`;