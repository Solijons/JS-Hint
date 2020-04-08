  const removeSelectedValue = (selectedValue) => {
    setValue((prevValue) => {
      value.splice(value.indexOf(selectedValue), 1);
      return [...prevValue];
    });
  };
