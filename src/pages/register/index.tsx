import StepperRegister from "@/components/Stepper";
import React from "react";
import styles from "../../styles/register/register.module.css";

export default function Register() {
  return (
    <div className={styles.registerBody}>
      <div className={styles.registerCard}>
        <StepperRegister />
      </div>
    </div>
  );
}
