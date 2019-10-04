  function handleExport() {
    const url = `${API_URL}/temperatures/${requestedValToExport.site}/${dateFormat(requestedValToExport.startDate)}/${dateFormat(requestedValToExport.endDate)}/csvfile`;
    getToken()
      .then((token) => {
        fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.blob())
          .then((blob) => {
            const a = document.createElement('a');
            a.href = window.URL.createObjectURL(blob);
            a.download = ('temperatures.csv');
            document.body.appendChild(a);
            a.click();
          });
      });
  }
