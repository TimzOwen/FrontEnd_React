import { Fragment, useState } from "react";
import sytles from './ListGroup.module.css';

interface Props{
    items: string[];
    heading: string;
    onSelectItem: (items: string) => void;
}

function ListGroup({items, heading, onSelectItem}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
   

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items Found </p>}
      <ul className={[sytles.ListGroup, sytles.container].join(' ')}>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active "
                : "list-group-item"
            }
            key={item}
            onClick={() => {(
                setSelectedIndex(index));
                onSelectItem(item);
            }}
          >
            {" "}
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
