var SubmissionForm = React.createClass({
  getInitialState: function() {
    return {
      submission: {
        name: null,
        email: null,
        phone: null,
        title: null,
        submission_type: null,
      }
    };
  },

  onChangeFormElement: function(field, event) {
    var newState = this.state;
    event.target.value
  },

  render: function() {
    return (
      <form className="form" action="/submit-abstract.php">
        <div className="form-group">
          <label className="control-label" htmlFor="name">Your name</label>
          <input id="name" className="form-control" type="text" name="name" value={this.state.name} />
        </div>

        <div className="form-group">
          <label className="control-label" htmlFor="email">Your email address</label>
          <input id="email" className="form-control" type="email" name="email" />
        </div>

        <div className="form-group">
          <label className="control-label" htmlFor="phone">
            Your phone number
            <small> (in case we can't reach you by email)</small>
          </label>
          <input id="phone" className="form-control" type="tel" name="phone" />
        </div>

        <div className="form-group">
          <label className="control-label" htmlFor="title">Title of submission</label>
          <input id="title" className="form-control" type="text" name="title" />
        </div>

        <div className="form-group">
          <label className="control-label" htmlFor="submission_type">Submission type</label>
          <select id="submission_type" className="form-control" name="submission_type">
            <option></option>
            <option>Essay with accompanying LARP scenario</option>
            <option>Article</option>
          </select>
        </div>
      </form>
    );

    // /   .alert.alert-warning
    // /     %h3 Additional information about LARP submissions
    // /
    // /     :markdown
    // /       Game Wrap publishes LARP scenarios in conjunction with an essay concerning the design, writing process, or other topics specifically related to the attached LARP materials (as opposed to, for example, what happened in particular runs of the game).  If an essay discusses multiple LARPs, an article not including the LARP materials may be a better format for publication.
    // /
    // /       The LARP is intended to serve as supplemental material to the author’s essay, allowing readers to examine the game being discussed and even play it themselves. We are typically looking for short LARPs that contain everything necessary for play &emdash; including the scenario and all necessary rules.
    // /
    // /   .form-group
    // /     %label.control-label{for: "abstract_topic"} Abstract
    // /     :markdown
    // /       A short description of your submission.  Article abstracts should include information about the subject of your article and what you hope to say about it.  Larp abstracts should include a short description of the larp as well as what you hope to say about it in your author's notes.
    // /
    // /       Please give us a short description of the topic of your article.
    // /     %textarea.form-control{name: "abstract_topic", rows: 6}
    // /
    // /   .form-group
    // /     :markdown
    // /       Please tell us what position you will be taking on that topic, or what the thesis of your article will be.
    // /     %textarea.form-control{name: "abstract_thesis", rows: 6}
    // /
    // /   .form-group
    // /     :markdown
    // /       Please tell us what method you’ll be using to address your topic (e.g. interviews? literature review? personal essay? analysis of LARP materials? etc.)
    // /     %textarea.form-control{name: "abstract_methodology", rows: 6}
    // /
    // /   .form-group{"data-display-if" => "select[name=submission_type] option:selected:contains('LARP')"}
    // /     :markdown
    // /       If you would like us to consider including a LARP you have written to supplement your article, please tell about the accompanying LARP. For instance, describe the scenario, rule system used (if any), number of players, and an approximate idea of how long the written materials for the LARP are.
    // /     %textarea.form-control{name: "abstract_larp_info", rows: 6}
    // /
    // /   .form-group
    // /     %label.control-label{for: "other_info"} Anything else you'd like to tell us?
    // /     %textarea.form-control{name: "other_info", rows: 6, "data-optional" => true}
    // /
    // /   .form-group
    // /     %input.btn.btn-default{type: "submit"}
  }
});