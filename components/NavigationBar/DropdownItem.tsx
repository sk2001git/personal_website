
interface DropdownItemProps {
  name: string;
  onClick: React.MouseEventHandler<HTMLSpanElement>;
  href?: string | "/";
}

export const DropdownItem: React.FC<DropdownItemProps> = ({onClick, name, href}) => {
  return (<a onClick={onClick} className="cursor-pointer nav-words" href={href} >
    {name}
  </a>
  )
}