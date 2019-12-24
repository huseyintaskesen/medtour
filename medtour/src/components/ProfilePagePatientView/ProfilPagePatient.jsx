import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

export default function ProfilePagePatient () {
//     const useStyles = makeStyles(theme => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       width: 200,
//     },
//   },
// }));
        return (
            <div class="profile-page-container" >
                <div class ="form-row" style={{marginBottom: '30px'}}>
                <ReactCrop src="http://placekitten.com/200/300" />
                </div>
                
                <form>
                <div class="form-row">
                    <div class="col-md-4 mb-3">
                    <label for="validationDefault01">First name</label>
                    <input type="text" class="form-control" id="validationDefault01" placeholder="First name" />
                    </div>
                    <div class="col-md-4 mb-3">
                    <label for="validationDefault02">Last name</label>
                    <input type="text" class="form-control" id="validationDefault02" placeholder="Last name" />
                    </div>
                    </div>
                <div class="form-row">
                    <div class="col-md-4 mb-3">                    
                    <label for="validationDefaultUsername">New password</label>
                    <div class="input-group">
                        <div class="input-group-prepend">
                        </div>
                        <input type="text" class="form-control"  aria-describedby="inputGroupPrepend2" />
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">                    
                    <label for="validationDefaultUsername">Re-enter new password</label>
                    <div class="input-group">
                        <div class="input-group-prepend">
                        </div>
                        <input type="text" class="form-control"   aria-describedby="inputGroupPrepend2" />
                        </div>
                    </div>
                    
                </div>   
                
                <div class="form-row">
                    <div class="col-md-4 mb-3">                    
                    <label for="validationDefaultUsername">Email address</label>
                    <div class="input-group">
                        <div class="input-group-prepend">
                        </div>
                        <input type="text" class="form-control"  placeholder="Email address" aria-describedby="inputGroupPrepend2" />
                    </div>
                    </div>

                    <div class="col-md-4 mb-3">                    
                    <label for="validationDefaultUsername">Mobile Phone</label>
                    <div class="input-group">
                        <div class="input-group-prepend">
                        </div>
                        <input type="text" class="form-control"  placeholder="" aria-describedby="inputGroupPrepend2" />
                    </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-md-3 mb-3">
                    <label for="validationDefault03">City</label>
                    <input type="text" class="form-control" id="validationDefault03" placeholder="City" />
                    </div>
                    <div class="col-md-3 mb-3">
                    <label for="validationDefault04">Country</label>
                    <input type="text" class="form-control" id="validationDefault04" placeholder="Country" />
                    </div>
                    
                </div>
                {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
                <button class="btn btn-primary" type="submit">Update information</button>
                </form>
                 </div>
                 
                     
        );
    }
  