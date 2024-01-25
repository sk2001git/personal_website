import Image from "next/image";

const Arrow = (props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) => {
  const disabled = props.disabled ? ' arrow--disabled' : '';
  const arrowDirection = props.left ? 'left' : 'right';
  const action = props.left ? "embla_prev" : "embla_next";

  return (
      <button className={`${action}`} onClick={props.onClick} disabled={props.disabled}>
        { !disabled && <Image
          src={`/assets/icons/${arrowDirection}.svg`}
          width={20}
          height={40}
          alt={`${arrowDirection} arrow`}
          onClick={props.onClick}
        /> }
      </button>
      
  );
};
export default Arrow;