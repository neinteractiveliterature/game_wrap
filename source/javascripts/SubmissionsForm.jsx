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

    return (
      <div className="form-group">
        <p>
          If you would like us to consider including a LARP you have written to supplement your article, please tell
          about the accompanying LARP. For instance, describe the scenario, rule system used (if any), number of
          players, and an approximate idea of how long the written materials for the LARP are.
        </p>
        <textarea
          id="abstract_larp_info"
          className="form-control"
          name="abstract_larp_info"
          rows="6"
          value={this.state.submission.abstract_larp_info}
          onChange={this.onChangeFormElement.bind(this, 'abstract_larp_info')}
        />
      </div>
    );
  }

  render() {
    return (
      <form className="form" action="/submit-abstract.php">
        <div className="form-group">
          <label className="control-label" htmlFor="name">Your name</label>
          <input
            id="name"
            className="form-control"
            type="text"
            name="name"
            value={this.state.submission.name}
            onChange={this.onChangeFormElement.bind(this, 'name')}
          />
        </div>

        <div className="form-group">
          <label className="control-label" htmlFor="email">Your email address</label>
          <input
            id="email"
            className="form-control"
            type="email"
            name="email"
            value={this.state.submission.email}
            onChange={this.onChangeFormElement.bind(this, 'email')}
          />
        </div>

        <div className="form-group">
          <label className="control-label" htmlFor="phone">
            Your phone number
            <small> (in case we can't reach you by email)</small>
          </label>
          <input
            id="phone"
            className="form-control"
            type="tel"
            name="phone"
            value={this.state.submission.phone}
            onChange={this.onChangeFormElement.bind(this, 'phone')}
          />
        </div>

        <div className="form-group">
          <label className="control-label" htmlFor="title">Title of submission</label>
          <input
            id="title"
            className="form-control"
            type="text"
            name="title"
            value={this.state.submission.title}
            onChange={this.onChangeFormElement.bind(this, 'title')}
          />
        </div>

        <div className="form-group">
          <label className="control-label" htmlFor="submission_type">Submission type</label>
          <select
            id="submission_type"
            className="form-control"
            name="submission_type"
            value={this.state.submission.submission_type}
            onChange={this.onChangeFormElement.bind(this, 'submission_type')}
          >
            <option></option>
            <option>Essay with accompanying LARP scenario</option>
            <option>Article</option>
          </select>
        </div>

        {this.renderLarpSubmissionInfo()}

        <div className="form-group">
          <label className="control-label" htmlFor="abstract_topic">Abstract</label>
          <p>
            A short description of your submission.  Article abstracts should include information about the subject of
            your article and what you hope to say about it.  LARP abstracts should include a short description of the
            LARP as well as what you hope to say about it in your author's notes.
          </p>
          <p>Please give us a short description of the topic of your article.</p>
          <textarea
            id="abstract_topic"
            className="form-control"
            name="abstract_topic"
            rows="6"
            value={this.state.submission.abstract_topic}
            onChange={this.onChangeFormElement.bind(this, 'abstract_topic')}
          />
        </div>

        <div className="form-group">
          <p>
            Please tell us what position you will be taking on that topic, or what the thesis of your article will be.
          </p>
          <textarea
            id="abstract_thesis"
            className="form-control"
            name="abstract_thesis"
            rows="6"
            value={this.state.submission.abstract_thesis}
            onChange={this.onChangeFormElement.bind(this, 'abstract_thesis')}
          />
        </div>

        <div className="form-group">
          <p>
            Please tell us what method you’ll be using to address your topic (e.g. interviews? literature review?
            personal essay? analysis of LARP materials? etc.)
          </p>
          <textarea
            id="abstract_methodology"
            className="form-control"
            name="abstract_methodology"
            rows="6"
            value={this.state.submission.abstract_methodology}
            onChange={this.onChangeFormElement.bind(this, 'abstract_methodology')}
          />
        </div>

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