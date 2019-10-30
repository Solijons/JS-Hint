async submit() {
    const {
      ids,
      note,
      priority,
    } = this.state;

    const notes = {
      note,
      priority,
    };

    const errors = [];
    const promises = [];

    let bodyReq = [];

    if (this.valid()) {
      getToken().then((token) => {
        ids.forEach((id) => {
          bodyReq = notes;
          bodyReq.field = id;

          promises.push(
            fetch(`${API_URL}/notes`, {
              body: JSON.stringify([bodyReq]),
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
              method: 'POST',
            })
              .then((res) => {
                if (res.status !== 201) {
                  errors.push(id);
                }
              })
              .catch(() => {
                errors.push(id);
              }),
          );
        });

        Promise.all(promises).then(() => {
          if (!errors.length) {
            this.setState({
              promptMessage: 'Success',
              promptTitle: 'Successfully added note(s) with priority.',
              showPrompt: true,
            });
          } else {
            this.setState({
              promptTitle: 'Error',
              promptMessage: `Failed to add Note(s) to Nursery Field(s): ${errors.join(',')}`,
              showPrompt: true,
            });
          }
        })
          .catch(() => {
            this.setState({
              promptMessage: `Error adding Note ${bodyReq.note} with ${bodyReq.priority} to Field ${bodyReq.id}`,
              promptTitle: 'Error!',
              showPrompt: true,
            });
          });
      })
        .catch(() => {
          this.setState({
            promptMessage: 'Failed to authentcate to back-end service.',
            promptTitle: 'Error!',
            showPrompt: true,
          });
        });
    }
  }
