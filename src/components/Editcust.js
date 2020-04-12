import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import DialogTitle from '@material-ui/core/DialogTitle';

export default function Editcust(props) {

  const [open, setOpen] = React.useState(false);
  const [cust, setCust] = React.useState(
    { id: '', firstname: '', lastname: '', streetaddress: '', postcode: '', city: '', email: '', phone: '' });

  const handleClickOpen = () => {
    console.log(props.cust);
    setCust({
      id: props.cust.id, firstname: props.cust.firstname, lastname: props.cust.lastname, 
      streetaddress: props.cust.streetaddress, postcode: props.cust.postcode, city: props.cust.city, 
      email: props.cust.email, phone: props.cust.phone
    })
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    setCust({ ...cust, [event.target.name]: event.target.value })
  }
  const updateCust = () => {
    props.updateCust(cust, props.cust._links.cust.href);
    handleClose();
  }

  return (
    <div>
      <Button color="primary" onClick={handleClickOpen}>
        Edit customer
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Customer</DialogTitle>
        <DialogContent>

        <TextField
                        autoFocus
                        margin="dense"
                        name="brand"
                        value={cust.id}
                        onChange={e => handleInputChange(e)}
                        label="Id"

                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="model"
                        value={cust.firstname}
                        onChange={e => handleInputChange(e)}
                        label="Firstname"

                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="lastname"
                        value={cust.lastname}
                        onChange={e => handleInputChange(e)}
                        label="Lastname"

                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="streetaddress"
                        value={cust.streetaddress}
                        onChange={e => handleInputChange(e)}
                        label="Streetaddress"

                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="postcode"
                        value={cust.postcode}
                        onChange={e => handleInputChange(e)}
                        label="Postcode"

                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="city"
                        value={cust.city}
                        onChange={e => handleInputChange(e)}
                        label="City"

                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="email"
                        value={cust.email}
                        onChange={e => handleInputChange(e)}
                        label="Email"

                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="phone"
                        value={cust.phone}
                        onChange={e => handleInputChange(e)}
                        label="Phone"

                        fullWidth
                    />


        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={updateCust} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}