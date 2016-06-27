import React from 'react';
import ReactDOM from 'react-dom';
import fitText from './fittext';
import SubmissionsForm from './SubmissionsForm';
import BootstrapNative from 'bootstrap.native';
import Littlefoot from 'littlefoot';

document.addEventListener("DOMContentLoaded", function(event) {
	const Collapses = document.querySelectorAll('[data-toggle="collapse"]'), cll = Collapses.length;
	for (let i = 0; i<cll;i++) {
		const item = Collapses[i], options = {};
		options.duration = item.getAttribute('data-duration');
		new BootstrapNative.Collapse(item,options);
	}

  const Dropdowns = document.querySelectorAll('[data-toggle=dropdown]'), ddl = Dropdowns.length;
  for (let i = 0; i<ddl; i++) {
    new BootstrapNative.Dropdown(Dropdowns[i]);
  }

  Littlefoot();

  const fitTextElements = document.getElementsByClassName('fittext');
  for (let i = 0; i < fitTextElements.length; i++) {
    fitText(fitTextElements[i], 1.1);
  }

  const submissionsFormAnchor = document.getElementById('submissions-form');
  if (submissionsFormAnchor) {
    ReactDOM.render(<SubmissionsForm />, submissionsFormAnchor);
  }
});