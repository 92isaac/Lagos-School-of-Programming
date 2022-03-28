import React from 'react'

const Modal =(props)=>{
    return (<div>
    <button type="button" className={props.className} data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">{props.btnName}</button>
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">New message</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                {/* <label for="recipient-name" className="col-form-label">Recipient:</label>
                <input type="text" className="form-control" id="recipient-name" /> */}
                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                    <option selected>Open this select menu</option>
                    <option value="1">Ogba1</option>
                    <option value="2">Ogba2</option>
                    <option value="3">Ogba3</option>
                </select>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-outline-primary">Continue</button>
          </div>
        </div>
      </div>
      </div>
    </div>
)}

export default Modal;