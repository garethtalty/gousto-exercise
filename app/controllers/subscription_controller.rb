class SubscriptionController < ApplicationController

	def update
		respond_to do |format|
			format.html do
			end
			format.json do
				res = {:error=>false}
				res[:return] = "Subscription controller received the AJAX post"
				render :json => res
			end
		end
	end
end
