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
