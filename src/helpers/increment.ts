const increment = (
  cash: { [x: string]: number },
  value: string,
  quantity: number
) => {
  switch (value) {
    case "5000":
      cash["5000"] += quantity;
      break;
    case "2000":
      cash["2000"] += quantity;
      break;
    case "1000":
      cash["1000"] += quantity;
      break;
    case "500":
      cash["500"] += quantity;
      break;
    case "200":
      cash["200"] += quantity;
      break;
    case "100":
      cash["100"] += quantity;
      break;
    default:
      break;
  }
};

export default increment;
