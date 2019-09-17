     
     const obj = {
      name:'solijon',
      age: 10,
     }
    
      const array = [];

      getToken().then(token => {
        fetch(`${API_URL}`, {
          headers: {
            Authorization: 'Bearer ' + token
          },
        })
        .then(res => res.json())
        .then(data => array.push(data));
      });
      
      setTimeout(() => {
        const result = array.find((arrDatas) => {
          return arrDatas.map((arrData) => {
            if(arrData.name === 'solijon' && arrData.age === 10) {
              if(arrDatas.includes(arrData)) {
                console.log('found something');
              }
            }
          });
        });
      }, 2000)
