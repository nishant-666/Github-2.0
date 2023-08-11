import React, { useState } from "react";
import styles from "@/styles/NewRepo.module.scss";
import CommonInput from "@/components/common/Input";
import TextArea from "@/components/common/TextArea";
import CommonButton from "@/components/common/Button";
import { createRepo } from "@/APIs/getGItubAPIs";
import { useRouter } from "next/router";

export default function NewRepo() {
  const router = useRouter();
  const [repoData, setRepoData] = useState({
    repoName: "",
    repoDesc: "",
  });
  const getInputs = (event: React.ChangeEvent) => {
    let { name, value } = event.target as HTMLInputElement;

    let input = { [name]: value };
    setRepoData((prev) => ({ ...prev, ...input }));
  };
  const createRepository = async () => {
    await createRepo(repoData.repoName, repoData.repoDesc);
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
            <CommonInput name="repoName" title="" onChange={getInputs} />
          </div>
          <p className={styles.repoDesc}>Description</p>
          <div className={styles.repoInput}>
            <TextArea name="repoDesc" title="" onChange={getInputs} />
          </div>

          <CommonButton title="Create Repository" onClick={createRepository} />
        </div>
      </div>
    </div>
  );
}
