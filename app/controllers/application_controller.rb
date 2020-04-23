class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in? 

  def current_user 
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def log_in!(user) 
    @current_user = user
    session[:session_token] = user.session_token
  end 

  def log_out!
    current_user.reset_session_token! 
    session[:session_token] = nil 
    @current_user = nil 
  end 

  def logged_in? 
    !!current_user 
  end 

  def require_logged_out 
    redirect_to user_url(current_user) unless logged_in? 
  end 

  def require_log_in 
    redirect_to new_session_url unless logged_in? 
  end 
end
