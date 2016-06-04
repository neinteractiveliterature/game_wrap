import React from 'react';
import update from 'react-addons-update';

class SubmissionsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submission: {
        name: "",
        email: "",
        phone: "",
        title: "",
        submission_type: "",
        abstract_topic: "",
        abstract_thesis: "",
        abstract_methodology: "",
        abstract_larp_info: "",
        other_info: "",
      },
      missingFields: []
    };

    this.onChangeFormElement = this.onChangeFormElement.bind(this);
    this.submit = this.submit.bind(this);
    this.submisisonIslarp = this.submissionIsLarp.bind(this);
    this.renderLarpSubmissionInfo = this.renderLarpSubmissionInfo.bind(this);
    this.renderLarpInfoField = this.renderLarpInfoField.bind(this);
    this.renderInputFormGroup = this.renderInputFormGroup.bind(this);
    this.renderSelectFormGroup = this.renderSelectFormGroup.bind(this);
    this.renderTextareaFormGroup = this.renderTextareaFormGroup.bind(this);
    this.renderFormGroup = this.renderFormGroup.bind(this);
  }

  onChangeFormElement(field, event) {
    this.setState(update(this.state, { submission: { [field]: { $set: event.target.value } } }));
  }

  submit(event) {
    const requiredFields = [
      "name", "email", "phone", "title", 'submission_type', 'abstract_topic', 'abstract_thesis', 'abstract_methodology'
    ];

    if (this.submissionIsLarp()) {
      requiredFields.push('abstract_larp_info');
    }

    const missingFields = requiredFields.filter((field) => {
      return (this.state.submission[field].trim() == '');
    });

    if (missingFields.length > 0) {
      this.setState({missingFields: missingFields});
      event.preventDefault();
    }
  }

  submissionIsLarp() {
    return /LARP/.test(this.state.submission.submission_type);
  }

  renderLarpSubmissionInfo() {
    if (!this.submissionIsLarp()) {
      return null;
    }

    return (
      <div className="alert alert-warning">
        <h3 style={{marginTop: 0}}>Additional information about LARP submissions</h3>

        <p>
          Game Wrap publishes LARP scenarios in conjunction with an essay concerning the design, writing process,
          or other topics specifically related to the attached LARP materials (as opposed to, for example, what
          happened in particular runs of the game).  If an essay discusses multiple LARPs, an article not including
          the LARP materials may be a better format for publication.
        </p>

        <p>
          The LARP is intended to serve as supplemental material to the author’s essay, allowing readers to examine
          the game being discussed and even play it themselves. We are typically looking for short LARPs that contain
          everything necessary for play &emdash; including the scenario and all necessary rules.
        </p>
      </div>
    );
  }

  renderLarpInfoField() {
    if (!this.submissionIsLarp()) {
      return null;
    }

    return this.renderTextareaFormGroup(
      'abstract_larp_info',
      "If you would like us to consider including a LARP you have written to supplement your article, please tell " +
      "about the accompanying LARP. For instance, describe the scenario, rule system used (if any), number of " +
      "players, and an approximate idea of how long the written materials for the LARP are."
    );
  }

  renderInputFormGroup(fieldName, type, preamble) {
    const content = (
      <input
        id={fieldName}
        className="form-control"
        type={type}
        name={fieldName}
        value={this.state.submission[fieldName]}
        onChange={this.onChangeFormElement.bind(this, fieldName)}
      />
    );

    return this.renderFormGroup(fieldName, preamble, content);
  }

  renderSelectFormGroup(fieldName, preamble, options) {
    const optionElements = options.map((option) => {
      return (<option key={option}>{option}</option>);
    })

    const content = (
      <select
        id={fieldName}
        className="form-control"
        name={fieldName}
        value={this.state.submission[fieldName]}
        onChange={this.onChangeFormElement.bind(this, fieldName)}
      >
        <option></option>
        {optionElements}
      </select>
    );

    return this.renderFormGroup(fieldName, preamble, content);
  }

  renderTextareaFormGroup(fieldName, preamble) {
    const content = (
      <textarea
        id={fieldName}
        className="form-control"
        name={fieldName}
        rows="6"
        value={this.state.submission[fieldName]}
        onChange={this.onChangeFormElement.bind(this, fieldName)}
      />
    );

    return this.renderFormGroup(fieldName, preamble, content);
  }

  renderFormGroup(fieldName, preamble, content) {
    let className = "form-group";
    let errorFeedback = null;

    if (this.state.missingFields.includes(fieldName)) {
      className += " has-feedback has-error";
      errorFeedback = (
        <div>
          <span data-error-feedback className="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>
          <span data-error-feedback className="sr-only">(field is required)</span>
        </div>
      );
    }

    return (
      <div className={className}>
        <label className="control-label" htmlFor={fieldName}>{preamble}</label>
        {content}
        {errorFeedback}
      </div>
    );
  }

  render() {
    return (
      <form className="form" action="/submit-abstract.php">
        {this.renderInputFormGroup('name', 'text', 'Your name')}
        {this.renderInputFormGroup('email', 'email', 'Your email address')}
        {this.renderInputFormGroup('phone', 'tel', (<span>Your phone number <small> (in case we can't reach you by email)</small></span>))}
        {this.renderInputFormGroup('title', 'text', 'Title of submission')}
        {this.renderSelectFormGroup('submission_type', 'Submission type', ["Essay with accompanying LARP scenario", "Article"])}

        {this.renderLarpSubmissionInfo()}

        <h3>Abstract</h3>

        {
          this.renderTextareaFormGroup(
            'abstract_topic',
            "A short description of your submission.  Article abstracts should include information about the subject of " +
            "your article and what you hope to say about it.  LARP abstracts should include a short description of the " +
            "LARP as well as what you hope to say about it in your author's notes."
          )
        }

        {
          this.renderTextareaFormGroup(
            'abstract_thesis',
            "Please tell us what position you will be taking on that topic, or what the thesis of your article will be."
          )
        }

        {
          this.renderTextareaFormGroup(
            'abstract_methodology',
            "Please tell us what method you’ll be using to address your topic (e.g. interviews? literature review? " +
            "personal essay? analysis of LARP materials? etc.)"
          )
        }


        {this.renderLarpInfoField()}

        <div className="form-group">
          <p>Anything else you'd like to tell us?</p>
          <textarea
            id="other_info"
            className="form-control"
            name="other_info"
            rows="6"
            value={this.state.submission.other_info}
            onChange={this.onChangeFormElement.bind(this, 'other_info')}
          />
        </div>

        <div className="form-group">
          <input className="btn btn-default" type="submit" onClick={this.submit} />
        </div>
      </form>
    );
  }
};

export default SubmissionsForm;