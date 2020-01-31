
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";




class Spinner extends React.Component {
    render() {
        return(
<div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>
);
    }
}

export default Spinner;