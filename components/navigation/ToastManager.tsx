import React, { useEffect, useState } from "react";
import ToastDialog from "../modal/Toast";

const ToastManager = ({ message }: { message: string }) => {
  const [toastMessage, setToastMessage] = useState(message);

  useEffect(() => {
    setToastMessage(message);
  }, [message]);

  return <ToastDialog message={toastMessage} />;
};

export default ToastManager;
