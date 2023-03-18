const fetchData = async () => {
    try {
      const data = await promiseAPI1();
      await promiseAPI2();
      await promiseAPI3();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  
  const promiseAPI1 = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        fetch('https://dummyjson.com/posts')
          .then((response) => response.json())
          .then((data) => {
            const dataTable = document.getElementById('data-table');
            const row = dataTable.insertRow(-1);
            const cell1 = row.insertCell(0);
            cell1.innerHTML = JSON.stringify(data);
            resolve(true);
          });
      }, 1000);
    });
  
  const promiseAPI2 = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        fetch('https://dummyjson.com/products')
          .then((response) => response.json())
          .then((data) => {
            const dataTable = document.getElementById('data-table');
            const cell2 = dataTable.rows[0].insertCell(-1);
            cell2.innerHTML = JSON.stringify(data);
            resolve(true);
          });
      }, 2000);
    });
  
  const promiseAPI3 = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        fetch('https://dummyjson.com/todos')
          .then((response) => response.json())
          .then((data) => {
            const dataTable = document.getElementById('data-table');
            const cell3 = dataTable.rows[0].insertCell(-1);
            cell3.innerHTML = JSON.stringify(data);
            resolve(true);
          });
      }, 3000);
    });
  
  const fetchButton = document.getElementById('fetch-button');
  fetchButton.addEventListener('click', () => {
    fetchData();
  });
  