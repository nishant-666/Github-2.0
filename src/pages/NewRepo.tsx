import React, { useState } from "react";
import styles from "@/styles/NewRepo.module.scss";
import CommonInput from "@/components/common/Input";
import TextArea from "@/components/common/TextArea";
import CommonButton from "@/components/common/Button";
import { createRepo } from "@/APIs/getGItubAPIs";
import { useRouter } from "next/router";
import CommonRadio from "@/components/common/RadioButton";
import { BsGlobe, BsFillLockFill } from "react-icons/bs";
import CommonCheckbox from "@/components/common/Checkbox";

export default function NewRepo() {
  const router = useRouter();
  const [repoData, setRepoData] = useState({
    name: "",
    description: "",
    private: false,
    auto_init: false,
  });

  const radioOption = [
    {
      title: "Public",
      icon: <BsGlobe size={20} className={styles.radioIcon} />,
      value: 1,
    },
    {
      title: "Private",
      icon: <BsFillLockFill size={20} className={styles.radioIcon} />,
      value: 2,
    },
  ];

  const getInputs = (event: React.ChangeEvent) => {
    let { name, value, checked } = event.target as HTMLInputElement;

    if (name === "private") {
      let input = { [name]: Number(value) === 1 ? false : true };
      setRepoData((prev) => ({ ...prev, ...input }));
    } else if (name === "auto_init") {
      let input = { [name]: checked };
      setRepoData((prev) => ({ ...prev, ...input }));
    } else {
      let input = { [name]: value };
      setRepoData((prev) => ({ ...prev, ...input }));
    }
  };

  const createRepository = async () => {
    await createRepo(repoData);
    router.push("/");
  };
  return (
    <div className={styles.newRepoMain}>
      <div className={styles.newRepoInner}>
        <p className={styles.title}>Create a new repository</p>
        <p className={styles.subtitle}>
          A repository contains all project files, including the revision
          history. Already have a project repository elsewhere?
        </p>
        <p>Required fields are marked with an asterisk (*).</p>
        <div className={styles.repoForm}>
          {/* <p>Owner *</p> */}
          <p>Repository name *</p>
          <div className={styles.repoInput}>
            <CommonInput name="name" title="" onChange={getInputs} />
          </div>
          <p className={styles.repoDesc}>Description</p>
          <div className={styles.repoInput}>
            <TextArea name="description" title="" onChange={getInputs} />
          </div>
          <div className={styles.repoRadioBtn}>
            <CommonRadio getInputs={getInputs} radioOption={radioOption} />
          </div>
          <div className={styles.addGitignore}>
            <p className={styles.gitIgnoreTitle}>
              Initialize this repository with:
            </p>
            <CommonCheckbox title="Add a README file" getInputs={getInputs} />
            <span className={styles.subtitle}>
              This is where you can write a long description for your project
            </span>
          </div>
          <CommonButton title="Create Repository" onClick={createRepository} />
        </div>
      </div>
    </div>
  );
}
