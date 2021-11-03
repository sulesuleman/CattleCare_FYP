import React from "react";

const Button = ({
  id,
  classNames,
  children,
  type,
  loading,
  onSubmit,
  disable,
  text,
  ...props
}) => {
  return (
    <button
      id={id}
      type={type}
      disabled={disable}
      className={classNames}
      onClick={onSubmit}
      {...props}
    >
      {children}
      {text}
      {loading && (
        <div className=" ml-3 loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-6 w-6 "></div>
      )}
    </button>
  );
};

export default Button;
