import React, { useState } from "react";
import styles from "../../style/calculation.module.scss";
import { FaCheck } from "react-icons/fa";

const ManagementSystem = ({
  siteManagementSystemYes,
  siteManagementSystemNo,
  handleChangeManagementSystemYes,
  handleChangeManagementSystemNo,
}) => {
  return (
    <div className={styles.item_one}>
      <h4>Система управління (адмін панель)</h4>
      <div className={styles.input_wrap}>
        <label
          htmlFor="management_system_yes"
          className={`${styles.custom_checkbox} ${
            siteManagementSystemYes?.selected && styles.custom_checkbox_active
          }`}
          onClick={handleChangeManagementSystemYes}
        >
          <FaCheck />
        </label>
        <p>Так</p>
      </div>
      <div className={styles.input_wrap}>
        <label
          htmlFor="management_system_not"
          className={`${styles.custom_checkbox} ${
            siteManagementSystemNo?.selected && styles.custom_checkbox_active
          }`}
          onClick={handleChangeManagementSystemNo}
        >
          <FaCheck />
        </label>
        <p>Ні</p>
      </div>
    </div>
  );
};

export default ManagementSystem;
