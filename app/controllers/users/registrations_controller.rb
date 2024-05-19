# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  respond_to :json

  protected

  def after_sign_up_path_for(resource)
    binding.pry
    Rails.logger.debug "Redirecting to new_user_session_path"
    flash[:notice] "Signed up successfully. Please log in."
    new_user_sesion_path
  end

  private

  def respond_with(resource, _opts={})
    if resource.persisted?
      render json: { message: "Signed up successfully." }, status: :created
    else
      render json: { errors: resource.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def respond_to_on_destroy
    head :no_content
  end
end
