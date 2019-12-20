import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { Icon, InlineIcon } from "@iconify/react";
import deleteIcon from "@iconify/icons-mdi/delete";

export default function ProfilePageClinic() {
    //   $('#myList a[href="#profile"]').tab('show') // Select tab by name
    //   $('#myList a:first-child').tab('show') // Select first tab
    //   $('#myList a:last-child').tab('show') // Select last tab
    //   $('#myList a:nth-child(3)').tab('show') // Select third tab

    return (
        <div class="profile-page-container">
            <div class="form-row" style={{ marginBottom: "30px" }}>
                <ReactCrop src="http://placekitten.com/200/300" />
            </div>

            <form>
                <div class="form-row">
                    <div class="col-md-4 mb-3">
                        <label for="validationDefault01">Clinic name</label>
                        <input
                            type="text"
                            class="form-control"
                            id="validationDefault01"
                            placeholder="*Required*"
                        />
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-md-4 mb-3">
                        <label for="validationTextarea">
                            Clinic Description
                        </label>
                        <textarea
                            class="form-control "
                            id="validationTextarea"
                            placeholder="*Required*"
                        ></textarea>
                        <div class="invalid-feedback">
                            Please enter a message in the textarea.
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-md-4 mb-3">
                        <label for="validationDefaultUsername">
                            Email address
                        </label>
                        <div class="input-group">
                            <div class="input-group-prepend"></div>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="*Required*"
                                aria-describedby="inputGroupPrepend2"
                            />
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-md-4 mb-3">
                        <label for="validationDefaultUsername">
                            New password
                        </label>
                        <div class="input-group">
                            <div class="input-group-prepend"></div>
                            <input
                                type="text"
                                class="form-control"
                                aria-describedby="inputGroupPrepend2"
                            />
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="validationDefaultUsername">
                            Re-enter new password
                        </label>
                        <div class="input-group">
                            <div class="input-group-prepend"></div>
                            <input
                                type="text"
                                class="form-control"
                                aria-describedby="inputGroupPrepend2"
                            />
                        </div>
                    </div>
                </div>

                <div class="form-row">
                    <div class="col-md-3 mb-3">
                        <label for="validationDefaultUsername">
                            Available treatments
                        </label>
                        <ul class="list-group">
                            <li class="list-group-item list-group-item-primary">
                                Treatment 1
                            </li>
                            <li class="list-group-item list-group-item-secondary">
                                Treatment 2
                            </li>
                            <li class="list-group-item list-group-item-success">
                                Treatment 3
                            </li>
                            <li class="list-group-item list-group-item-danger">
                                Treatment 4
                            </li>
                            <li class="list-group-item list-group-item-warning">
                                Treatment 5
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="validationDefaultUsername">Prices</label>
                        <input
                            type="text"
                            class="form-control"
                            id="validationDefault04"
                            placeholder="Description for treatment 1"
                        />
                        <input
                            type="text"
                            class="form-control"
                            id="validationDefault04"
                            placeholder="Description for treatment 2"
                        />
                        <input
                            type="text"
                            class="form-control"
                            id="validationDefault04"
                            placeholder="Description for treatment 3"
                        />
                        <input
                            type="text"
                            class="form-control"
                            id="validationDefault04"
                            placeholder="Description for treatment 4"
                        />
                        <input
                            type="text"
                            class="form-control"
                            id="validationDefault04"
                            placeholder="Description for treatment 5"
                        />
                    </div>
                    <div class="col-md-1 mb-3">
                        <label for="validationDefaultUsername">Prices</label>
                        <input
                            type="text"
                            class="form-control"
                            id="validationDefault04"
                            placeholder="$"
                        />
                        <input
                            type="text"
                            class="form-control"
                            id="validationDefault04"
                            placeholder="$"
                        />
                        <input
                            type="text"
                            class="form-control"
                            id="validationDefault04"
                            placeholder="$"
                        />
                        <input
                            type="text"
                            class="form-control"
                            id="validationDefault04"
                            placeholder="$"
                        />
                        <input
                            type="text"
                            class="form-control"
                            id="validationDefault04"
                            placeholder="$"
                        />
                    </div>
                    <div class="col-md-5 mb-3" style={{ marginTop: "40px" }}>
                        <button class="delete-button">
                            <InlineIcon
                                icon={deleteIcon}
                                width="25"
                                height="25"
                            />
                        </button>
                        <br />
                        <button class="delete-button">
                            <InlineIcon
                                icon={deleteIcon}
                                width="25"
                                height="25"
                            />
                        </button>
                        <br />
                        <button class="delete-button">
                            <InlineIcon
                                icon={deleteIcon}
                                width="25"
                                height="25"
                            />
                        </button>
                        <br />
                        <button class="delete-button">
                            <InlineIcon
                                icon={deleteIcon}
                                width="25"
                                height="25"
                            />
                        </button>
                        <br />
                        <button class="delete-button">
                            <InlineIcon
                                icon={deleteIcon}
                                width="25"
                                height="25"
                            />
                        </button>
                    </div>
                </div>
                <div class="form-row">
                    <div
                        class="card"
                        style={{ width: "18rem", marginBottom: "30px" }}
                    >
                        <img
                            src="http://placekitten.com/50/50"
                            class="card-img-top"
                            alt="..."
                        ></img>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Cras justo odio</li>
                            <li class="list-group-item">
                                Dapibus ac facilisis in
                            </li>
                            <li class="list-group-item">Vestibulum at eros</li>
                        </ul>
                        <div class="card-body">
                            <button>
                                <a href="#" class="card-link">
                                    Delete the doctor
                                </a>
                            </button>
                        </div>
                    </div>
                    <div
                        class="card"
                        style={{ width: "18rem", marginBottom: "30px" }}
                    >
                        <img
                            src="http://placekitten.com/50/50"
                            class="card-img-top"
                            alt="..."
                        ></img>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Cras justo odio</li>
                            <li class="list-group-item">
                                Dapibus ac facilisis in
                            </li>
                            <li class="list-group-item">Vestibulum at eros</li>
                        </ul>
                        <div class="card-body">
                            <button>
                                <a href="#" class="card-link">
                                    Delete the doctor
                                </a>
                            </button>
                        </div>
                    </div>
                    <div
                        class="card"
                        style={{ width: "18rem", marginBottom: "30px" }}
                    >
                        <img
                            src="http://placekitten.com/50/50"
                            class="card-img-top"
                            alt="..."
                        ></img>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Cras justo odio</li>
                            <li class="list-group-item">
                                Dapibus ac facilisis in
                            </li>
                            <li class="list-group-item">Vestibulum at eros</li>
                        </ul>
                        <div class="card-body">
                            <button>
                                <a href="#" class="card-link">
                                    Delete the doctor
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-md-3 mb-3">
                        <label for="validationDefault03">City</label>
                        <input
                            type="text"
                            class="form-control"
                            id="validationDefault03"
                            placeholder="City"
                        />
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="validationDefault04">Country</label>
                        <input
                            type="text"
                            class="form-control"
                            id="validationDefault04"
                            placeholder="Country"
                        />
                    </div>
                </div>
                <button class="btn btn-primary" type="submit">
                    Save information
                </button>
            </form>
        </div>
    );
}
