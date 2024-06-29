type Props = {
  btnText: string;
  onClick: () => void;
  isDisabled?: boolean;
};

export default function Button({
  btnText,
  onClick,
  isDisabled = false,
}: Props) {
  return (
    <button disabled={isDisabled} onClick={onClick}>
      {btnText}
    </button>
  );
}
