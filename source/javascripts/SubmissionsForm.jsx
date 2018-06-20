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
        submission_type: "",
        title: "",

        abstract_topic: "",
        abstract_questions: "",
        abstract_supporting_material: "",
        abstract_methodology: "",
        abstract_specific_culture: "",
        abstract_thesis: "",
        editorial_feedback_request: "",

        abstract_larp_length: "",
        abstract_larp_theory: "",
        abstract_larp_goals: "",
        abstract_larp_attention: "",
        abstract_larp_learnings: "",
        abstract_larp_do_differently: "",
      },
      missingFields: []
    };

    this.onChangeFormElement = this.onChangeFormElement.bind(this);
    this.submit = this.submit.bind(this);
    this.submissionIsLarp = this.submissionIsLarp.bind(this);
    this.renderLarpSubmissionInfo = this.renderLarpSubmissionInfo.bind(this);
    this.renderLarpInfoField = this.renderLarpInfoField.bind(this);
    this.renderInputFormGroup = this.renderInputFormGroup.bind(this);
    this.renderSelectFormGroup = this.renderSelectFormGroup.bind(this);
    this.renderTextareaFormGroup = this.renderTextareaFormGroup.bind(this);
    this.renderFormGroup = this.renderFormGroup.bind(this);
    this.renderFieldsForType = this.renderFieldsForType.bind(this);
    this.renderSubmitButton = this.renderSubmitButton.bind(this);
  }

  onChangeFormElement(field, event) {
    this.setState(update(this.state, { submission: { [field]: { $set: event.target.value } } }));
  }

  submit(event) {
    const requiredFields = [
      "name", "email", "phone", "title", 'submission_type'
    ];

    if (this.submissionIsLarp()) {
      requiredFields.push('abstract_larp_length');
    }

    const missingFields = requiredFields.filter((field) => {
      return (this.state.submission[field].trim() == '');
    });

    if (missingFields.length > 0) {
      this.setState({missingFields: missingFields});
      event.preventDefault();
    }
  }

  submissionIsArticle() {
    return /Article/.test(this.state.submission.submission_type);
  }

  submissionIsLarp() {
    return /Larp/.test(this.state.submission.submission_type);
  }

  // NOTE: never called right now since the 2018 form redesign; leaving in in case I'm wrong about
  // this.
  renderLarpSubmissionInfo() {
    if (!this.submissionIsLarp()) {
      return null;
    }

    return (
      <div className="alert alert-warning">
        <h3 style={{marginTop: 0}}>Additional information about larp submissions</h3>

        <p>
          Game Wrap publishes larp scenarios in conjunction with an essay concerning the design, writing process,
          or other topics specifically related to the attached larp materials (as opposed to, for example, what
          happened in particular runs of the game).  If an essay discusses multiple larps, an article not including
          the larp materials may be a better format for publication.
        </p>

        <p>
          The larp is intended to serve as supplemental material to the author’s essay, allowing readers to examine
          the game being discussed and even play it themselves. We are typically looking for short larps that contain
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
      "If you would like us to consider including a larp you have written to supplement your article, please tell " +
      "about the accompanying larp. For instance, describe the scenario, rule system used (if any), number of " +
      "players, and an approximate idea of how long the written materials for the larp are."
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

  renderSubmitButton() {
    return (
      <div className="form-group">
        <input className="btn btn-default" type="submit" onClick={this.submit} />

        {
          (
            this.state.missingFields.length > 0 ?
            (
              <span style={{ paddingLeft: '1.5em' }} className="text-danger">
                <em>There's some missing information that we need.  Please check the highlighted fields above.</em>
              </span>
            ) :
            null
          )
        }
      </div>
    );
  }

  renderFieldsForType() {
    if (this.submissionIsLarp()) {
      return (
        <section style={{ paddingTop: '0.5em' }}>
          <h3>Larp with author's notes</h3>

          {this.renderInputFormGroup('title', 'text', 'Title')}
          {this.renderInputFormGroup('abstract_larp_length', 'text', 'Length of larp (written materials)')}

          {
            this.renderTextareaFormGroup(
              'abstract_larp_theory',
              "Is this larp an example of a larp theory concept or particular design type?"
            )
          }
          {
            this.renderTextareaFormGroup(
              'abstract_larp_goals',
              "What were your design goals in creating this game?"
            )
          }
          {
            this.renderTextareaFormGroup(
              'abstract_larp_attention',
              "What do you want to draw the readers’ attention to as they read through your larp materials?"
            )
          }
          {
            this.renderTextareaFormGroup(
              'abstract_larp_learnings',
              "Did you learn something about larp writing or running through creating this larp?"
            )
          }
          {
            this.renderTextareaFormGroup(
              'abstract_larp_do_differently',
              "Is there anything that you would do differently now?"
            )
          }

          {this.renderSubmitButton()}
        </section>
      );
    } else if (this.submissionIsArticle()) {
      return (
        <section style={{ paddingTop: '0.5em' }}>
          <h3>Article</h3>

          {this.renderInputFormGroup('title', 'text', 'Working title')}
          {
            this.renderTextareaFormGroup(
              'abstract_topic',
              "Topic of the article"
            )
          }
          {
            this.renderTextareaFormGroup(
              'abstract_questions',
              "What are some questions you are hoping the article will explore or answer?"
            )
          }
          {
            this.renderTextareaFormGroup(
              'abstract_supporting_material',
              "What kinds of sources or supporting material are you going to use (personal experience, interviews, observation, other articles/books, written larp materials, original research, etc.)?"
            )
          }
          {
            this.renderTextareaFormGroup(
              'abstract_methodology',
              "Are you going to bring ideas or methods from another field to shed light on an aspect of larp? What kind?"
            )
          }
          {
            this.renderTextareaFormGroup(
              'abstract_specific_culture',
              "Are you going to talk about a particular larp culture/type/group, or larp in general?"
            )
          }
          {
            this.renderTextareaFormGroup(
              'abstract_thesis',
              "What do you want the readers’ main takeaway to be?"
            )
          }
          {
            this.renderTextareaFormGroup(
              'editorial_feedback_request',
              "Is there anything in particular that you would like us to pay closer attention to in editing?"
            )
          }

          {this.renderSubmitButton()}
        </section>
      )
    }

    return (<p><em>Once you've selected a submission type, the rest of the form will appear here.</em></p>);
  }

  render() {
    return (
      <form className="form" method="POST" action="/submit-abstract.php">
        <h3>Contact Information</h3>
        {this.renderInputFormGroup('name', 'text', 'Name')}
        {this.renderInputFormGroup('email', 'email', 'Email')}
        {this.renderInputFormGroup('phone', 'tel', (<span>Phone number <small> (in case we can't reach you by email)</small></span>))}

        <section style={{ paddingTop: '1em'}}>
          {this.renderSelectFormGroup('submission_type', 'Submission type', ["Article", "Larp with author's notes"])}
        </section>

        {this.renderFieldsForType()}
      </form>
    );
  }
};

export default SubmissionsForm;
