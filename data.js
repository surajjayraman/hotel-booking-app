var data = {
    header: ["Name", "Death toll"],
    rows: [
      ["San-Francisco (1906)", 1500],
      ["Messina (1908)", 87000],
      ["Ashgabat (1948)", 175000],
      ["Chile (1960)", 10000],
      ["Tian Shan (1976)", 242000],
      ["Armenia (1988)", 25000],
      ["Iran (1990)", 50000]
  ]}

  const readData = (data) => {
      console.log(data.header[0], data.header[1]);
      console.log(data.rows.length);
      for (let i = 0; i < data.rows.length; i++){
          console.log(data.rows[i]);
      }
      return true;
  }

  readData(data);