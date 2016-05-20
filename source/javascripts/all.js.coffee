#= require jquery
#= require bootstrap-sprockets
#= require react
#= require fittext
#= require submissions
#= require_self

updateDisplayIfs = ->
  $('[data-display-if]').each (i, el) ->
    $el = $(el)
    if $($el.data('display-if')).size() > 0
      $el.show()
    else
      $el.hide()

$ ->
  $('.jumbotron h1, .navbar-default .navbar-brand').fitText(1.1)
  updateDisplayIfs()
  $('[data-display-if-target]').on('change', updateDisplayIfs)

  $('form[data-validate-required]').each ->
    $form = $(this)
    $form.submit (e) ->
      $form.find(':input:visible:not([data-optional]):not(:submit)').each ->
        $input = $(this)
        $formGroup = $input.closest('.form-group')

        val = $input.val()
        if val == null || val.trim() == ''
          $formGroup.addClass('has-feedback has-error')
          errorMarkup = """
          <span data-error-feedback class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>
          <span data-error-feedback class="sr-only">(field is required)</span>
          """
          $formGroup.append(errorMarkup)
        else
          $formGroup.removeClass('has-feedback has-error')
          $formGroup.find('data-error-feedback').remove()

      if $form.find(':input:not([data-optional]):not(:submit)').closest('.form-group').is('.has-error')
        e.preventDefault()
        $form.find(':submit').before """
        <div class="alert alert-danger">
          Please fill out all required fields above.
        </div>
        """
      else
        $form.find(':submit').closest('.form-group').find('.alert').remove()
