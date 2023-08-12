interface CommonButton {
  title: string;
  onClick?: () => void;
}

interface CommonInput {
  title: string;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface CommonTextArea {
  title: string;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

interface CommonRadioType {
  radioOption: {
    map: Function;
  };

  getInputs: (event: React.ChangeEvent) => void;
}

interface CommonCheckboxType {
  title: string;
  getInputs: (event: React.ChangeEvent) => void;
}

interface RepoDetails {
  repoName: string;
  eventType: string;
  payload: {
    commits: any;
  };
}
