import React from 'react';
import ReactDOM from 'react-dom';
import fitText from './fittext';
import SubmissionsForm from './SubmissionsForm';

document.addEventListener("DOMContentLoaded", function(event) {
  const headerAnchor = document.getElementById('header');
  if (headerAnchor) {
    fitText(headerAnchor, 1.1);
  }
  //$('.jumbotron h1, .navbar-default .navbar-brand').fitText(1.1);

  const submissionsFormAnchor = document.getElementById('submissions-form');
  if (submissionsFormAnchor) {
    ReactDOM.render(<SubmissionsForm />, submissionsFormAnchor);
  }
});